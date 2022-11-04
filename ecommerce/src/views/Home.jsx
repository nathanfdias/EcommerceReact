import '../styles/Home.css';
import computer3 from '../assets/3-computer.png';
import shop1 from '../assets/shop 1.png';
import shop2 from '../assets/shop 2.png';
import shop3 from '../assets/shop 3.png';
import noteD from '../assets/noteaberto-desktop.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import Footer from '../components/Footer';

const Home = (props) => {
    return(
        <>
            <div className="home">
                <section className="banner-container"></section>
                <section class="top-section">
                    <div class="top-section-txt">
                        <h2 class="top-section-subtitle">Lorem ipsum</h2>
                        <h1 class="top-section-title"> Dolor sit amem</h1>

                        <p class="top-section-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit deserunt, quod necessitatibus laudantium perspiciatis enim provident eveniet et molestias veniam temporibus.
                        </p>
                    </div>
                
                    <img class="top-section-banner" src={computer3} alt="infocardbanner" />
                </section>

                <section class="top-cards">
                    <div class="top-card123">
                        <img class="top-card-img" src={shop1} alt="card1" />

                        <p class="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                    <div class="top-card123">
                        <img class="top-card-img" src={shop2} alt="card2" />

                        <p class="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                    <div class="top-card123">
                        <img class="top-card-img" src={shop3} alt="card3" />

                        <p class="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                </section>

                <section>
                    <img class="middle-banner" src={noteD} alt="notebook.aberto" />
                </section>

                <section class="bottom-cards">
                    <div class="bottom-card-wrapper">
                        <div class="bottom-card123">
                            <img class="bottom-card-img" src={icon1} alt="bottom-card-img1" />

                            <p class="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div class="bottom-card123">
                            <img class="bottom-card-img" src={icon2} alt="bottom-card-img2" />

                            <p class="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div class="bottom-card123">
                            <img class="bottom-card-img" src={icon3} alt="bottom-card-img3" />

                            <p class="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div class="bottom-card123">
                            <img class="bottom-card-img" src={icon4} alt="bottom-card-img4" />

                            <p class="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>
                    </div>
                </section>
                <Footer />
                {/* <footer className='footer-page'>
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
                </footer> */}
            </div>
        </>
    )
}

export default Home;
