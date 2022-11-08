import Footer from "../../components/Footer"
import { LayoutLogin } from "../../components/LayoutLogin"
import LogoLogin from "../../assets/LogoHomeB.png"
import { useState } from "react"
import { Link } from "react-router-dom"


export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <LayoutLogin>
                <form className="login-form">
                    <span className="login-form-title">
                        <img src={LogoLogin} alt="Logo" />
                    </span>
                    <span className="login-form-title"></span>

                    <div className="wrap-input">
                        <input
                            id='nome'
                            className={name !== "" ? "has-val input" : "input"}
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Nome" for='nome'></label>
                    </div>
                    
                    <div className="wrap-input">
                        <input
                            id='email'
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Email" for='email'></label>
                    </div>

                    <div className="wrap-input">
                        <input
                            id='senha'
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Senha" for='senha'></label>
                    </div>

                    <div className="wrap-input">
                        <input
                            id='confSenha'
                            className={confirmPassword !== "" ? "has-val input" : "input"}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value) }
                        />
                        <label className="focus-input" data-placeholder="Confirmar senha" for='confSenha'></label>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn" >Criar conta</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Já possui conta? </span>
                        <Link className="txt2" to="/login">
                            Voltar para login
                        </Link>
                    </div>
                </form>
            </LayoutLogin>
            <Footer />
        </>
    )
}