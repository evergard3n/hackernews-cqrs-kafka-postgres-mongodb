// import { Post, Comment } from "./definitions";
// import User from "./definitions";

// const user1: User = {
//   username: "john_doe",
//   display_name: "john doe",

//   id: "1",

// };

// const user2: User = {
//   username: "alice_johnson",
//   display_name: "Alice",
//   id: "2",
// };

// const user3: User = {
//   username: "chris_lee",
//   id: "3",
//   display_name: "Chris"
// };
// export const listUsers: User[] = [user1, user2, user3]

// const text = `Closures are a fundamental concept in JavaScript that every developer should understand. In this post, we will explore what closures are and how they work. To understand closures, we must first understand scope. Scope dictates variable accessibility. JavaScript has global and local scopes.

// A closure occurs when a nested function retains access to variables from its outer function's scope, even after the outer function has finished executing. Imagine a function, outerFunction, containing a variable and a nested function, innerFunction. innerFunction can access outerFunction's variable. This access persists even after outerFunction completes.

// This ability stems from lexical scope. When innerFunction is created, it forms a closure with outerFunction's environment, including its variables. This environment remains accessible to innerFunction.

// Closures have practical applications. They enable data encapsulation, creating private variables. They are also used in event handlers, ensuring event listeners retain access to necessary variables. Function factories and partial application rely on closures, allowing for flexible function creation. Asynchronous operations, like callbacks, utilize closures to maintain access to data after asynchronous tasks complete.

// Understanding closures is vital for writing efficient and maintainable JavaScript. They empower developers to create flexible functions, encapsulate data, and manage asynchronous tasks, enhancing application robustness and scalability.`

// const text2 = `Closures are a fundamental concept in JavaScript that every developer should understand. In this post, we will explore what closures are and how they work, delving into their underlying mechanisms and practical implications. To truly grasp the significance of closures, we must first revisit the concept of scope within JavaScript. Scope, in essence, defines the visibility and accessibility of variables, objects, and functions from different parts of your code. JavaScript primarily operates with two distinct scopes: global scope and local (or function) scope. Variables declared outside any function reside in the global scope, making them accessible from anywhere within your script. Conversely, variables declared inside a function are confined to the local scope, limiting their accessibility to that function and any nested functions contained within it.

// The magic of closures manifests when a nested function retains access to the variables of its outer (enclosing) function, even after the outer function has completed its execution. Picture a scenario where an outerFunction defines a variable and also contains an innerFunction nested within it. The innerFunction inherently possesses the ability to access variables from its own local scope, as well as the scope of its parent function, the outerFunction. This persistent access, even after the outerFunction has finished running, is the defining characteristic of a closure.

// This phenomenon is rooted in the concept of lexical scope. When the innerFunction is created, it establishes a closure with the lexical environment of the outerFunction. This environment encapsulates all the variables that were in scope at the time the innerFunction was created. Consequently, even when the outerFunction completes its execution, the innerFunction maintains a reference to this environment, enabling it to access the outerFunction's variables.

// Closures find extensive practical applications in JavaScript development. One prominent use case is data encapsulation. By leveraging closures, developers can create private variables and functions that are accessible only within a specific scope. This mechanism helps prevent unintended modification of variables from outside the intended scope, enhancing code robustness and maintainability.

// Another common application of closures lies in event handlers. Consider a scenario where you want to attach an event listener to a button. By using a closure, you can ensure that the event handler retains access to specific variables, even after the function that created the event handler has finished executing. This is crucial for maintaining context and ensuring that the event handler behaves as expected.

// Furthermore, closures are indispensable for implementing function factories and partial application. A function factory is a function that returns another function, often with some pre-configured parameters. Partial application involves creating a new function by pre-filling some of the arguments of an existing function. Both of these techniques rely on closures to maintain the necessary context and variables.

// Closures also play a vital role in handling asynchronous operations, such as callbacks and promises. In asynchronous programming, tasks are executed independently of the main program flow, and callbacks are used to notify the program when these tasks are completed. Closures ensure that the callback functions retain access to the necessary variables, even after the asynchronous tasks have finished. This is essential for processing the results of asynchronous operations and maintaining data integrity.

// In essence, understanding closures is paramount for writing efficient, maintainable, and robust JavaScript code. They empower developers to create flexible and powerful functions, encapsulate data, and handle asynchronous operations effectively. By mastering closures, you can elevate your JavaScript skills and build more sophisticated and scalable applications.
// `

// export const listposts: Post[] = [
//   {
    
//     author: user1,
//     content: text2,
//     post_id: "1",
//     created_at: "2025-01-01T10:00:00Z",
//     tags: [
//       "JavaScript", "Closures"
//     ],
//     comment_count : 2
//   },
//   {
    
//     author: user2,
//     content: "React hooks are a powerful feature that allow you to use state and other React features without writing a class. This post will cover the basics of hooks and how to use them.",
//     post_id: "2",
//     timestamp: "2025-02-15T12:00:00Z",
//     tags: [ "React", "Hooks", "JavaScript"]
//   },
//   {
    
//     author: user3,
//     content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, and it has many powerful features. This guide will cover everything you need to know to get started with CSS Grid.",
//     post_id: "3",
//     timestamp: "2025-03-10T14:00:00Z",
//     tags: [ "CSS", "Web Design"
//     ]
//   }
// ];
// export const comments: Comment[] = [
//   {
//     id: "1",
//     author: user1,
//     content: "Great post! I finally understand closures.",
//     post_id: "1",
//     timestamps: "2025-01-01T12:00:00Z"
//   },
//   {
//     id: "2",
//     author: user2,
//     content: "Thanks for the detailed explanation on hooks.",
//     post_id: "2",
//     timestamps: "2025-02-15T14:00:00Z"
//   },
//   {
//     id: "3",
//     author: user3,
//     content: "CSS Grid is amazing! This guide is very helpful.",
//     post_id: "3",
//     timestamps: "2025-03-10T16:00:00Z"
//   },
//   {
//     id: "4",
//     author: user1,
//     content: "I have a question about the useEffect hook.",
//     post_id: "2",
//     timestamps: "2025-02-16T10:00:00Z"
//   },
//   {
//     id: "5",
//     author: user2,
//     content: "Can you provide more examples on CSS Grid?",
//     post_id: "3",
//     timestamps: "2025-03-11T09:00:00Z"
//   }
// ];