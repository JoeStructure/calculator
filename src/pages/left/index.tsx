
import React, { useState } from 'react'
import './index.css'

interface Fc {
    getOperator: Function
}

function Left(props: Fc) {
    let {getOperator} = props
    let [operator, setOperator] = useState("")

    function handleOperatorChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setOperator(event.target.value)
        getOperator(event.target.value)
    }

    return(
        <div className="left-container">
            <select value={operator} onChange={handleOperatorChange}>
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