import { Route, Routes } from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';
import Products from '../../views/Products';
import Login from '../../views/Login';
import Cart from '../../views/Cart';


const Content = (props) => (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={ <About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
);

export default Content;