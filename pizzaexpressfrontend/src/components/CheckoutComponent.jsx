// CheckoutComponent.js
import React from 'react';
import { useLocation } from 'react-router-dom';




function CheckoutComponent() {
    const location = useLocation();
    const basket = JSON.parse(new URLSearchParams(location.search).get('basket') || "[]");
    console.log(location);


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
      </div>
    );
  }

export default CheckoutComponent;
