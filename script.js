class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand
        this.currOperand = currOperand
        this.clear()
    }

    clear() {
        this.currOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete () {

    }

    appendNumber(num) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    update() {

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
        calculator.appendNumber(button.innerHTML)
        calculator.update()
    })
})