function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0, 3).join('');
    let middlePart = numbers.slice(3, 6).join('');
    let lastPart = numbers.slice(6).join('');

    return `(${areaCode}) ${middlePart}-${lastPart}`;
}

// Ejemplo de uso:
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));  // Salida esperada: "(123) 456-7890"
