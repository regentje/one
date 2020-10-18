/*Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат,
 по умолчанию должны присутствовать методы add, substract*/

 function Calc() {
    let memory = [];
    this.calculate = {
      "-": (a, b) => a - b,
    }
    this.history = () => console.log(memory);
    this.clearHistory = () => memory = [];
    this.operation = function (str) {
      let split = str.split(' ');
        a = +split[0];
        operator = split[1];
        b = +split[2];
  
      memory.push({ operation: operator, operands: [a, b] })
      return this.calculate[operator](a, b);
    }
    this.addOperation = function (name, func) {
      this.calculate[name] = func;
    };
  }
  
  const calculator = new Calc()
  
  
  
  
  console.log(calculator.operation('10 - 2')); // 8
  calculator.addOperation('/', (a, b) => a / b);
  calculator.addOperation('+', (a, b) => a + b);
  calculator.addOperation('*', (a, b) => a * b);
  console.log(calculator.operation('10 / 2')); // 5
  console.log(calculator.operation('31 + 32')); // 63
  console.log(calculator.operation('10 * 2')); // 10
  //Также, он должен хранить историю всех операций и выводить ее по запросу:
  calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
  operands: [10,2]}, {operation: '/', operands: [10,2]}] */
  
  //И очищать историю
  calculator.clearHistory()
  calculator.history() // []
  console.log(calculator.operation('10 - 2')); // 8
  calculator.addOperation('/', (a, b) => a / b);
  calculator.addOperation('+', (a, b) => a + b);
  calculator.addOperation('*', (a, b) => a * b);
  console.log(calculator.operation('10 / 2')); // 5
  console.log(calculator.operation('31 + 32')); // 63
  console.log(calculator.operation('10 * 2')); // 10
  calculator.history() // []