import axios from "axios"
import {useEffect, useState } from "react"

export default function PizzaExpressComponent(){

    const [pizzas,setPizzas] = useState([])

    useEffect ( () => retrieveAllPizzas(), [])

    function successfullResponse(response){
        console.log(response)
        setPizzas(response.data)
    }
    
    function errorResponse(error){
        console.log(error)
    }

    function retrieveAllPizzas(){
        axios.get('http://localhost:8080/pizza/getAllPizzas')
        .then( (response) => successfullResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup') )
    }

        return (
            <div>
                           
                <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        pizzas.map(
                            pizza => (
                                <tr key={pizza.id}>
                                    <td>{pizza.id}</td>
                                    <td>{pizza.name}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
                </div>
            </div>
        )

    }