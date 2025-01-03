import  { useState } from 'react';
import '../styles.css';
import Modal from './Modal';
import ohmyfood from '../img/ohmyfood.webp';
import riding from '../img/riding.webp';
import booki from '../img/booki.webp';
import printIn from '../img/Print-in.png';
import architecte from '../img/architecte.webp';
import kasa from '../img/kasa.webp';
import photo from '../img/photo.webp';
import argentBank from '../img/argentBank.webp';
import debug from '../img/debug.webp';

const Projects = () => {
    const projects = [
        {
            name: 'Ohmyfood',
            description: 'Site mobile avec des animations CSS',
            url: 'https://tdrew23.github.io/ohmyfood/',
            gitUrl: 'https://github.com/tdrew23/ohmyfood.git',
            image: ohmyfood,
            skills: ['HTML', 'CSS', 'Responsive Design', 'Animations CSS']
        },
        {
            name: 'Riding Cities',
            description: 'Site HTML',
            url: 'https://tdrew23.github.io/Riding-cities/',
            gitUrl: 'https://github.com/tdrew23/Riding-cities.git',
            image: riding,
            skills: ['HTML', 'CSS', 'SEO', 'Structure sémantique']
        },
        {
            name: 'Booki',
            description: "Page d'accueil d'une agence de voyage avec HTML & CSS",
            url: 'https://tdrew23.github.io/Booki/',
            gitUrl: 'https://github.com/tdrew23/Booki.git',
            image: booki,
            skills: ['HTML', 'CSS', 'Flexbox', 'Responsive Design', 'Accessibilité']
        },
        {
            name: 'Print-in',
            description: 'Print-in Javascript',
            url: 'https://tdrew23.github.io/Print-it-JS/',
            gitUrl: 'https://github.com/tdrew23/Print-it-JS.git',
            image: printIn,
            skills: ['JavaScript', 'DOM Manipulation', 'AJAX', 'Responsive Design']
        },
        {
            name: 'Portfolio Architecte',
            description: "Portfolio d'un architecte avec animations CSS",
            url: 'https://tdrew23.github.io/tdrew23-portfolio-architecte-Fontend/',
            gitUrl: 'https://github.com/tdrew23/portfolio-architecte.git',
            image: architecte,
            skills: ['HTML', 'CSS', 'Transitions', 'Flexbox', 'Grid Layout']
        },
        {
            name: 'Kasa',
            description: 'Application web de location immobilière avec React',
            url: 'https://tdrew23.github.io/Kasa/',
            gitUrl: 'https://github.com/tdrew23/Kasa.git',
            image: kasa,
            skills: ['React', 'React Router', 'JavaScript', 'CSS ', 'Responsive Design']
        },
        {
            name: 'Nina Carducci',
            description: 'Site de photographe avec portfolio interactif',
            url: 'https://tdrew23.github.io/Nina-Carducci/',
            gitUrl: 'https://github.com/tdrew23/Nina-Carducci.git',
            image: photo,
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'API']
        },
        {
            name: 'ArgentBank',
            description: 'Application bancaire React',
            url: 'https://tdrew23.github.io/ArgentBank-Frontend/',
            gitUrl: 'https://github.com/tdrew23/ArgentBank.git',
            image: argentBank,
            skills: ['React',, 'React Router', 'Redux', 'API REST', 'JavaScript', 'CSS']
        },
        {
            name: '724events',
            description: "Site d'une agence d'événementiel",
            url: 'https://tdrew23.github.io/724events-bis/',
            gitUrl: 'https://github.com/tdrew23/724events-bis.git',
            image: debug,
            skills: ['HTML', 'CSS', 'Javascript', 'Responsive Design']
        }
    ];
    

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="bento">
            <h2>Projets complétés</h2>
            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div className="bento-item" key={index} onClick={() => openModal(project)}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">Voir le site</a>
                        <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                            <i className="fa-brands fa-github"></i> Voir le code
                        </a>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;
