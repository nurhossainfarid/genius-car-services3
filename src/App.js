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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shared' element={<Shared></Shared>}></Route>
        <Route path='/about' element={<About></About>}></Route>
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
