const express = require('express');
const bodyParser = require('body-parser');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('./service');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    try {
        const data = getAllEnvironment();
        res.send(data);
    } catch (er) {
        res.send(err.message)
    }

})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getEnvironmentById(id);
        res.status.send(data);
    } catch (error) {
        res.status.send(error.message)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createEnvironment(label, category, priority);
        res.send(data);
    } catch (er) {
        res.send(err.message)
    }
})

app.put("/", (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateEnvironment(id, label, category, priority)
        res.send(data)
    } catch (er) {
        res.send(err.message)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = deleteEnvironment(id)
        res.send(data)
    } catch (er) {
        res.send(err.message)
    }
})


app.listen(3000, () => {
    console.log('server is running');
});