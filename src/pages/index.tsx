import React, {useState} from "react";
import Header from "./header";
import Left from "./left"
import Right from "./right"
import './index.css'

function MyComponet() {
    let [valueOne, setValueOne] = useState("")
    let [valueTwo, setValueTwo] = useState("")
    let [operator, setOperator] = useState("")

    const getChildValueOne:Function = (val: string) => {
        setValueOne(val)
    }

    const getChildValueTwo:Function = (val: string) => {
        setValueTwo(val)
    }

    const getChildOperator:Function = (val: string) => {
        setOperator(val)
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <Header getValueOne={getChildValueOne} getValueTwo={getChildValueTwo}/>
            </div>
            <div className="page-body">
                <div className="page-body-left">
                    <Left getOperator={getChildOperator}/>
                </div>
                <div className="page-body-right">
                    <Right valueOne={valueOne} valueTwo={valueTwo} operator={operator}/>
                </div>
            </div>
        </div>
    )
}

export default MyComponet