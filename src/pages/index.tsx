import React, {useState} from "react";
import Header from "./header";
import Left from "./left"
import Right from "./right"
import './index.css'
import { useSelector } from "react-redux";
import { RootState } from "../store"

type Fct = (x: string) => void

function MyComponet() {
    const vals = useSelector((state:RootState)=>state.valt.val)

    let [valueOne, setValueOne] = useState("")
    let [valueTwo, setValueTwo] = useState("")
    let [operator, setOperator] = useState("")
    let [calResult, setCalResult] = useState(0)


    const getChildValueOne:Fct = (val: string) => {
        setValueOne(val)
    }

    const getChildValueTwo:Fct = (val: string) => {
        setValueTwo(val)
    }

    const getChildOperator:Fct = (val: string) => {
        setOperator(val)
    }

    function formatOperator(val: string) {
        if (val === "add") { return '+' }
        if (val === "sub") { return '-' }
        if (val === "mul") { return '*' }
        if (val === "exc") { return '/' }
    }

    function getCalResult(val: string) {
        console.log(val)
        if (val === "+") { setCalResult( Math.floor(Number(valueOne) + Number(valueTwo))) }
        if (val === "-") { setCalResult( Math.floor(Number(valueOne) - Number(valueTwo))) }
        if (val === "*") { setCalResult( Math.floor(Number(valueOne) * Number(valueTwo))) }
        if (val === "/") { setCalResult( Math.floor(Number(valueOne) / Number(valueTwo))) }
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <Header  getValueOne={getChildValueOne} getValueTwo={getChildValueTwo}/>
            </div>
            <div className="page-body">
                <div className="page-body-left">
                    <Left getOperator={getChildOperator}/>
                </div>
                <div className="page-body-right">
                    <Right valueOne={vals} valueTwo={valueTwo} operator={formatOperator(operator) || ''} calResult={calResult} getCalResult={getCalResult}/>
                </div>
            </div>
        </div>
    )
}

export default MyComponet