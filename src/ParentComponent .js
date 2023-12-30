import React from 'react'
import ChildComponent from '../src/ChildComponent'
function ParentComponent () {
  const propsvalue = "hello i am in parent"

  return (
    <div> 
    <ChildComponent value={propsvalue}/>
    </div>
  )
}

export default ParentComponent 