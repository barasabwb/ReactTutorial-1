import React from "react"
import List from "./List";
import Header from "./Header";
import InputList from "./InputList";
import { v4 as uuidv4 } from "uuid";


class MyContainer extends React.Component{
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    handleChange = (id) =>{
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                  return{
                      ...todo,
                      completed: !todo.completed
                  }
                }
                return todo
            }),
        }))

    }
    delTodo = id => {
       this.setState({
           todos:[
               ...this.state.todos.filter(todo=>{
                   return todo.id !== id;
               } )
           ]
       })

    }
    addTodoItem = title =>{
        const newTodo ={
            id:uuidv4(),
            title: title,
            completed: false

        };
        this.setState({
            todos:[...this.state.todos, newTodo]
        })

    }
    updateTodoItem = (newTitle,id) =>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if (todo.id==id){
                    todo.title = newTitle
                }
                return todo
            }),
        })

    }
    render() {
        return  (
          <div className="container">
              <div className="inner">
              <Header/>
              <InputList
                  addTodoProps={this.addTodoItem}/>
            <List
                todos={this.state.todos}
                handleChangeTodos = {this.handleChange}
                deleteTodoProps={this.delTodo}
                updateTodoItem = {this.updateTodoItem}

            />

          </div>
          </div>
        )
    }

}
export default MyContainer