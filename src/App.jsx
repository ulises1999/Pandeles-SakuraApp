import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sakura'/>} />
        <Route path='/item' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
