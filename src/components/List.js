import React from "react"
import ReactDOM from "react-dom"
import ListItem from "./ListItem";

class List extends React.Component{
    render() {
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <ListItem key={todo.id} todo={todo} />

                ))}
            </ul>

        )
    }


}
export default List
