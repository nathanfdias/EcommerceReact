import '../styles/Contact.css';
import Footer from '../components/Footer';

const Contact = (props) => {
    return(
        <>
             <div className='contato'>
                <div className='contato-titles'>
                    <h2 className='title'>Entre em contato</h2>
                    <p className='sub-title'>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. </p>
                </div>
                <div className='main-form'>
                    <div className='main-form-title'><p>Nome</p></div>
                    <input className='input_nome' type="text" placeholder='Nome' />
                    <div className='main-form-title'><p>E-mail</p></div>
                    <input className='input_email' type="text" placeholder='Email' />
                    <div className='main-form-title'><p>Mensagem</p></div>
                    <textarea className='input_msg' name="mensagem" cols="20" rows="12" placeholder="Mensagem *"
                    ></textarea>
                    <div className='main-button'>
                        <button className='button-v'>Voltar</button>
                        <button className='button-e'>Enviar</button>
                    </div>
                </div>
            </div>
            <Footer />  
        </>
    );
}

export default Contact;