import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/20287680?s=460&u=26d6550cbdf8e95ae37b7a050b20df7239c67586&v=4" alt="Fernando Vedoin" />
                <div>
                    <strong>
                        Fernando Vedoin
                    </strong>
                    <span>
                        Matemática
                    </span>
                </div>
            </header>
            <p>
                Nullam porta quis felis at.
                <br /> <br />
                Etiam et purus nisl. Phasellus tempor porttitor metus. Vestibulum et dolor tellus. Donec eros turpis.
            </p>
            <footer>
                <p>
                    Preço/hora <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;