import React from "react"
import MyContainer from "./MyContainer";

class ListItem extends React.Component{
    render() {
        return <li>

            <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.handleChangeProps(this.props.todo.id)}/>
            <button onClick={()=> this.props.deleteTodoProp(this.props.todo.id)}>Delete</button>

            {this.props.todo.title}</li>
    }


}

export default  ListItem