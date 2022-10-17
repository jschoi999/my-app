import React, {useState} from "react";

const Counter = () => {

    //state관리.. vuex와 비슷한 기능?
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;