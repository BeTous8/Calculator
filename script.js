const btn = document.querySelector('button');
const title = document.querySelector('.title');

btn.addEventListener('click', () => {
    title.style.backgroundColor = '#ff5733';
    console.log('it is clicked')

});