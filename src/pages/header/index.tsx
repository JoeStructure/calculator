import React, {useState} from "react";
import './index.css'

type Fct = (x: string) => void

interface Fc {
    // valueOne: string,
    // valueTwo: string,
    getValueOne: Fct,
    getValueTwo: Fct
}

function Header(props: Fc) {
    const { getValueOne, getValueTwo } = props
    // const [valueOne, setValueOne] = useState<string>("")
    // const [valueTwo, setValueTwo] = useState<string>("")

    const changeValueOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValueOne(event.target.value)
        getValueOne(event.target.value)
    }

    const changeValueTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValueTwo(event.target.value)
        getValueTwo(event.target.value)
    }

    return(
        <div className="header-container">
            <input type="text" onChange={changeValueOne}/>
            <input type="text" onChange={changeValueTwo}/>
        </div>
    );
}

export default Header