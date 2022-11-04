import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting= "Hola React"/>
      <ItemListContainer greeting= "Espero que seas facil!"/>
      <Footer/>

    </div>
  );
}

export default App;
