
const testes = [
    {
        num1: 25,
        num2: 10,
        operador:'+' ,
        resultado: 25 + 10
    },
    {
        num1: 10,
        num2: 5,
        operador:'-', 
        resultado: 10 - 5
    },
    {
        num1: 40,
        num2: 21,
        operador:'*' ,
        resultado: 40 - 21
    },
    {
        num1: 65,
        num2: 42,
        operador:'/' ,
        resultado: 65 / 42
    }
]

testes.forEach((elemento)=>{
    console.log(`Número1: ${elemento.num1} ${elemento.operador} Número2: ${elemento.num2} = ${elemento.resultado}`);
    //console.log(` Número 1 ${testes.num1} ${testes.operador} Número 2 ${testes.num2} Resultado:`)
})



