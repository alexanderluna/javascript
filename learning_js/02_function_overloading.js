/*
Javascript doesn't support function overloading which means you can't declare
multiple functions with the same name but different arguments and expect
Javascript to pick the right function.

With this in mind, guess the output of the following piece of code.
*/

function calculateArea(length, width) {
    return length * width;
}

function calculateArea(length) {
    return length * length;
}

console.log(calculateArea(4, 5));

/*
This outputs: 16

If you name several function with the same name, Javascript will not throw an
error but it will call only the last one you declared and ignore all the others.

You can get around this however by manually checking your arguments
*/

function calculateAreas(length, width) {
    if (width === undefined) {
        return length * length;
    }

    return length * width;
}

console.log(calculateAreas(4, 5, 6));

