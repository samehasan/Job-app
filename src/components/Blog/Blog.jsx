import React from 'react';

const Blog = () => {
    return (
        <div>
             <h1>Questions and Answers</h1>
    <h2>1. When do we use Context API?</h2>
    <p>Context API is used to manage global state that needs to be accessed by multiple components within a React application. It is a way to avoid prop drilling and make state management more efficient. For example, you can use Context API to manage the current user's authentication status or the current theme of the application.</p>

    <h2>2. What is a custom hook?</h2>
    <p>A custom hook is a function that uses one or more built-in hooks in React to provide additional functionality or abstraction for a specific use case. Custom hooks are reusable and can be shared across multiple components, making it easier to manage complex logic in your application. For example, you can create a custom hook to fetch data from an API and handle loading and error states.</p>

    <h2>3. What is useRef() hook?</h2>
    <p>useRef() is a built-in hook in React that provides a way to create a mutable reference that persists across renders. It can be used to access and modify the properties of a DOM element or to store any other mutable value that needs to persist across renders. For example, you can use useRef() to store a reference to a child component and access its properties or methods from the parent component.</p>

    <h2>4. Why do we use useMemo() hook?</h2>
    <p>useMemo() is a built-in hook in React that provides a way to optimize the performance of expensive calculations or operations. It memoizes the result of a function and only recomputes it if its dependencies change. This can help to reduce unnecessary re-renders and improve the overall performance of your application. For example, you can use useMemo() to compute a complex data transformation or filter an array of data based on some criteria.</p>
        </div>
    );
};

export default Blog;