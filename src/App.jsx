import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartView from './components/Cartview';
import CheckOut from './components/CheckOut';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sakura'/>} />
          <Route path='/productos/:category' element={<ItemListContainer greeting="Bienvenidos a la categoria: "/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
