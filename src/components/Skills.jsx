import '../styles.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: 'fa-html5', description: 'Création de structures web modernes et sémantiques.' },
        { name: 'CSS', icon: 'fa-css3-alt', description: 'Design responsive et animations interactives.' },
        { name: 'JavaScript', icon: 'fa-js-square', description: 'Ajout d\'interactivité et de fonctionnalités dynamiques.' },
        { name: 'React', icon: 'fa-react', description: 'Développement d\'interfaces utilisateurs réactives.' },
        { name: 'Node.js', icon: 'fa-node', description: 'Création de backends performants et sécurisés.' },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Mes Compétences</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <i className={`fa-brands ${skill.icon}`}></i>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
