// Wave Sort

// Dado un arreglo de números(por ejemplo '[1,2,6,19,12,3,1]'), crear la función 'wave_sort' 
// que ordene los elementos del arreglo "como serrucho".
// Esto es, el arreglo retornado debe cumplir el siguiente criterio:


// arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= ...


// Una posible solucion para el caso del ejemplo es:


// wave_sort([1,2,6,19,12,3,1]) => [19,1,12,1,6,2,3]

let array = [1, 2, 6, 19, 12, 3, 1];

function waveSort(array) {
    let sortedArray = array.sort((a, b) => a - b) // O(n*log(n))
    let waveArray = []

    for (let i = 0; i < array.length; i++) { //O(n)
        if (i % 2 === 0) {
            waveArray.push(sortedArray[array.length - 1 - i])
        }
        else {
            waveArray.push(sortedArray[i])
        }
    }
    return waveArray
}

// Complejidad final O(n*log(n))

//TODO: Buscar una solución de orden O(n) para este problema

console.log(waveSort(array))
