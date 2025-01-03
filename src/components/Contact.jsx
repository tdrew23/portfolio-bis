import  { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_kowt4b2', // Remplacez par votre Service ID EmailJS
            'template_2omz4yt', // Remplacez par votre Template ID
            form.current,
            'az_5TXhrIsuxq6BCF' // Remplacez par votre User ID
        ).then(
            (result) => {
                console.log(result.text);
                setIsSubmitted(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section id="contact" className="contact">
            <h2>Contactez-moi</h2>
            {isSubmitted ? (
                <p>Merci pour votre message, je reviendrai vers vous bientôt !</p>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Votre nom" required />
                    <input type="email" name="email" placeholder="Votre email" required />
                    <textarea name="message" placeholder="Votre message" required></textarea>
                    <button type="submit" className="button">Envoyer</button>
                </form>
            )}
        </section>
    );
};

export default Contact;
