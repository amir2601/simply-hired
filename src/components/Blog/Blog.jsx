import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-5/6 mx-auto my-8 text-center'>
            <div className="hero h-[20vh] md:h-[40vh] my-8" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Blog</h1>
                    </div>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    When should you use context API?
                </div>
                <div className="collapse-content">
                    <p>The Context API in React is used for managing global state that needs to be accessed by multiple components. It is useful when you have data that needs to be shared between components that are not directly related, or when you want to centralize state management for larger applications.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a custom hook?
                </div>
                <div className="collapse-content">
                    <p>A custom hook is a function in React that allows you to reuse stateful logic across multiple components. It's a way to extract common logic from components so that it can be easily shared and reused. Custom hooks allow you to encapsulate and organize functionality that might otherwise be spread across different components, making your code more modular and easier to maintain. Custom hooks start with the word "use" and can be used to handle things like form validation, fetching data from an API, or even managing the state of your application.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useRef?
                </div>
                <div className="collapse-content">
                    <p>UseRef is a hook that provides a way to access and manipulate the properties of a DOM element, such as its current value or focus state. It creates a mutable reference object that can hold any value and persists throughout the lifecycle of a component, even when the component re-renders. This can be useful for tasks such as getting the value of an input field or managing focus.

                        Unlike state variables, changing the value of a useRef object does not trigger a re-render of the component, which can help optimize performance by avoiding unnecessary updates. useRef can also be used to store any value that needs to persist between renders, such as the previous value of a prop or a state variable. Overall, useRef is a powerful tool for working with the DOM in React and can help simplify and optimize your code.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useMemo?
                </div>
                <div className="collapse-content">
                    <p>useMemo is a hook that allows you to memoize the results of expensive computations and only recompute them when their dependencies change. It takes two arguments: a function that performs the expensive computation, and an array of dependencies that determine when the computation should be re-run.

                        By memoizing the results of a computation, useMemo can help optimize the performance of your application by reducing the number of times that expensive computations are performed. This can be particularly useful when working with large datasets or complex calculations.

                        However, it's important to use useMemo judiciously, as it can also add complexity to your code and may not always result in a significant performance improvement. In general, you should only use useMemo when you have a computation that is expensive and has a high likelihood of being repeated frequently with the same input values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;