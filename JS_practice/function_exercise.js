function sum(...arr){
    if (arr.length == 0){
        return
    }
    if (arr.length === 1 && Array.isArray(arr[0])){
        arr = [...arr[0]]
    }
    return arr.reduce((prev, curr) => prev+curr)
}

console.log(sum())
console.log(sum(1,2,3,4,5))
console.log(sum([1,2,3,4,5]))