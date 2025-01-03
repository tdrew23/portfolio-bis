import '../styles.css';
import ohmyfood from '../img/ohmyfood.png'
import riding from '../img/riding.png'
import booki from '../img/booki.png'
import printIn from '../img/Print-in.png'
import architecte from '../img/architecte.png'
import kasa from '../img/kasa.png'
import photo from '../img/photo.png'
import argentBank from '../img/argentBank.png'

const Projects = () => {
    const projects = [
        { name: 'Ohmyfood', description: 'Site mobile avec des animations CSS', url: 'https://tdrew23.github.io/ohmyfood/', gitUrl : 'https://github.com/tdrew23/ohmyfood.git', image: ohmyfood },
        { name: 'Riding Cities', description: 'Site HTML', url: ' https://tdrew23.github.io/Riding-cities/' , gitUrl : 'https://github.com/tdrew23/Riding-cities.git', image: riding },
        { name: 'Booki', description: " Page d'accueil d'une agence de voyage avec HTML & CSS", url: 'https://tdrew23.github.io/Booki/' , gitUrl : 'https://github.com/tdrew23/Booki.git', image: booki },
        { name: 'Print-in', description: 'Print-in Javascript', url: ' https://tdrew23.github.io/Print-it-JS/' , gitUrl : 'https://github.com/tdrew23/Print-it-JS.git', image: printIn },
        { name: 'Portfolio Architecte', description: 'Description du projet 3.', url: 'https://tdrew23.github.io/tdrew23-portfolio-architecte-Fontend/' , gitUrl : 'https://github.com/tdrew23/portfolio-architecte.git', image: architecte },
        { name: 'Kasa', description: 'Application web de location immobilière avec React', url: 'https://tdrew23.github.io/Kasa/' , gitUrl : 'https://github.com/tdrew23/Kasa.git', image: kasa },
        { name: 'Nina Carducci', description: 'Site de photographe', url: 'https://tdrew23.github.io/Nina-Carducci/' , gitUrl : 'https://github.com/tdrew23/Nina-Carducci.git', image: photo },
        { name: 'ArgentBank', description: 'Application bancaire  React.', url: 'https://tdrew23.github.io/ArgentBank-Frontend/' , gitUrl : 'https://github.com/tdrew23/ArgentBank.git', image: argentBank },


    ];

    return (
        <section id="projects" className="bento">
            <h2>Projets complétés</h2>
            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div className="bento-item" key={index}>
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
        </section>
    );
};

export default Projects;
