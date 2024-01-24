const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const deleteButton = document.querySelector('[data-delete')
const allClearButton = document.querySelector('[data-all-clear]')
const previousElement = document.querySelector('[data-previous-operand]')
const currentElement = document.querySelector('[data-current-operand')
const equalButton = document.querySelector('[data-equals]')


class Calculator {
    constructor(previousElement, currentElement) {
        this.previousElement = previousElement
        this.currentElement = currentElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        // this.operation = undefined
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperator(operation) {
        if (this.currentOperand === '') return
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }
    compute() {
        let computation
        const cur = parseFloat(this.currentOperand)
        const pre = parseFloat(this.previousOperand)
        if (isNaN(pre) || isNaN(cur)) return
        switch (this.operation) {
            case '/':
                computation = pre - cur
                break
            case 'x':
                computation = pre * cur
                break
            case '+':
                computation = pre + cur
                break
            case '-':
                computation = pre + cur
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = ''
        this.previousOperand = ''
    }
    updateDisplay() {
        this.currentElement.innerText = this.currentOperand
        this.previousElement.innerText = `${this.previousOperand} ${this.operation}`
    }

}

const calculator = new Calculator(previousElement, currentElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
}

)

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})