
## Explain using code examples what is meant by props and state in React JS?

In React, props and state are used to provide structure to a component and handle dynamic or reactive data.

Props, short for properties, are values passed to a component from its parent component. They are read-only and cannot be modified within the child component. Props allow a parent component to pass data down to a child component.

Here is an example of a component that receives props:

```
const MyComponent = (props) => {
  return (
    <div>
      <p>Hi {props.myProp}!</p>
    </div>
  );
}
```

Code in the parent component:
```
const App = () => {
  return (
    <div>
      {/* pass a value for myProp when rendering the component */}
      <MyComponent myProp="Sanat" />
    </div>
  );
}
```


In the example the parent component passes my name down to the child component. Where the child component uses the value that has been passed down.In summary, props are values passed to a component from its parent, and functional components can access props using the function's arguments.


State, on the other hand, is a feature of React components that allows them to maintain and update data within themselves. Unlike props, which are passed down from a parent component, a component's state is managed within itself.


Here is an example of a functional component that uses state to create a simple counter:

```
import React, { useState } from 'react';

const MyCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // update the count state by calling setCount
    setCount(count + 1);
  };

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={handleClick}>Click me to increment the count!</button>
    </div>
  );
}

export default MyCounter;

```

The use state hook maintains the global state and makes sure that whenever count is accessed it's value is persistent across the component. This is very important in order to have correct data throughout the component.


## In functional programming, what does the term functor mean? Can you give an example in JavaScript?

A functor is a type of object that can be "mapped" over in functional programming. This means that a functor has a map method that takes a function and applies it to the functor's value, returning a new functor. This is useful because it allows us to use the same techniques for working with and transforming data types that have a map method, regardless of the specific type of data they contain.This makes our code more modular and easier to understand and maintain.

Here's an example of a functor 

```
const functor = [10,20]

const doubled = functor.map( x => x * 2);

console.log(doubled); 

```


## We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.

| Method | Advantage | Disadvantage|
|----------|----------|----------|
| Callbacks  | Simple and easy to understand  | 	Can make code hard to read and maintain, especially with nested callbacks |
| Promises  | Provides a more structured way of handling asynchronous operations than callbacks  | More complex than callbacks, which can make them more difficult to understand for some developers  |
| Streams  |	Efficient and memory-efficient way of working with data  | Can be more difficult to work with than other data types, such as arrays  |



## With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements.

The CSS Box Model is a model used by CSS to describe the rectangular boxes that are generated for elements in the document tree. Each box has a content area, surrounded by optional padding, a border, and a margin. The diagram below illustrates this model:

![Screenshot 2022-12-12 at 11 40 27 p m](https://user-images.githubusercontent.com/51191924/207183154-e21f9a10-a779-42f9-8263-c2a417367706.jpg)

As seen in the diagram above, each element has these properties around them that can be changed and tweaked in order to get the reqired layout. Here is a code example of a box with various box model techniques used.

```

!DOCTYPE html>
<html>
<head>
<style>
div {
  background-color: black;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
</style>
</head>
<body>

<div>This is a box</div>

</body>
</html>

```

## Detail how the browser loads and bootstraps a rich web application from an initial URL.

When a user enters a URL into their web browser, the browser begins by sending a request to the web server associated with that URL. The server then sends back a response, which typically includes the HTML code for the website. The web browser then begins to parse the HTML code, using it to construct the DOM tree.

As the browser builds the DOM tree, it also begins to download and parse any additional resources that the website requires, such as CSS files, JavaScript files, and images. These resources may be specified in the HTML code, or they may be loaded asyncrhonously by JavaScript code that is executed as the page is loading.

Once the browser has downloaded and parsed all of the necessary resources, it can begin to render the website to the user. This typically involves applying the CSS files to the content in the DOM tree, and then executing any JavaScript code that is needed to create interactive features on the page. After all of this is done, the user can start interacting with this rich web app.


