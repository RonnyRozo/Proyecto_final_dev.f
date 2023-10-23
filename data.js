const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tienda-mascotas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const petProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
});


const PetProduct = mongoose.model('PetProduct', petProductSchema);


const newPetProduct = new PetProduct({
  name: 'Croquetas para Perros',
  type: 'Alimento',
  price: 50000,
});

newPetProduct.save((err, product) => {
  if (err) {
    console.error('Error al guardar el producto:', err);
  } else {
    console.log('Producto guardado:', product);
  }
});
