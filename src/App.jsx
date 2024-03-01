import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import ManageProducts from './Pages/ManageProducts/ManageProducts'
import AddNewProduct from './Pages/ManageProducts/AddNewProduct/AddNewProduct'
import NotFound from './Pages/NotFoundPage/NotFound'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import RequireAuth from './RequireAuth/RequireAuth'

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
        <Route path='/manage-products' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/add-new-product' element={<AddNewProduct></AddNewProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
