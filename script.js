console.log('js ok')

let numberPc = parseInt(Math.random() * 6 + 1);
console.log(numberPc)

let numberUser = parseInt(Math.random() * 6 + 1);
console.log(numberUser)

const container = document.getElementById('container')


if (numberUser > numberPc) 
{
    winner = 'winner User'
    console.log(winner)
}
else {
    winner = 'winner PC'
    console.log(winner)

}


