import { Routes,Route } from 'react-router-dom';
//import Nav Components
import Header from './components/nav/Header';
import logo from './logo.svg';
import './App.css';

//main pages
import Home from './pages/Home';


const  App = () => {
  return (
   
    <>
       <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    
    </>
        
  
  
  );
}

export default App;
