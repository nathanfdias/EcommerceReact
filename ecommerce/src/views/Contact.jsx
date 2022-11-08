import '../styles/Contact.css';
import Footer from '../components/Footer';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = (props) => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function sendEmail (e){
        e.preventDefault();

        if(nome ==='' || email === '' || mensagem === ''){
            console.log("Algum campo em branco")
            alert("Preencha todos os campos");
            return;
        }

        const templateParams ={
            from_name: nome,
            message:mensagem,
            email:email
        }

        emailjs.send("service_6qz5yrp","template_y1wz8yj",templateParams,"Rl7YKP_Ea2CTak5QY")
        .then((response) => {
            console.log("Email Enviado",response.status,response.text)
            setNome('')
            setEmail('')
            setMensagem('')

            alert("Enviado com sucesso") 
            
        }, (erro)=>{
            console.log("ERRO:",erro)
        })

    }

    return (
        <>
            <div className='contato'>
                <div className='wrap-contato'>
                    <div className='contato-titles'>
                        <h2 className='title'>Entre em contato</h2>
                        <p className='sub-title'>Muito obrigado(a) por seu contato. O seu feedback irá nos ajudar muito a aprimorar nossos produtos. A sua opinião é muito importante para a TechShop. Por favor, entre em contato sempre que precisar. </p>
                    </div>
                    <div className='main-form' onSubmit={sendEmail}>
                        <label className='main-form-title' for='nome'><p>Nome</p></label>
                        <input
                            id='nome'
                            className='input_nome' required
                            type="text"
                            placeholder='NOME'
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <label className='main-form-title' for='email'>E-mail</label>
                        <input
                            id='email'
                            className='input_email' required
                            type="text"
                            placeholder='EMAIL'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label className='main-form-title' for='mensagem'><p>Mensagem</p></label>
                        <textarea className='input_msg'
                            maxLength={500}
                            id="mensagem"
                            cols="20" rows="12"
                            placeholder="MENSAGEM"
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}
                        />
                        <div className='main-button'>
                            <button className='button-e' onClick={sendEmail}>ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;