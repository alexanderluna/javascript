/*
In Javascript, all declarations (var, let, const, function, class) are hoisted.
Hoisting means that these declarations are relocated to the scope's beginning.
However, their initialization is deferred until your program actually reaches
the line.

With this in mind, guess the output of the following piece of code.
*/

let temperature = 19;

function displayTemperature() {
    console.log(`Current temperature: ${temperature}`);
}

function forecastTemperature() {
    console.log(`Expected temperature tomorrow: ${temperature}`);
    var temperature = 12;
}

displayTemperature();
forecastTemperature();

/*
This will output:
Current temperature: 19
Expected temperature tomorrow: undefined

The "temperature" variable inside the forecastTemperature() is hoisted which
shadowed the global "temperature" variable and makes it possible to reference it
in the console.log() statement above it. However, the variable itself isn't
initialized after the variable is referenced.

Since ES2015, you avoid this behavior by using the "let" keyword to declare
you variables. "let" variables are still hoisted but they will actually throw
an ReferenceError and not go unnoticed as before.

Functions are also hoisted but they are hoisted entirely including their name
and body which means you can call a function before it is declared.

For function expressions on the other hand only their declaration is hoisted.
*/