prompt("what is your name ?");
prompt("what is his/her name ?");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your lovescore is " + loveScore + " %");
}
if (loveScore > 30 && loveScore<=70 ) {
    alert("Your lovescore is" + loveScore + " %");
}
if (loveScore <= 30) {
    alert("Your lovescore is " + loveScore + " %" + "You go together like oil and water");
}