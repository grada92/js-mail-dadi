console.log('js ok')
// Creo numeri Random da associare a utente e Pc
let numberPc = parseInt(Math.random() * 6 + 1);
console.log(numberPc)
document.getElementById('Pc').innerHTML = numberPc;


let numberUser = parseInt(Math.random() * 6 + 1);
console.log(numberUser)
document.getElementById('User').innerHTML = numberUser;

// Creo un div da appendere al container
const container = document.getElementById('container')

const solution = document.createElement('div')
container.append(solution)
let result 
// Creo Condizione per cui si trova un Vincitore

if (numberUser > numberPc) 
{
    result = 'winner User'
    console.log(result)
    solution.innerHTML = result
}
else if (numberUser == numberPc){
    result = 'PATTA'
    console.log(result)
    solution.innerHTML = result
}
else {
    result = 'winner PC'
    console.log(result)
    solution.innerHTML = result
}

