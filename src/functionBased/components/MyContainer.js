    import React from "react"
    import List from "./List";
    import Header from "./Header";
    import InputList from "./InputList";
    import { Route, Switch } from "react-router-dom"
    import { v4 as uuidv4 } from "uuid";
    import About from "./pages/About"
    import NotMatch from "./pages/NotMatch"
    import Navbar from "./NavBar";


    class MyContainer extends React.Component{
        state = {
            todos: [],
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
                }), prevState
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
                    if (todo.id===id){
                        todo.title = newTitle
                    }
                    return todo
                }),
            })

        }
        componentDidMount() {
          const temp = localStorage.getItem("todos")
            const loadedTodos= JSON.parse(temp)
            if (loadedTodos){
                this.setState({
                    todos: loadedTodos
                })
            }
                 }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.todos!== this.state.todos){
                const temp = JSON.stringify(this.state.todos)
                localStorage.setItem("todos", temp)
            }


                 }

        render() {
            return  (
                <>
                <Navbar/>
                <Switch>
                <Route exact path="/">
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
                </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                    </Switch>
                    </>
            )
        }

    }
    export default MyContainer