
const products = [
    { id: 1, name: "Chunky Cordero 12 KG", price: 150.000 },
    { id: 2, name: "Juguete para gatos", price: 30.000 },
    { id: 3, name: "Jabon Herbal Care Perros y Gatos", price: 19.000 },
    { id: 4, name: "Arena para Gato Petys 4.5 Kg", price: 22.000 },
    { id: 5, name: "Peinilla para perro Universal", price: 16.000 },
];


function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
        cart.push(selectedProduct);
        console.log("Producto agregado al carrito:", selectedProduct);
    } else {
        console.error("Producto no encontrado");
    }
}


function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}


const cart = [];


addToCart(1); 
addToCart(2); 


console.log("Contenido del carrito:", cart);
console.log("Total de la compra: $", calculateTotal());
