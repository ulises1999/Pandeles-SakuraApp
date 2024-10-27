import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'
import Cards from './components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Holis Perris'/>
      <Cards text='descripcion imagen'/>
    </div>
  )
}

export default App
