export default function WelcomeComponent(){
    
    function callHelloWorld(){
        console.log('called');
    }


    return(


        
        <div className="WelcomeComponent">
            <h1>Welcome</h1>
            <button onClick={callHelloWorld}>call Hello World</button>
        </div>




    )
}