import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Sakura'/>
    </div>
  )
}

export default App
