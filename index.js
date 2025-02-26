// Code your solutions in this file
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
 
function writeCards(cards, event){
    let messages=[];/* The empty array that will hold the messages*/
    for (let i=0; i < cards.length; i++){
        messages.push (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
     return messages;
}
/*while loop*/
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}