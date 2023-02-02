import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title'

function ParentCompo() {
    const [age,setAge] = useState(20);
    const [salary,setSalary] = useState(5000);

    const incrementAge = ()=>{
      setAge(age + 1)
    }
    
    // useCallback(,[age])

    const incrementSalary = ()=>{
      setSalary(salary + 1000)
    }
    
    
    // useCallback((,[salary])
  return (
    // console.log("rendering Log");
    <div>
        <Title/>
        <Count text = 'Age' count ={age} />
        <Button handleclick = {incrementAge}>Increment Age</Button>
        <Count text = 'Salary' count = {salary}/>
        <Button handleclick = {incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentCompo
