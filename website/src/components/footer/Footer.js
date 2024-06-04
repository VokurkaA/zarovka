import React, {useState} from "react";
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import { t } from "i18next";

import Email from './ico/email.js';
import Facebook from './ico/facebook.js';
import Instagram from './ico/instagram.js';

function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
        <footer id='footer' className='bg-accent text-primary font-extralight p-8 md:px-12 lg:px-24'>
            <div className='flex my-8 flex-row space-x-6'>
                <Link to="/">{t('Home')}</Link>
                <Link to="/contact">{t('Contact')}</Link>
                <Link to="/gallery">{t('Gallery')}</Link>
            </div>
            <div className='w-full h-px bg-primary'></div>
            <div className='flex flex-col gap-6 my-8 md:flex-row'>
                <a href='https://www.facebook.com/zarovka/' className='flex flex-row items-center gap-1'>
                    <Facebook />Facebook
                </a>
                <a href='https://www.instagram.com/zarovkaarchitekti/' className='flex flex-row items-center gap-1'>
                    <Instagram />Instagram
                </a>
                <a href='mailto:info@zarovkaarchitekti.cz' className='flex flex-row items-center gap-1'>
                    <Email />Email
                </a>
            </div>
            <div className='flex flex-col justify-between  md:flex-row'>
                <p>© 2024 ŽÁROVKA ARCHITEKTI, <span><a href='https://maps.app.goo.gl/w6RkSuW9mPu67L9V9'>
                    Křižíkova 788, Hradec Králové</a></span></p>
                <ul className='flex flex-row space-x-2'>
                    <li><button className={selectedLanguage === 'cz' ? 'underline' : ''} value='cz' onClick={chooseLanguage}>Čeština</button></li>
                    <p className="select-none"> / </p>
                    <li><button className={selectedLanguage === 'en' ? 'underline' : ''} value='en' onClick={chooseLanguage}>English</button></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;