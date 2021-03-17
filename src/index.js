import React from "react"
import ReactDOM from "react-dom"
//component file
import MyContainer from "./components/MyContainer"
import "./App.css"

const element = <h1>This is my React Tutorial</h1>


ReactDOM.render(<React.StrictMode><MyContainer/></React.StrictMode>, document.getElementById("root"));