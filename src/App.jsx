import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos a Sakura'/>
    </div>
  )
}

export default App
