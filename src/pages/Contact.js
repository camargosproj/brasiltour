import React from "react";
import '../App.css';
import Button from '../components/Button';

const Contact = ({scrollToSection}) => {
    return (
        <div className="contact" ref={scrollToSection}>
            <div className="contact-container">
                <form className="form-container">
                    <h1 className="form-title">Entre em Contato</h1>
                    <div className="input-container">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Digite seu nome" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Digite seu email" />
                        <label htmlFor="textarea">Mensagem</label>
                        <textarea id="textarea" placeholder="Digite seu texto"></textarea>
                    </div>
                    <Button className="btns" goTo="/brasiltour"  buttonStyle='btn--outline' buttonSize='btn--large'>Enviar</Button>
                </form>
            </div>
        </div>  
     );
}
 
export default Contact;