import Button from "./Button"
import { useEffect, useState } from "react"
import Display from "./Display"

function Calculator({ toggleDarkMode }) {
    const [display, setDisplay] = useState('0')
    const [history, setHistory] = useState()
    const [leftHand, setLeftHand] = useState('')
    const [rightHand, setRightHand] = useState('')
    const [operation, setOperation] = useState('')

    // wait for async state changes
    useEffect(() => {
        // calculate square root after left hand assignment
        if (operation === '√') return calculateResult()

        if (leftHand.length !== 0) {
            setDisplay(`${leftHand}${operation}${rightHand}`)
        }
    }, [leftHand, operation, rightHand, history])

    function handleButtonPress(event) {
        let input = event.target.innerText

        // clear history and display when typing a number after a calculation
        if (history !== undefined && operation.length === 0 && leftHand.length !== 0) handleClear()

        if (operation === '') {
            // avoid double periods in numbers
            if (input === '.' && leftHand.includes('.')) return
            if (input === '.' && leftHand.length === 0) input = '0.'
            setLeftHand(prev => prev + input)
        } else {
            // avoid double periods in numbers
            if (input === '.' && rightHand.includes('.')) return
            if (input === '.' && rightHand.length === 0) input = '0.'
            setRightHand(prev => prev + input)
        }
    }

    function handleOperation(event) {
        // ignore operation when the left hand is empty
        if (leftHand.length === 0) return
        const input = event.target.innerText
        setOperation(input)
    }

    function calculateResult() {
        // ignore the equal sign when there is no operation
        if (operation === '') return
        let result
        switch (operation) {
            case '+':
                result = parseFloat(leftHand) + parseFloat(rightHand)
                break;
            case '-':
                result = parseFloat(leftHand) - parseFloat(rightHand)
                break;
            case '×':
                result = parseFloat(leftHand) * parseFloat(rightHand)
                break;
            case '÷':
                result = parseFloat(leftHand) / parseFloat(rightHand)
                break;
            case '√':
                result = Math.sqrt(parseFloat(leftHand))
                break;
            default:
                break;
        }

        setHistory(`${leftHand}${operation}${rightHand}`)
        setLeftHand(parseFloat(result).toLocaleString())
        setRightHand('')
        setOperation('')
    }

    function handleDelete() {
        if (rightHand.length !== 0) {
            setRightHand(prev => prev.substring(0, prev.length - 1))
        } else if (operation.length !== 0) {
            setOperation('')
        } else if (leftHand.length !== 0) {
            setLeftHand(prev => prev.substring(0, prev.length - 1))
            if (leftHand.length === 1) setDisplay('0')
        }
    }

    function handleClear() {
        setOperation('')
        setRightHand('')
        setLeftHand('')
        setDisplay('0')
        setHistory(undefined)
    }

    return (
        <div className="dark:bg-slate-700 backdrop-blur-sm bg-white p-3 rounded-2xl">
            <Display history={history} display={display} />
            <div className="grid grid-cols-4 gap-4">
                <Button onClick={handleClear} className="bg-red-400 text-red-900">AC</Button>
                <Button onClick={handleDelete} className="bg-gray-400">⌫</Button>
                <Button onClick={handleOperation} className="bg-gray-400">√</Button>
                <Button onClick={handleOperation} className="bg-orange-400">÷</Button>
                <Button onClick={handleButtonPress}>1</Button>
                <Button onClick={handleButtonPress}>2</Button>
                <Button onClick={handleButtonPress}>3</Button>
                <Button onClick={handleOperation} className="bg-orange-400">×</Button>
                <Button onClick={handleButtonPress}>4</Button>
                <Button onClick={handleButtonPress}>5</Button>
                <Button onClick={handleButtonPress}>6</Button>
                <Button onClick={handleOperation} className="bg-orange-400">-</Button>
                <Button onClick={handleButtonPress}>7</Button>
                <Button onClick={handleButtonPress}>8</Button>
                <Button onClick={handleButtonPress}>9</Button>
                <Button onClick={handleOperation} className="bg-orange-400">+</Button>
                <Button onClick={toggleDarkMode} className="dark:bg-amber-200 dark:text-slate-900 bg-slate-900"><svg viewBox="0 0 28 28" fill="none"><path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></Button>
                <Button onClick={handleButtonPress}>0</Button>
                <Button onClick={handleButtonPress}>.</Button>
                <Button onClick={calculateResult} className="bg-orange-400">=</Button>
            </div>
        </div>
    )
}

export default Calculator