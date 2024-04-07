function spinWords(string){
    return string.split(' ')
                 .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
                 .join(' ');
}

// Nuevos ejemplos de uso:
console.log(spinWords("Welcome to JavaScript"));      // Salida esperada: "emocleW to tpircSavaJ"
console.log(spinWords("Coding is fun"));              // Salida esperada: "gnidoC is fun"
console.log(spinWords("Keep coding and learning"));   // Salida esperada: "peeK gnidoc and gninrael"
