import '../styles/Products.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { ProdutoAPI } from '../services/api';
import ProdutosBanner from '../components/ProdutosBanner'

const Products = () => {
    // const [produto, setProduto] = useState([])
    const [produtoFiltrado, setProdutoFiltrado] = useState("");
    const [url, setUrl] = useState("");
    const { produtos, isFetching} = ProdutoAPI();

    useEffect(() => {
        console.log(produtos)
        setUrl(urlLink(location.pathname));
    }, [location]);
    
    const urlLink = (url) => {
        if (!url == "/produtos") {
            return `/`;
        }
        return `/produtos`;
    };

    const ProdutoFiltrar = () => {
        console.log("Produto filtrar...")
        const produtosFiltrados = produtos?.filter((produto) =>
            produto.nome.toUpperCase().includes(produtoFiltrado.toUpperCase())
        );
        return (
            <>
                {produtosFiltrados?.map((item) => {
          return (
            <div className='card-produto' key={item.id}>
                <img className='img-produtos' src={item.fotoLink} alt="" />
                <div className='produto-descript'>
                    <p>{item.nome}</p>
                    <p>{`R$ ${item.valor},00`}</p>
                </div>
                <div className='buttons'>
                    <button>Detalhes</button>
                </div>
            </div>
          );
        })}
            </>
        );
    };
    
    const Carregando = () => {
        return (
            <>
                <div className='carregamento'>
                    <h1>CARREGANDO TESTE</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='produtos'>
                <ProdutosBanner />
                <div className='main-titulo'>
                    <h1>CONFIRA NOSSAS NOVIDADES</h1>
                    <input type="text" name="" id="" placeholder='Digite o nome do produto' value={produtoFiltrado} onChange={(e) => setProdutoFiltrado(e.target.value)}/>
                </div>
                <div className='produtos-container'>
                        {(() => {
                            if (isFetching) {
                                return <Carregando />;
                            } else {
                                return <ProdutoFiltrar />;
                            }
                        })()}
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Products;