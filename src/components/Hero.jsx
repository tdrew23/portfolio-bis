import '../styles.css';
import profil from '../img/4758689.jpg'
import cv from '../img/CV Tariq.pdf'

const Hero = () => {
    return (
        <section className="hero container" id="home">
            <div className="hero-blue">
                <div>
                    <h1>
                        <small>Bonjour je suis </small>
                        Tariq Drewniak
                    </h1> <br></br>
                    <p>
                    Développeur en constante évolution, je combine mes compétences en développement web avec une soif d'apprentissage. Chaque projet est pour moi une chance de grandir et de relever de nouveaux défis</p> <br></br> 
                    <div className="call-to-action">
                        <a  href={cv}
                         target="_blank"
                        rel="noopener noreferrer"
                        className="button black"
                        >Voir mon CV</a>
                        <a href="#" className="button white">Contactez-moi</a>
                    </div>
                    {/* <div className="social-links">
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div> */}
                </div>
            </div>
            <div className="hero-yellow">
                <img src={profil} alt="dev web" />
            </div>
        </section>
    );
};

export default Hero;
