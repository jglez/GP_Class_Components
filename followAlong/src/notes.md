# Functional Components Review
Functional Components are excellent for quickly rendering something to the screen with minimal state. Functional Components used to be very limited pre-hooks until hooks were added to React in 2019.

As of now, Functional Components can do everything Class Components do, however, they are better for light usage managing few pieces of state.

## Component Features
  - Creation and Rendering of DOM elements
  - Holding State
  - Event Handling (user interaction)
  - Component Nesting
  - Passing with Props

## Component State
Component state uses the `useState()` hook:
>`const [name, setName] = useState('Elliot Alderson')`

The first item in the array is the actual state and the second is the state modifier which follows the convention of starting with 'set' and then whatever state was named as.

The `useState()` hook declares the initial state. For example, the string `Elliot Alderson` will be stored in `name`.

## Code Organization
It is good practice to isolate related business logic features into their own components because it enables easier and faster testing.

---

# Class Components
Class Components used to be the only way of managing state pre-hooks in functional components. As such, a lot of companies still have Class Components in their codebase, therefore, it is important to learn both standards.

>It is important to note that Class Components cannot use hooks, thus, they have their own special way of handling the component `lifecycle`. (*lifecycle is the order of operations in a React component*)

Class Components are better suited for larger, more state-heavy components.

## What is a Class?
Classes are templates of code that can be reproduced to create something. (using the `new` keyword)

Classes carry with it this idea of `encapsulation`, where all the properties and functionality of the object the class is representing is present in the class, so you can do things like `dog.run()`, `dog.bark()`, etc.

Objects are instances of a particular class. 
Instances of classes `inherit` all of the properties of the class, so the object will have access to all the methods available to the class it was created from. 

>Analogy: A class is like a cookie cutter stencil and the actual cookie is the object/instance.

## Class Component Syntax
```
class App extends React.Component {
  render() {
    return (
      <h1>Hello, friend</h1>
    )
  }
}
```

The keyword `extends` allows for inheritance of properties from the Parent Class, which is React.Component in this case. This allows our generic class to access special properties from React, such as the `render()` function, which allows us to display data in the browser.

## State Management
```
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Elliot Alderson',
      age: 28,
      city: 'NYC'
    }
  }
}
```
Notice that with Class Components, state is not managed one slice at a time like with Functional Components. Instead of doing something like:
```
const [name, setName] = useState('Richard Hendricks')
const [age, setAge] = useState('26')
const [city, setCity] = useState('San Francisco')
```

we have an object holding all of our state.

>Addendum: The example above is the old way of creating Class Components, now we can omit the constructor and super altogether, so this works just as well:
```
class App2 extends React.Component {

  state = {
    name: 'Elliot Alderson'
  }
  
  render() {
    return (
      <h1>Hello, {this.state.name}.</h1>
    )
  }
}
```

## Methods
It's important to remember that everything under the `render()` is considered execution space, so if you placed a handleClick function you would have to declare it as a const because the computer would actively read it, put into memory, and immediately make use of it.

However, outside of the `render()` can be considered 'definition space.' If you write a function here, it won't be executed until it is invoked. When writing methods here they belong to the class, so you don't have to declare it as a const.

Thus, when you want to use it on an onClick for a button, let's say, you will need to refer to it using the `this` keyword because it's a method on the class.

```
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
        <button onClick={this.handleClick}>Change Person</button>
      </>
```