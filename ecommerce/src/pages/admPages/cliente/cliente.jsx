import axios from "axios";
import React, { useState } from "react";
import {APIResponse} from '../../../services/apiPadrao'
import { NavLink} from "react-router-dom";
import '../categoria/catAdm.css';

const ClienteAdm = () => {
    const { data, isFetching, error } = APIResponse("/cliente");
    const [errorS, setErrorS] = useState(null);
    const [response, setResponse] = useState(null);

    const deletarCliente = (id) => {
        axios
          .delete(`https://ecommerce-api-react-serratec.herokuapp.com/cliente/${id}`)
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
                                Usuario: {x.usuario}
                                </p>
                                <p className="card-text lead">
                                CPF: {x.cpf}
                                </p>
                                <p className="card-text lead">
                                Email: {x.email}
                                </p>
                                <div className="buttons-cmd">
                                    <button>
                                        <NavLink to={`/clienteadmput/${x.id}`}>
                                            edit
                                        </NavLink>    
                                    </button>
                                    <button onClick={()=>deletarCliente(x.id)}>delete</button>
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
                    <NavLink to="/clienteadmpost">
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

export default ClienteAdm;