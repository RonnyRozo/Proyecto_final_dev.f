import React, { useState, useEffect } from 'react';

const PetShop = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/pets')
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error('Error al obtener datos de mascotas:', error));
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Tienda de Mascotas</h1>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            {pet.name} - {pet.type} - ${pet.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetShop;
