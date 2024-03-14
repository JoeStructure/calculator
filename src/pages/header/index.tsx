import React, {useState} from "react";
import './index.css'

interface Fc {
    getValueOne: Function,
    getValueTwo: Function
}

function Header(props: Fc) {
    const { getValueOne, getValueTwo } = props
    const [valueOne, setValueOne] = useState<string>("")
    const [valueTwo, setValueTwo] = useState<string>("")

    const changeValueOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueOne(event.target.value)
        getValueOne(event.target.value)
    }

    const changeValueTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTwo(event.target.value)
        getValueTwo(event.target.value)
    }

    return(
        <div className="header-container">
            <input type="text" value={valueOne} onChange={changeValueOne}/>
            <input type="text" value={valueTwo} onChange={changeValueTwo}/>
        </div>
    );
}

export default Header