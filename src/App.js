import { Route, Routes } from 'react-router-dom';
import Contact from './components/navBar/Contact';
import Home from './components/navBar/Home';
import Admin from './components/navBar/Admin';
import AboutUs from './components/navBar/AboutUs';
import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
