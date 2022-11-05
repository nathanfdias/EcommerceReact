import './index.css';
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { ProdutoAPI } from '../services/api';
import Footer from '../../components/Footer';

const Produto = () => {
    const { id } = useParams();
    const { produtos, isFetching} = ProdutoAPI(`/${id}`);
}