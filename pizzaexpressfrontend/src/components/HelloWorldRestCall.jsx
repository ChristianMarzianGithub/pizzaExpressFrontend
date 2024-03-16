import axios from "axios"

function  callHelloWorld(){
    console.log('called again')

    axios.get('http://localhost:8080/pizza/getAllPizzas')
    .then( (response) => successfullResponse(response) )
    .catch( (error) => errorResponse(error) )
    .finally( () => console.log('cleanup') )
}

function successfullResponse(response){
    console.log(response)
}

function errorResponse(error){
    console.log(error)
}

export default function HelloWorldRestCall(){
    return (
        <div>
            <p>rest call</p>
            <button onClick={callHelloWorld}>
                call rest Hello World
            </button>

        </div>
    )
}