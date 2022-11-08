import axios from "axios";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {APIResponse} from '../../../services/apiPadrao'
import './catAdm.css';

const PutCategoria = () => {
    const { id } = useParams();
    const { data } = APIResponse(`/categoria/${id}`);
    const [errorS, setErrorS] = useState(null);
    const [apiResponse, setApiResponse] = useState(undefined);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
    
        axios
          .put(`https://ecommerce-api-react-serratec.herokuapp.com/categoria/${id}`, {
            descricao: descricao,
            nome: nome
          })
          .then((response) => {
            setApiResponse(response);
          })
          .catch((error) => {
            setErrorS(error);
          });
    
      };

      return (
        <>
          <div className="categoriaAdm-main">
            <div className="catadm-container">
              <form className="form-edit" onSubmit={(e) => cadastrar(e)}>
                <div className="form-edit-content">
                  <h3>Nome Categoria:</h3>
                  <input type="text" placeholder={data.nome}
                    value={nome}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="form-edit-content">
                  <h3>Descrição:</h3>
                  <input type="text" placeholder={data.descricao}
                    value={descricao}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <button type="submit">Enviar</button>
                </div>
                <div className="form-edit-content">
                  <button>
                      <NavLink to="/categoriaadm">
                        Voltar
                      </NavLink>
                    </button>
                </div>
              </form>
              {(() => {
                if (apiResponse?.status === 200) {
                  return (
                    <>
                      <div
                        className="txt-atualizar"
                      >
                        Categoria Atualizada
                      </div>
                    </>
                  );
                }
              })()}
            </div>

          </div>
        </>
      )
}

export default PutCategoria;