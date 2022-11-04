import '../styles/Contact.css';
import Footer from '../components/Footer';

const Contact = (props) => {
    return (
        <>
            <header>
                <h1>teste</h1>
            </header>
            <body>
                <section>
                    <div id='div_texto'>
                        <h2>Entre em contato</h2>
                        <p>Envie sua men­sa­gem por meio do for­mu­lá­rio ex­pli­can­do como po­de­mos te ajudar. Nosso time irá te re­tor­nar por meio dos dados for­ne­ci­dos no for­mu­lá­rio, então, não deixe de con­fe­rir antes de enviar, tudo bem?</p>
                    </div>
                </section>
                <div id="area">
                    <div><p>Nome</p></div>
                    <input className='input_nome' type="text" placeholder='Nome' />
                    <div><p>E-mail</p></div>
                    <input className='input_email' type="text" placeholder='Email' />
                    <div><p>Mensagem</p></div>
                    <textarea className='input_msg' name="mensagem" cols="20" rows="12" placeholder="Mensagem *"
                    ></textarea>
                    <div id='div_botao'>
                        <button className='botao_voltar'>Voltar</button>
                        <button className='botao_enviar'>Enviar</button>
                    </div>
                </div>
            </body>
            <footer>
                <p id='div_footer_paragrafo'>residência serratec - 2020 - Loja Comércio Eletrônico | CNPJ: 000.000.000/0001-00</p>
            </footer>
            {/* <Footer />   */}
        </>
    );
}

export default Contact;