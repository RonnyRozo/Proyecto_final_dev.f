const http = require('http');


const products = [
    { id: 1, name: "Chunky Cordero 12 KG", price: 150.000 },
    { id: 2, name: "Juguete para gatos", price: 30.000 },
    { id: 3, name: "Jabon Herbal Care Perros y Gatos", price: 19.000 },
    { id: 4, name: "Arena para Gato Petys 4.5 Kg", price: 22.000 },
    { id: 5, name: "Peinilla para perro Universal", price: 16.000 },
];


const server = http.createServer((req, res) => {
    if (req.url === '/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});


const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Servidor en funcionamiento en el puerto ${PORT}`));
