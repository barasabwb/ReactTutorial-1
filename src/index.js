import React from "react"
import{ BrowserRouter as Router } from "react-router-dom"
import ReactDOM from "react-dom"
//component file
import MyContainer from "./functionBased/components/MyContainer"
import "./functionBased/App.css"




ReactDOM.render(<React.StrictMode>
    <Router >
    <MyContainer/>
    </Router>
    </React.StrictMode>

    , document.getElementById("root"));