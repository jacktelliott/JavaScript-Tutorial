//right click > inspect > go to element to be selected >
//right click > copy selector
const para = document.querySelector('body > h1')
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[0]);
paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);