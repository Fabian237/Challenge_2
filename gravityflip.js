const flip = (d, a) => {
    if (d === 'R') {
      return a.sort((x, y) => x - y);
    } else if (d === 'L') {
      return a.sort((x, y) => y - x);
    } else {
      return "Invalid direction";
    }
  }
  
  // Ejemplos de uso:
  console.log(flip('R', [3, 2, 1, 2]));       // Salida esperada: [1, 2, 2, 3]
  console.log(flip('L', [1, 4, 5, 3, 5]));    // Salida esperada: [5, 5, 4, 3, 1]
  