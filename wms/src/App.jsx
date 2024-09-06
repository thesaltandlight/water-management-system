import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import HomePage from './Pages/HomePage/HomePage';
import OurProducts from './Pages/OurProducts/OurProducts';
import AboutUs from './Pages/AboutUs/AboutUs';
import Delivery from './Pages/Delivery/Delivery';
import ContactUs from './Pages/ContactUs/ContactUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import { CartProvider } from './Pages/Cart/CartContext';
import Notifications from './Pages/Notifications/Notifications';
import { NotificationsProvider } from './Pages/Notifications/NotificationsContext';

import './index.css'; 

function App() {
  return (
    <NotificationsProvider>
    <CartProvider>
      <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/ourProducts' element={<OurProducts/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/notifications' element={<Notifications/>} />
        </Routes>
      </div>
      </Router>
    </CartProvider>
    </NotificationsProvider>
  );
}

export default App;
