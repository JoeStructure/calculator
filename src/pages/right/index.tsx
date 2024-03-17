// import React, { useState } from 'react'
import './index.css'

type Fct = (x: string) => void

interface R {
    valueOne: string,
    valueTwo: string,
    operator: string,
    calResult: number,
    getCalResult: Fct
}

function Right(props: R) {
    // let [calResult, setCalResult] = useState(0)

    // function formatOperator(val: string) {
    //     if (val === "add") { return '+' }
    //     if (val === "sub") { return '-' }
    //     if (val === "mul") { return '*' }
    //     if (val === "exc") { return '/' }
    // }

    // function getCalResult(val: string) {
    //     if (val === "add") { setCalResult( Math.floor(Number(props.valueOne) + Number(props.valueTwo))) }
    //     if (val === "sub") { setCalResult( Math.floor(Number(props.valueOne) - Number(props.valueTwo))) }
    //     if (val === "mul") { setCalResult( Math.floor(Number(props.valueOne) * Number(props.valueTwo))) }
    //     if (val === "exc") { setCalResult( Math.floor(Number(props.valueOne) / Number(props.valueTwo))) }
    // }

    return(
        <div className="right-container">
            <div className="right-item">
                {props.valueOne}
            </div>
            <div className="right-item">
                {props.operator}
            </div>
            <div className="right-item">
                {props.valueTwo}
            </div>
            <div className="right-item">
                =
            </div>
            <div className="right-item">
                {props.calResult}
            </div>
            <button onClick={() => {props.getCalResult(props.operator)}}>计算</button>
        </div>
    )
}

export default Right