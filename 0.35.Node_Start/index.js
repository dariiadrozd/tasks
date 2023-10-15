const express = require('express');

const app = express();

app.get('/', (request, response) => {
    const arr = [1, 1, 4, 5, 5, 6, 2, 2];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) newArr.push(arr[i]);
    }
    response.send(newArr);
})

app.get('/:id', (request, response)=>{
    const{id} = request.params;
    response.send(id);
})

app.get('/about', (request, response) => {
    response.send('hi thi is route about')
})

app.get('/contact', (request, response) => {
    response.send('hi this is contacts')
})


app.listen(3000, () => {
    console.log('server is running on port:3000');
})
