/*
Javascript runs on an event loop. A key part of this even loop is that code has
to be able to run in an asynchronous way to avoid blocking the event loop.

setTimeout() uses a callback to handle asynchronous code execution after a
specified amount of time.

Promise is an object representing an asynchronous operation. It uses the .then()
syntax instead of a callback to execute upon success and the .catch() syntax
upon failure.

With this in mind, guess the output of the following piece of code.
*/

console.log("Starting Server on Port 8080");

setTimeout(() => {
    console.log("Fetching Data");
}, 0);

Promise.resolve().then(() => {
    console.log("Handling Request");
});

console.log("Shutting down Server");

/*
This outputs:
Starting Server on Port 8080
Shutting down Server
Handling Request
Fetching Data

Callbacks are added to the job queue as a Task. Promises are added to the job
queue as Microtasks. Microtasks have a higher priority and are executed first.

This means the code is first run synchronous logging:

Starting Server on Port 8080
Shutting down Server

and adding the setTimeout() as a Task to the job queue and Promise as a
Microtask to the job queue. Now, it pulls a job from the queue and based on
priority it processes the Promise microtask first and the setTimeout task last.
*/