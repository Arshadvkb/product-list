import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductListPage/>}/>
        <Route path='/product/details/:id' element={<ProductDetailPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
