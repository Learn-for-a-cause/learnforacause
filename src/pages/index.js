import React from "react"
import Header from "../components/Header"
import CardList from "../components/CardList"
import "./index.css"


export default () => (
    <div>
        <Header/>
        <CardList data={"Machine Learning"} />
    </div>
)