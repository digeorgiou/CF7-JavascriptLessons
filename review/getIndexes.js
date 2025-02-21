const arr = [1, 2, 4, 5, 2, 6, 7, 2, 3, 8, 9, 9, 2]

function findIndexes(array1, num){
    let indexArray = []
    for (let i = 0 ; i < array1.length; i++){
        if (array1[i] === num) indexArray.push(i)
    }
    return indexArray
}

console.log(findIndexes(arr,2))