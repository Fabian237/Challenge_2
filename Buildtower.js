function towerBuilder(nFloors) {
    let tower = [];
    let maxWidth = 2 * nFloors - 1;

    for(let i = 0; i < nFloors; i++) {
        let spaces = " ".repeat((maxWidth - (2 * i + 1)) / 2);
        let blocks = "*".repeat(2 * i + 1);
        tower.push(spaces + blocks + spaces);
    }

    return tower;
}

// Ejemplo de uso:
console.log(towerBuilder(3));  // Salida esperada: ["  *  ", " *** ", "*****"]
console.log(towerBuilder(6));  // Salida esperada: ["     *     ", "    ***    ", "   *****   ", "  *******  ", " ********* ", "***********"]
