import React from "react";
import { NavLink } from "react-router-dom";
import Footer from '../../components/Footer';
import './index.css';

const Adm = () => {
    return(
        <>
            <div className="container-adm">
                <div className="navbar-adm">
                    <ul>
                        <li>
                           <NavLink>
                                <p className="links-adm">CLIENTE</p>
                            </NavLink> 
                        </li>
                        <li>
                           <NavLink to="/categoriaadm">
                                <p className="links-adm">CATEGORIA</p>
                            </NavLink> 
                        </li>
                        <li>
                            <h2 className="titulo-adm">AdmControl</h2>
                        </li>
                        <li>
                           <NavLink>
                                <p className="links-adm">PRODUTO</p>
                            </NavLink> 
                        </li>
                        <li>
                           <NavLink>
                                <p className="links-adm">FUNCIONARIO</p>
                            </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Adm;