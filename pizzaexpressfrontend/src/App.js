import './App.css';
import FirstComponent from './components/FirstComponent';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate, BrowserRouter, Navigate } from 'react-router-dom';
import CheckoutComponent from './components/CheckoutComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/start' element={ <FirstComponent /> } />
          <Route path='/checkout' element={ <CheckoutComponent /> } />
        </Routes>    
      </BrowserRouter>
      
    </div>
  );
}

export default App;