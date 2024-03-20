import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import axios from "axios";

function retrieveAllPizzas(setPizzas){
    axios.get('http://localhost:8080/pizza/getAllPizzas')
    .then( (response) => successfullResponse(response.data, setPizzas) )
    .catch( (error) => errorResponse(error) )
    .finally( () => console.log('cleanup') )
}

function successfullResponse(data,setPizzas){
    console.log(data);
    setPizzas(data);
}

function errorResponse(error){
    console.log(error);
}

const FirstComponent = () => {
    const [pizzas, setPizzas] = useState([]);

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data as needed
  ];

  useEffect(() => {
    retrieveAllPizzas(setPizzas);
  }, []);

  return (
    <div>
        <h1>My Data Table</h1>
        <DataTable data={pizzas} />
        
    </div>
  );
};

export default FirstComponent;