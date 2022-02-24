// Code your solutions in this file
const message = [];

function writeCards(name, event){
for (i=0; i<name.length; i++){
    
message.push(`hello ${name[i]} join us at ${event}`); 

}
console.log(message);
}

writeCards (["carla", "jim", "dale"], "party time");

//countdown

function countDown (number){
    while( number>0) {number--
        console.log(number);
    }
}

countDown(17);
