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

>It is important to note that Class Components use different hooks for handling the component `lifecycle`. (*lifecycle is the order of operations in a React component*)

Class Components are better suited for larger, more state-heavy components.

## What is a Class?
Classes are templates of code that can be reproduced to create something. (using the `new` keyword)

Classes carry with it this idea of `encapsulation`, where all the properties and functionality of the object the class is representing is present in the class, so you can do things like `dog.run()`, `dog.bark()`, etc.

Objects are instances of a particular class. 
Instances of classes `inherit` all of the properties of the class, so the object will have access to all the methods available to the class it was created from. 

>Analogy: A class is like a cookie cutter stencil and the actual cookie is the object/instance.