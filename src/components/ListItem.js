import React from "react"
import MyContainer from "./MyContainer";

class ListItem extends React.Component{
    render() {
        return <li>{this.props.todo.title}</li>
    }


}

export default  ListItem