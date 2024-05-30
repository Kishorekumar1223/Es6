function Box(width,height){     //call function - for inheritence
    this.height = height;
    this.width = width;
}

function Widget(width,height,color){
    Box.call(this,width,height)
    this.color = color;
}

let widge = new Widget(100,200,'red')
console.log(widge)