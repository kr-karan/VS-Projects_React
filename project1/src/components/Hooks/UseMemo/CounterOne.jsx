import React, { useMemo, useState } from 'react'

function CounterOne() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    const incrementCounter1 = () => {
        setCounter1(counter1 + 1);
    }

    const incrementCounter2 = () => {
        setCounter2(counter2 + 1);
    }

    const isEven = useMemo(() =>{
        let i =0;
        while(i<200000000) i++;
        return counter1%2 == 0;
    },[counter1])

  return (
    <div>
      <button onClick={incrementCounter1} >Counter1 - {counter1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <div>
      <button onClick={incrementCounter2} >Counter2 - {counter2}</button>
      </div>
    </div>
  )
}

export default CounterOne
