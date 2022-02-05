
const testes = [
    {
        num1: 25,
        num2: 10,
        operator:'+' 
    },
    {
        num1: 10,
        num2: 5,
        operator:'-'
    },
    {
        num1: 40,
        num2: 21,
        operator:'*' 
    },
    {
        num1: 65,
        num2: 42,
        operator:'/' 
    }

]

const sub = (num1,num2) => num1 - num2
const soma = (num1,num2) => num1 + num2
const mult = (num1,num2) => num1 * num2
const div = (num1,num2) => num1 / num2

const calculate = (num1,num2,operator)=>{
    switch (operator) {
        case '+':
           return soma(num1,num2)
            break;

        case '-':
            return sub(num1,num2)
            break;

        case '*':
            return mult(num1,num2)
        break;

        case '/':
            return div(num1,num2)
            break;
    
        default:

            break;
    }
}

testCases.forEach((calculo) =>{
    console.log(
        calculate(
            calculo.num1,
            calculo.num2,
            calculo.operator)
    );
});
// console.log(`Número1: ${elemento.num1} ${elemento.operador} Número2: ${elemento.num2} = ${resultado}`);




