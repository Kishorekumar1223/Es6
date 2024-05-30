const arr = [10,20,30]
let total =0
for (var prop in arr){
    total +=arr[prop];
}

console.log(total);

Array.prototype.item = 40;  //adding the property / element to array

const arr1 = [10,20,30]
let total1 =0
for (var prop in arr){
    console.log(prop + " : "+arr1[prop])
    total1 +=arr1[prop];
}

console.log(total1);