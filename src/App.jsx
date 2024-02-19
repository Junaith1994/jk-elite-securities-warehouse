import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import ManageProducts from './Pages/ManageProducts/ManageProducts'

function App() {

  return (
    <div>
      <Header></Header>
      
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/manage-products' element={<ManageProducts></ManageProducts>}></Route>
      </Routes>
    </div>
  )
}

export default App
