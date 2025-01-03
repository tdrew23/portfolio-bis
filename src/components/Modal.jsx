import PropTypes from 'prop-types';
import '../styles.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h3>Compétences développées :</h3>
                <ul>
                    {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">Voir le site</a>
                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                    <i className="fa-brands fa-github"></i> Voir le code
                </a>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        gitUrl: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
};

export default Modal;
