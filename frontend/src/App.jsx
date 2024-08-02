import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {CreateBooks} from './pages/CreateBooks'
import { ShowBooks } from './pages/ShowBooks'
import { EditBooks } from './pages/EditBooks'
import { DeleteBooks } from './pages/DeleteBooks'
import { Home } from './pages/Home'


const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/books/create' element={<CreateBooks></CreateBooks>}></Route>
       <Route path='/books/details/:id' element={<ShowBooks></ShowBooks>}></Route>
       <Route path='/books/edit/:id' element={<EditBooks></EditBooks>}></Route>
       <Route path='/books/delete/:id' element={<DeleteBooks></DeleteBooks>}></Route>
    </Routes>
  )
}

export default App
