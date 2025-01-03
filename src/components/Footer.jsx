import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Contactez-moi</h3>
                    <p>Email : <a href="mailto:example@email.com">tariqdrewniak16@gmail.com</a></p>
                    <p>Téléphone : <a href="tel:+1234567890">+123 456 7890</a></p>
                    <p>Adresse : 75019, Pays</p>
                </div>
                <div className="footer-socials">
                    <h3>Suivez-moi</h3>
                    <div className="social-icons">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
