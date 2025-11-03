/*
In Javascript, different variable declarations have different scope.

var = global scope (outside functions) otherwise function scope
let = block scope
const = block scope


With this in mind, guess the output of the following piece of code.
*/

function countDown() {
    const cd = [];
    for (var i = 10; i > 0; i--) {
        cd.push(() => {
            console.log(`countdown: ${i}`);
        });
    }

    return cd;
}

const counter = countDown();
counter.forEach(c => c());

/*
This outputs:
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0
countdown: 0

The cd array is an array of closures each logging the current value of the
variable i. Variables declared with the var keyword, have a function scope which
means they are accessible by everyone within the function. By the time the
closure functions are called, i is 0. Instead of creating a function level
variable you can create a block level variable with let instead to solve this
problem.
*/