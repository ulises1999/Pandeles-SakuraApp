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
      <div className='cardsGalery'>
        <Cards tittle='titulo verde' src='public\images\verde.jpg' text='descripcion imagen verde'/>
        <Cards tittle='titulo naranja' src='public\images\naranja.jpg' text='descripcion imagen naranja'/>
        <Cards tittle='titulo azul' src='public\images\azuk.jpg' text='descripcion imagen azul'/>
      </div>
    </div>
  )
}

export default App
