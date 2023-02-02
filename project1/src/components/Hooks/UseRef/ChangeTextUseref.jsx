import React, { useEffect, useRef, useState } from 'react'

function ChangeTextUseref() {
    const [state,setState] = useState('');
    const inputRef = useRef('trial');
    const FocusRef = useRef();

    function focus(){
        FocusRef.current.focus()
    }
    useEffect(()=>{
        inputRef.current = state
    },[state])
  return (
    <div>
      <input type = 'text' ref = {FocusRef} onChange={e =>setState(e.target.value)}></input>
      <button onClick={focus}>Focus</button>
      This is current {state} ,This is PrevState {inputRef.current}
    </div>
  )
}

export default ChangeTextUseref
