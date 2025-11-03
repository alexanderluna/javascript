/*
In Javascript, async and await are syntactic sugar over Promises.

With this in mind, guess the output of the following piece of code.
*/

console.log("Starting Server");


async function fetchData() {
    console.log("Fetching data");
    let data = await dataAPI();
    console.log("Done fetching data:", data);
}

async function dataAPI() {
    console.log("Getting data from Database");
    return {};
}

fetchData();

console.log("Closing Server");

/*
This outputs:
Starting Server
Fetching data
Getting data from Database
Closing Server
Done fetching data: {}

First the code is executed synchronous, outputting:

-> Starting Server
-> Fetching data

The await keyword pauses the execution of the function until the internal
Promise is resolved which is the call to dataAPI():

-> Getting data from Database

After this internal Promise is resolved, the execution continues synchronous
and logs:

-> Closing Server

Until it finally finishes the outer Promise fetchData().

-> Done fetching data: {}
*/