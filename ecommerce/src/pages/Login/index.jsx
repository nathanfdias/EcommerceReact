import Footer from '../../components/Footer';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import LogoLogin from "../../assets/LogoHomeB.png"
import "../../styles/Login.css"
import { LayoutLogin } from '../../components/LayoutLogin';
import { AuthContext } from '../../context/auth';



const Login = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password })
        login(email, password);
    }

    const { athenticated, login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <LayoutLogin>
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="login-form-title">
                        <img src={LogoLogin} alt="Logo" />
                    </span>
                    <span className="login-form-title"></span>

                    <div className="wrap-input">
                        <input
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Email" for='email'></label>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            id="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="focus-input" data-placeholder="Password" for='senha'></label>
                    </div>

                    <div className="container-login-form-btn">
                        <button type="submit" className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta? </span>
                        <Link className="txt2" to="/register">
                            Criar conta
                        </Link>
                    </div>
                </form>
            </LayoutLogin>

            <Footer />
        </>
    );
}

export default Login;