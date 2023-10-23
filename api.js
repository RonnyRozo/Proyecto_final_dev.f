const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let pets = [
    { id: 1, name: "Chunky Cordero 12 KG", price: 150.000 },
    { id: 2, name: "Juguete para gatos", price: 30.000 },
    { id: 3, name: "Jabon Herbal Care Perros y Gatos", price: 19.000 },
    { id: 4, name: "Arena para Gato Petys 4.5 Kg", price: 22.000 },
    { id: 5, name: "Peinilla para perro Universal", price: 16.000 },
];

app.get('/api/pets', (req, res) => {
    res.json(pets);
});

app.get('/api/pets/:id', (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) res.status(404).send('El producto con el ID especificado no se encontró.');
    res.json(pet);
});

app.post('/api/pets', (req, res) => {
    const pet = {
        id: pets.length + 1,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
    };
    pets.push(pet);
    res.json(pet);
});

app.put('/api/pets/:id', (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) res.status(404).send('El producto con el ID especificado no se encontró.');

    pet.name = req.body.name;
    pet.type = req.body.type;
    pet.price = req.body.price;

    res.json(pet);
});

app.delete('/api/pets/:id', (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) res.status(404).send('El producto con el ID especificado no se encontró.');

    const index = pets.indexOf(pet);
    pets.splice(index, 1);

    res.json(pet);
});

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
