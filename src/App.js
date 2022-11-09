import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} />


      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
