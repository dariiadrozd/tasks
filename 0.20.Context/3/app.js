// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false }
// true, если почта содержит @, .com / .ru. 
// False в противном случае

const email = "drozd.d.rus@gmail.com"

function checkEmail(em) {
    let obj = {};
    obj.email = em;
    em.includes('@') && em.includes('.com') || em.includes('.ru') || em.includes('.by') ? obj.active = false : null;
    return obj;
}

let result = checkEmail(email)
console.log(result);