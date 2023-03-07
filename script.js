
//Generate a random number from 1 to 6
const firstRandomNum = math.floor( math.random() * 6) + 1;

const firstDiceImage = 'photos/dice' + firstRandomNum + '.png';

document.querySelectorAll( 'img')[0].setAttribute('src', firstDiceImage);

const secondRandomNum = math.floor( math.random() * 6) + 1;

const secondDiceImage = 'photos/dice' + secondRandomNum + '.png';

document.querySelectorAll( 'img')[0].setAttribute('src', secondDiceImage);

//logic for winner
if (firstRandomNum > secondRandomNum) {
    document.querySelector ('h1').innerHTML = 'The winner is player1';
}
else if (firstRandomNum < secondRandomNum) {
    document.querySelector ('h1').innerHTML = 'The winner is player2';
}
else {
    document.querySelector('h1').innerHTML = 'its a Draw!';
}