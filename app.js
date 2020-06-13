const screen = document.getElementById('calc-screen'),
      keys = document.getElementById('calc-keys')
let operationStatus = false,
    number1, typeOperation

screen.textContent = '0'

const calculator = () =>{
/*     VALIDAR LA OPERACION */   
     if(!keys) return
        keys.addEventListener('click', e =>{
            const t = e.target,
                  d = t.dataset 
        /* DETECTAR EL TIPO DE BOTON QUE SE TOCA */
            if(d.number) writeScreen(d.number)
            if(d.math) getOperation(t,d.math)
            if(d.operation) runOperation(d.operation)
    })
}

const writeScreen = number => {
    screen.textContent === '0' || operationStatus === true
    ? screen.textContent = number
    : number === '.' && !screen.textContent.includes('.')
        ? screen.textContent += number
        : number !== '.'
            ? screen.textContent += number
            : null 

    operationStatus = false
}

const getOperation = (element, operation) =>{
    operationStatus = true
    number1 = Number(screen.textContent)
    typeOperation = operation
    screen.textContent = element.textContent
}

const runOperation = (operation) =>{
    const getResult = (number1,typeOperation) =>{
        const number2 = Number(screen.textContent)

        switch (typeOperation){
            case 'add': 
                screen.textContent = number1 + number2
                break; 
            case 'minus': 
                screen.textContent = number1 - number2
                break;
            case 'multiply': 
                screen.textContent = number1 * number2
                break;
            case 'divide':
                screen.textContent = number1 / number2
                break;
        }
    }

    operation === 'clear'
    ? screen.textContent = '0'
    : getResult(number1,typeOperation)

    operationStatus = true
}

calculator()

