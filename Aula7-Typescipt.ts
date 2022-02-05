class Calculadora{
  public numero1: number;
  public numero2: number;

  constructor(numero1: number, numero2: number) {
    [this.numero1, this.numero2] = [numero1,numero2]
  }

  soma = () => this.numero1 + this.numero2;
  sub = () => this.numero1 - this.numero2;
  mult = () => this.numero1 * this.numero2;
  div = () => this.numero1 / this.numero2;
}

const minhaCalculadora = new Calculadora(12, 15)
console.log('Objeto', minhaCalculadora.soma)
console.log('Objeto', minhaCalculadora.sub)
console.log('Objeto', minhaCalculadora.mult)
console.log('Objeto', minhaCalculadora.div)