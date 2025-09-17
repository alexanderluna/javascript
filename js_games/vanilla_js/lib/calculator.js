window.onload = () => {
    attachEventsToButtons()
    handleKeypress()
}

let STORE = [[], [], []];
let RESULT = null;
let no_operator_present = true;
let display = document.querySelector('#display');
const OPERATIONS = ['*', '/', '+', '-'];
const SPECIAL_OPERATIONS = ['ac', 'bs', 'eq', 'Backspace', 'Enter'];


function attachEventsToButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', handlePress);
    })
}

function handleKeypress() {
    document.addEventListener("keydown", (event) => {
        handleOperation(event.key);
    })
}

function handlePress() {
    let input = this.dataset.key;
    handleOperation(input)
}

function handleOperation(input) {
    console.log(input);

    if (SPECIAL_OPERATIONS.includes(input)) {
        if (input == 'eq' || input == 'Enter') performOperation();
        if (input == 'bs' || input == 'Backspace') deleteItem();
        if (input == 'ac') deleteAllItems();
    } else {
        pushNumberOrOperation(input);
    }
}

function performOperation() {
    if (STORE[0].length < 1 || STORE[1].length < 1 || STORE[2].length < 1) return;

    let first = parseInt(STORE[0].join(''));
    let second = parseInt(STORE[2].join(''));

    if (STORE[1] == '+') RESULT = first + second;
    if (STORE[1] == '-') RESULT = first - second;
    if (STORE[1] == '*') RESULT = first * second;
    if (STORE[1] == '/') RESULT = first / second;

    STORE = [[`${RESULT}`], [], []];
    no_operator_present = true;
    updateUI();
}

function deleteItem() {
    if (STORE[2].length > 0) {
        STORE[2].pop();
    } else if (STORE[1].length > 0) {
        STORE[1].pop();
        no_operator_present = true;
    } else if (STORE[0].length > 0) {
        STORE[0].pop();
    }

    updateUI();
}

function deleteAllItems() {
    STORE = [[], [], []];
    no_operator_present = true;
    updateUI();
}

function pushNumberOrOperation(input) {
    if (OPERATIONS.includes(input) && no_operator_present) {
        STORE[1].push(input);
        no_operator_present = false;
    }

    if (/[0-9.]/.test(input)) {
        if (no_operator_present) {
            STORE[0].push(input);
        } else {
            STORE[2].push(input);
        }
    }
    updateUI();
}

function updateUI() {
    if (STORE[0].length == 0) STORE[0].push('0');
    if (STORE[0].length > 1 && STORE[0][0] == 0) STORE[0].shift();

    display.textContent = `${STORE[0].join('')} ${STORE[1].join('')} ${STORE[2].join('')}`;
}
