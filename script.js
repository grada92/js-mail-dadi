console.log('js ok')

let numberPc = parseInt(Math.random() * 6 + 1);
console.log(numberPc)

let numberUser = parseInt(Math.random() * 6 + 1);
console.log(numberUser)

if (numberUser > numberPc) 
{
    numberUser = 'winner'
    console.log('winner')
}
else {
    console.log('lose')

}
