import React, { useState } from 'react'

const Counter1 = () => {
    const [count,setCount]=useState(0)


    const Inc=()=>{
      setCount(count+1)
    }

    const Dec=()=>{
        setCount(count-1)
    }

    const Res=()=>{
        setCount(0)
    }

    return (
        <div>
        <h3>Count:{count}</h3>
            <button onClick={Inc}>Inc</button>
            <button onClick={Dec}>Dec</button>
            <button onClick={Res}>Res</button>

        </div>
    )
}

export default Counter1
