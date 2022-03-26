// Code your solutions in this file

nArr = ['name1', 'name2', 'name3']

function writeCards(names, event){
    let x;
    let newArr = [];
for (x=0; x<names.length ; x++){
    let name = names[x]
    newArr.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
}
return newArr;
}

function countDown(num){
while (num>=0){
console.log(num);
num--;
}
}
countDown(18);
