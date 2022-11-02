import { Route, Routes } from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';
import Products from '../../views/Products';

const Content = (props) => (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={ <About />} />
        </Routes>
    </div>
);

export default Content;