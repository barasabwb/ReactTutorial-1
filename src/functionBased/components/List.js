import React from "react"

import ListItem from "./ListItem";

class List extends React.Component{
    render() {
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeTodos}
                        deleteTodoProp={this.props.deleteTodoProps}
                        updateTodoItem = {this.props.updateTodoItem}
                    />

                ))}
            </ul>

        )
    }


}
export default List
