import { Route, Routes } from "react-router-dom";
import Adm from "../../pages/admSet/Adm";
import About from "../../views/About";
import Cart from "../../views/Cart";
import Contact from "../../views/Contact";
import Home from "../../views/Home";
import Login from "../../views/Login";
import Products from "../../views/Products";
import Produto from "../../views/produtoUnico/Produto";
import CategoriaAdm from '../../pages/admPages/categoria/categoria';

const Content = (props) => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/produtos/:id" element={<Produto />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/adm" element={<Adm />} />
      <Route path="/categoriaadm" element={<CategoriaAdm/>}></Route>
    </Routes>
  </div>
);

export default Content;
