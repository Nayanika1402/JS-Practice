
function whosPaying(names){
    var numberOfpeople = names.lenght;
    var randomPersonPosition = Math.floor(Math.random()*numberOfpeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today";
}

var output = whosPaying("Pujan");
console.log(output);