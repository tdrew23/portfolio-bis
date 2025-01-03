// import  { useState } from 'react';
import '../styles.css';

const Header = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    //     document.body.classList.toggle('dark-mode');
    // };

    const toggleMobileMenu = () => {
        document.getElementById('menu').classList.toggle('active');
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header>
            <a href="#" className="logo-holder">
                <div className="logo">T</div>
                <div className="logo-text">Portfolio Website</div>
            </a>
            <nav>
                <ul id="menu">
                    <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
                    <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="button">Contact</a></li>
                </ul>
                <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-bars"></i>
                </a>
                {/* <button onClick={toggleTheme} className="theme-toggle">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button> */}
            </nav>
        </header>
    );
};

export default Header;
