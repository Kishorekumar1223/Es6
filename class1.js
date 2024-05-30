class vehicle{
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
}

const bike = new vehicle('Gt650','648cc');
const bike1 = new vehicle('dominar','250cc');

console.log(bike.name);
console.log(bike.engine);

console.log(bike1.name);
console.log(bike1.engine);