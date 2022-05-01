import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shared from './components/Shared/Shared';
import About from './components/About/About';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import ServicesDetail from './components/Home/ServicesDetail/ServicesDetail';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import AddService from './components/Home/AddService/AddService';
import Manage from './components/Manage/Manage';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shared' element={<Shared></Shared>}></Route>
        <Route path='/about' element={
          <RequiredAuth>
            <About></About>
          </RequiredAuth>
        }></Route>
        <Route path='/addservice' element={
            <AddService></AddService>
        }></Route>
        <Route path='/manage' element={
          <RequiredAuth>
            <Manage></Manage>
          </RequiredAuth>
        }>
        </Route>
        <Route path='/orders' element={
          <RequiredAuth>
            <Orders></Orders>
          </RequiredAuth>
        }>
        </Route>
        <Route path='/checkout/:serviceId' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }>
        </Route>
        <Route path='/service/:serviceId' element={<ServicesDetail></ServicesDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
