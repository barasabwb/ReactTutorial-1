import React, {Component} from "react"
import { FaPlusCircle } from "react-icons/fa"

class InputList extends Component{
    state={
        title:""
    }
    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })

    };
    handleSubmit = e =>{
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });

        }else{
            alert("Cannot be Empty")
        }

    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text"
                       placeholder="Add Todo...."
                       value={this.state.title}
                       onChange={this.onChange}
                       name="title"

                />
                <button  className="input-submit">  <FaPlusCircle
                    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} /></button>
            </form>
        )
    }
}
export default  InputList;