function fibonacciGenerator(n) {
    // Cria o array para armazenar a sequência
    let output = [];

    // Valida se n é um número positivo
    if (n <= 0 || !Number.isInteger(n)) {
        return "Por favor, insira um número inteiro positivo.";
    }

    // Caso n seja 1, retorna [0]
    if (n === 1) {
        output = [0];
    }
    // Caso n seja 2, retorna [0, 1]
    else if (n === 2) {
        output = [0, 1];
    }
    // Caso n > 2, gera a sequência
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    // Retorna o array com a sequência de Fibonacci
    return output;
}
