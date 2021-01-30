import React from 'react'
import Person from './components/PersonClass'

/* *****OLD WAY*****

class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Elliot Alderson'
    }
  }

  render() {

    return (
      <h1>Hello, {this.state.name}.</h1>
    )
  }
} */

///// NEW WAY /////

class App2 extends React.Component {
  state = {
    name: 'Elliot Alderson',
    age: 28,
    city: 'NYC'
  }

  handleClick = () => {
    this.setState({
      name: 'Richard Hendricks',
      age: 26,
      city: 'Palo Alto'
    })
  }

  render() {
    return (
      <>
        <Person
          name={this.state.name}
          age={this.state.age}
          city={this.state.city}
        />
        <button onClick={this.handleClick}>Change Person</button>
      </>

    )
  }
}

export default App2