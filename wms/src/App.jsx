import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import HomePage from './Pages/HomePage/HomePage';
// import AboutUs from './Pages/AboutUs/AboutUs';

import './index.css'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/home' element={<HomePage/>}/>
        {/* <Route path='/aboutUs' element={<AboutUs/>}/> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
