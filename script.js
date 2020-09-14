class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand
        this.currOperand = currOperand
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete () {

    }

    appendNumber(num) {
        this.currentOperand = num
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    update() {
        this.currOperand.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevOperand = document.querySelector('[data-previous-operand]')
const currOperand = document.querySelector('[data-current-operand]')

const calculator = new Calculator(prevOperand, currOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.update()
    })
})