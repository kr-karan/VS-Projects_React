import React, { useState } from 'react'

function ParentCompo() {
    const [age,setAge] = useState(20);
    const [salary,setSalary] = useState(5000);

  return (
    // console.log("rendering Log");
    <div>
        <Title/>
        <Card age = {karan} />
        <Count/>
        <Card/>
        <Count/>
    </div>
  )
}

export default ParentCompo
