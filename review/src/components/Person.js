import React from 'react'

const Person = (props) => {
  return (
    <>
      {/* Retrieve data passed from App via props*/}
      <h1>Hello, {props.name}.</h1>
    </>
  )
}

export default Person