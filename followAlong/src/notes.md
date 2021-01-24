# Component Features
  - Creation and Rendering of DOM elements
  - Holding State
  - Event Handling (user interaction)
  - Component Nesting
  - Passing with Props

# Component State
Component state uses the `useState()` hook:
>`const [name, setName] = useState('Elliot Alderson')`

The first item in the array is the actual state and the second is the state modifier which follows the convention of starting with 'set' and then whatever state was named as.

The `useState()` hook declares the initial state. For example, the string `Elliot Alderson` will be stored in `name`.

# Code Organization
It is good practice to isolate related business logic features into their own components because it enables faster and easier testing.