import { useState } from "react"

function Counter(){
    let [count, setCount] = useState(0);
    function countHandler(){
        setCount(count + 1);
    }
    return(
        <div>
            <div> Count: { count }</div>
            <button onClick={countHandler}>Increment</button>
        </div>
    )
}

export default Counter;