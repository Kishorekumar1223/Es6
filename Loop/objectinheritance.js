var decoration = {
    color: "red"
}

var circle = Object.create(decoration);

circle.radius = 10;

for(var prop in circle){
    if(circle.hasOwnProperty(prop))
        console.log(prop+" : "+circle[prop])
}