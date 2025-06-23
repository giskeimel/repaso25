function calcular(num1, num2, operador) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Los valores deben ser números';
    }
  
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error: División por cero';
      default:
        return 'Error: Operador no válido';
    }
  }
  
  // Ejemplos de uso:
  console.log(calcular(5, 3, '+')); // 8
  console.log(calcular(5, 3, '-')); // 2
  console.log(calcular(5, 3, '*')); // 15
  console.log(calcular(5, 0, '/')); // Error: División por cero
  console.log(calcular(5, 3, 'x')); // Error: Operador no válido