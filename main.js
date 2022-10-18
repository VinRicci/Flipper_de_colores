const colores = ['red', 'aqua', 'green', 'white', 'blue', 'yellow'];

const btn = document.querySelector('.btn');
const color = document.querySelector('#color');

const randomNumber = () =>{
    return Math.floor(Math.random() * colores.length);
};

btn.addEventListener('click', ()=>{
    const num = randomNumber()
    document.body.style.backgroundColor = colores[num];
    color.textContent = colores[num];
});