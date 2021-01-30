import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, I'm {this.props.name}.</h1>
        <h2>I'm {this.props.age} years old and I live in {this.props.city}.</h2>
      </>
    )
  }
}

export default Person