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
                <section className="top-section">
                    <div className="top-section-txt">
                        <h2 className="top-section-subtitle">Lorem ipsum</h2>
                        <h1 className="top-section-title"> Dolor sit amem</h1>

                        <p className="top-section-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit deserunt, quod necessitatibus laudantium perspiciatis enim provident eveniet et molestias veniam temporibus.
                        </p>
                    </div>
                
                    <img className="top-section-banner" src={computer3} alt="infocardbanner" />
                </section>

                <section className="top-cards">
                    <div className="top-card123">
                        <img className="top-card-img" src={shop1} alt="card1" />

                        <p className="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop2} alt="card2" />

                        <p className="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop3} alt="card3" />

                        <p className="top-card-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. 
                        </p>
                    </div>

                </section>

                <section>
                    <img className="middle-banner" src={noteD} alt="notebook.aberto" />
                </section>

                <section className="bottom-cards">
                    <div className="bottom-card-wrapper">
                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon1} alt="bottom-card-img1" />

                            <p className="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon2} alt="bottom-card-img2" />

                            <p className="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon3} alt="bottom-card-img3" />

                            <p className="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon4} alt="bottom-card-img4" />

                            <p className="bottom-card-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod enim non dui fringilla interdum.  
                            </p>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Home;
