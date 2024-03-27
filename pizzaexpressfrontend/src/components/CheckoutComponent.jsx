// CheckoutComponent.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";




function CheckoutComponent() {
    const location = useLocation();
    const basket = JSON.parse(new URLSearchParams(location.search).get('basket') || "[]");
    console.log(location);

    function sendOrder(){
      axios.post('http://localhost:8080/pizza/sendOrder', basket, {
              headers: {
                  'Content-Type': 'application/json'
                      }
      })
    }
    

    return (
      <div>
       
        <h1>Kasse</h1>
        <table>
          <tbody>
            {basket.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={sendOrder}>Bestellung abschicken</button>
      </div>
    );
  }

export default CheckoutComponent;