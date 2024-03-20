import React from 'react';
import pizzaImage from '../images/pizza_salami.jpg';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Ingredients</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>            
            <td>
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name},{ingredient.quantity} {ingredient.unit}</li>                  
                ))}
              </ul>
            </td>
            <td><img src={pizzaImage} alt="Pizza" id="small-image"/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;