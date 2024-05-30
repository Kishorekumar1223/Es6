function isOdd(number){
    return number%2
}

function getOddNumber(){
    return Array.prototype.filter.call(arguments,isOdd)
}

let result = getOddNumber(10,3,5,8,34,23)
console.log(result)