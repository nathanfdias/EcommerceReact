import axios from "axios";
import React, { useState } from "react";
import {APIResponse} from '../../../services/apiPadrao'
import './catAdm.css';
import { NavLink} from "react-router-dom";

const CategoriaAdm = () => {
    const { data, isFetching, error } = APIResponse("/categoria");
    const [errorS, setErrorS] = useState(null);
    const [response, setResponse] = useState(null);

    const deletarCategoria = (id) => {
        axios
          .delete(`https://ecommerce-api-react-serratec.herokuapp.com/categoria/${id}`)
          .then((response) => {
            setResponse(response.status);
          })
          .catch((error) => {
            setErrorS(error);
          })
          .finally(() => {
            refresh();
          });
      };
    
      const refresh = () => {
        window.location.reload();
      };

      const Carregando = () => {
        return(
            <>
                <div className="categoriaAdm-main">
                    <h1>Carregando</h1>
                </div>
            </>
        );
      }

      const Mostrar = () => {
        return(
            <>
                {data?.map((x) => {
                    return(
                        <div className="catadm-container" key={x.id}>
                            <div className="catadm-content">
                                <h2>Nome: {x.nome}</h2>
                                <p className="card-text lead">
                                Descrição: {x.descricao}
                                </p>
                                <div className="buttons-cmd">
                                    <button>
                                        <NavLink to={`/categoriaadmput/${x.id}`}>
                                            edit
                                        </NavLink>    
                                    </button>
                                    <button onClick={()=>deletarCategoria(x.id)}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
      }

    return(
        <>
            <div className="categoriaAdm-main">
                <div className="categoriaAdm-title">
                    <NavLink to="/adm">
                        <div>                    
                            <h2>Voltar a Central</h2>
                        </div>
                    </NavLink>
                    <NavLink to="/categoriaadmpost">
                        <div>
                            <h2>Adicionar Novo</h2>
                        </div>
                    </NavLink>
                </div>
                <div className="cat-views">
                    {(() => {
                        if (isFetching) {
                            return <Carregando />;
                        } else {
                            return <Mostrar />;
                        }
                    })()}
                </div>
            </div>
        </>
    )
}

export default CategoriaAdm;