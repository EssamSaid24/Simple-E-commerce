import './App.css';
import Navbar from './Components/Navbar';
import Robots from './Components/Products';
import Slider from './Components/Slider';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import Productdetails from './Components/Productdetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<>    
      <Slider></Slider>
      <Robots></Robots></>}>
      </Route>

      <Route path='/about' element={
      <>    
      <About></About>
      </>}>

      </Route>
      <Route path='/product/:productId' element={<><Productdetails/></>}>

      </Route>
      </Routes>

    </>
  );
}

export default App;
