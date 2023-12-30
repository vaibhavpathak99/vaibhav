import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <p>i am in parent {props.value}</p>
    </div>
  )
}

export default ChildComponent