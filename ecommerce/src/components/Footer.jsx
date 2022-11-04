import '../styles/Footer.css';

const Footer = () => {
    return(
        <>
            <footer className='footer-page'>
                    <div className='footer-container'>
                        <ul className='footer-content-icons'>
                            <li>
                                <i class="fa fa-github"></i>
                            </li>
                            <li>
                                <i class="fa fa-linkedin"></i>
                            </li>
                            <li>
                                <i class="fa fa-instagram"></i>
                            </li>
                        </ul>
                        <div className='footer-content-txt'>
                            <p>Serratec Residência em TIC</p>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer