const college ={
    name:'Imarticus',
    est:'2014',
    isPvt : true
}

let{name,est,isPvt}=college;
console.log('name of the Organisation:' +name);
console.log('Year Starts at:' +est);
console.log('Private Setor:' +isPvt);
console.log(college.name);

//Array Destructuring
const arr = ['one','two','three'];
let {value1,value2,value3}=arr;
console.log('Value1:' +value1);
console.log('Value2:' +value2);
console.log('Value3:' +value3);