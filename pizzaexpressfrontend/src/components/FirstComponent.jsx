import React, { useState, useEffect } from 'react';
import axios from "axios";
import pizzaImage from '../images/pizza_salami.jpg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CheckoutComponent from './CheckoutComponent';

function retrieveAllPizzas(setPizzas){
    axios.get('http://localhost:8080/pizza/getAllPizzas')
    .then( (response) => successfullResponse(response.data, setPizzas) )
    .catch( (error) => errorResponse(error) )
    .finally( () => console.log('cleanup') )
}

function successfullResponse(data,setPizzas){
    setPizzas(data);
}

function errorResponse(error){
    console.log(error);
}

const FirstComponent = () => {
    const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    retrieveAllPizzas(setPizzas);
  }, []);

  // Define state to manage the basket items
 const [basket, setBasket] = useState([]);

 // Function to add an item to the basket
 const addItemToBasket = (item) => {
  setBasket(prevBasket => [...prevBasket, item]);
  console.log(basket);
 };

function sendOrder(){
  console.log(basket);
  axios.post('http://localhost:8080/pizza/sendOrder',basket)
  .then( (response) => successfullSendOrder(response.data) )
  .catch( (error) => errorResponse(error) )
  .finally( () => console.log('cleanup') )
}

function successfullSendOrder(response){
  console.log(response);
}



  return (
    <div>
        <h1>My Data Table</h1>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Ingredients</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map(item => (
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
            <td>
            <button onClick={() => addItemToBasket(item)}>Add to Basket</button>
              </td>              
          </tr>
        ))}
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Warenkorb</th>
          <th><button onClick={sendOrder}>Bestellung abschicken</button></th>
        </tr>
      </thead>
      <tbody>
        {basket.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            )
        )}
        
      </tbody>            
    </table>
    
    </div>
          
            
			
  );

 
};

export default FirstComponent;