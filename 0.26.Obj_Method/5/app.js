// На входе объект и число n, символизирующее количество пар ключ-значение. 
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n). 
// Проверить есть ли ключ 10 в объекте.


const n = 15;

function doObject(n) {
    const obj = {};
    for(let i=0;i<n;i++){
        obj[i]=i;
    }
    return obj;
}

function CheckKey(obj){
    const ArrayOfKeys = Object.keys(obj);
    const key = ArrayOfKeys.some(function(el){
if(el==10) return true;
    });
    return key;
}

const res = doObject(n);
const result = CheckKey(res);
console.log(result);

