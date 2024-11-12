import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Sakura'/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App
