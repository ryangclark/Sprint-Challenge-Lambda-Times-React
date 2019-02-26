## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

JavaScript is a loosely-typed programming language. That means that JavaScript isn't finnicky about the different types of information – numbers, strings, arrays, objects, classes, promises, etc. – you can use in your program. I mean finnicky in that JavaScript won't complain if it needed a certain type of data and got another. You can't multiply a string, for example, but instead of complaining about that by throwing an error, JavaScript just says "yeah, that's Not A Number" and continues on its way.

So in large applications, it's relatively easy to pass the wrong data or to change a piece of data into another type and not to have the developer notice the mistake. The mistake could have impacts on the application, but go unnoticed because JavaScript doesn't make a big fuss. So PropTypes is a way to insist that the program complain about incorrect data types.

- [x] Describe a life-cycle event in React.

Like, I should pick one of them and describe it? OK. Let's go with `componentDidMount()`:

As quick background, the React lifecycle describes how React creates, updates, and removes a component. Just like life.

Now, `componentDidMount()` occurs relatively early in the lifecycle of a class component, and it occurs only once (I'm pretty sure). It fires _after_ the `constructor()` and the initial `render()`. Because it fires relatively early and only once, it's a great place to set up subscriptions to data sources. In that case, the subscription will return some data, and `componentDidMount()` will invoke `setState()` to set that data to the state. That triggers another `render()`, which is kinda duplicative, so you might want to consider subscribing in the `constructor()` instead. Oh, and you shouldn't forget to unsubscribe to any subscription you initiate in `componentDidMount()` with a corresponding unsubscribe in `componentWillUnmount()` or you're at risk of creating a memory leak.

- [x] Explain the details of a Higher Order Component?

Higher-order components are like `wrapper`s in Python. I'd argue that Python's way of handling `wrapper`s is much more friendly, but that's a discussion for another time.

A higher-order component builds upon the concept of higher-order functions in JavaScript. A higher-order function is one that takes a function in as an argument or itself returns a function. A higher-order component, then, is one that takes a component in as an argument and returns another one.

That functionality can be difficult to wrap your mind around, but it offers some cool benefits. In my head, there are two big categories of benefits:
    1. *Conditional rendering:* A HOC can take in two components as parameters, run some logic to identify a condition (for instance, whether a user is logged in), and return the right component depending on the condition.
    2. *Component Factories:* A HOC can take in a component and add in functionality, much like a `class` does. We use HOC in `styled-components` to create styled components, and, if desired, to further customize an already customized component.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.
    1. *CSS* is built-into browsers and React. It's ready to go, and everyone knows how to use it.
    2. *CSS in JavaScript* using libraries like `styled-components`. This can be much more dynamic because the developer can use JavaScript logic _within_ the styles for extra dynamism.
    3. *In-line styles* are quite viable with JSX. Because components are typically reused, typing in-line styles typically isn't _that_ much more work than using CSS. This can be beneficial for performance because the browser doesn't need to find and download an outside CSS file.
