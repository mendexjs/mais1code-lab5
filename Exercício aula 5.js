const testCases = [
  {
    num1: 10,
    num2: 5,
    operator: '+' // 15
  },
  {
    num1: 10,
    num2: 5,
    operator: '-' // 5
  },
  {
    num1: 20,
    num2: 5,
    operator: '*' // 100
  },
  {
    num1: 100,
    num2: 20,
    operator: '/' // 5
  },
];



const sub = (num1, num2) => num1 - num2;

const soma = (num1, num2) => num1 + num2;

const mult = (num1, num2)=> num1 * num2;

const div = (num1, num2 ) => num1 / num2;






const calculate = (num1, num2, operator) => {
  switch(operator) {
    case '+': {
      return soma(num1, num2);
    }
    case '-': {
      return sub(num1, num2);
    }
    case '*': {
      return mult(num1, num2);
    }
    case '/': {
      return div(num1, num2);
    }
    
  }
}

// VARRENDO ARRAY COM FOREACH
testCases.forEach((calculo) => {
  console.log(
    calculate(
      calculo.num1, 
      calculo.num2, 
      calculo.operator)
    );
});

/*  VARRENDO ARRAY COM FOR OF
for (let calculo of testCases) {
  console.log(calculate(
    calculo.num1, 
    calculo.num2, 
    calculo.operator)
  );
} */

/* VARRENDO ARRAY COM O FOR
for (let index = 0; index < testCases.length; index++) {
  console.log(calculate(
    testCases[index].num1,
    testCases[index].num2,
    testCases[index].operator
  ));
} */