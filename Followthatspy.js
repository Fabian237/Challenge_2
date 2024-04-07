function findRoutes(routes) {
    // Crear un grafo para representar las rutas
    let graph = {};
    let destinations = new Set();
    
    // Inicializar el grafo con nodos y sus aristas salientes
    for(let [desde, hacia] of routes) {
        destinations.add(desde);
        destinations.add(hacia);
        
        if(!graph[desde]) {
            graph[desde] = [];
        }
        graph[desde].push(hacia);
    }
    
    // Añadir destinos sin rutas salientes al grafo
    for(let destino of destinations) {
        if(!graph[destino]) {
            graph[destino] = [];
        }
    }
    
    // Realizar una ordenación topológica para determinar la secuencia de destinos
    let visitados = {};
    let resultado = [];
    
    function dfs(nodo) {
        if(!graph[nodo]) return;
        
        visitados[nodo] = true;
        
        for(let siguiente of graph[nodo]) {
            if(!visitados[siguiente]) {
                dfs(siguiente);
            }
        }
        
        resultado.push(nodo);
    }
    
    for(let nodo in graph) {
        if(!visitados[nodo]) {
            dfs(nodo);
        }
    }
    
    // Invertir el resultado para obtener la secuencia correcta
    return resultado.reverse().join(', ');
}

// Ejemplo de uso:
const rutas = [
    ['USA', 'BRA'],
    ['JPN', 'PHL'],
    ['BRA', 'UAE'],
    ['UAE', 'JPN']
];

const itinerario = findRoutes(rutas);
console.log(itinerario);  // Salida esperada: "USA, BRA, UAE, JPN, PHL"
