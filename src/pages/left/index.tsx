
import React, { useState } from 'react'
import './index.css'

type Fct = (x: string) => void

interface Fc {
    getOperator: Fct
}

function Left(props: Fc) {
    let {getOperator} = props
    // let [operator, setOperator] = useState("")

    function handleOperatorChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // setOperator(event.target.value)
        getOperator(event.target.value)
    }

    return(
        <div className="left-container">
            <select onChange={handleOperatorChange}>
                <option value="">Select an option</option>
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="mul">*</option>
                <option value="exc">/</option>
            </select>
        </div>
    )
}

export default Left