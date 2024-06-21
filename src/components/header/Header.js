import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import Hamburger from './ico/hamburger';
import Cancel from './ico/cancel';
import Logo from './ico/logo';

function Header() {
    const { t } = useTranslation();

    const [isLarge, setIsLarge] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setIsLarge(windowWidth >= 768);
            if (windowWidth >= 768) {
                setIsExpanded(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => { setIsExpanded(!isExpanded) };

    return (
        <header id='header' className='fixed w-full top-0 z-20'>
            <div className='fixed z-20 bg-background/70 backdrop-blur-lg text-text w-full py-4 px-2 2xs:px-8 md:px-12 lg:pr-24 select-none rounded-b-xl'>
                <div className={'flex items-center justify-between'} >
                    <Link to="/" className='flex items-center space-x-2'>
                        <Logo />
                        <h1 className="uppercase font-sans text-2xl">žárovka architekti</h1>
                    </Link>

                    {isLarge ? (
                        <ul className='flex-row text-center flex lg:scale-110'>
                            <li className='w-24' ><Link to="/">{t('Home')}</Link></li>
                            <li className='w-24' ><Link to="/contact">{t('Contact')}</Link></li>
                            <li className='w-24' ><Link to="/gallery">{t('Gallery')}</Link></li>
                        </ul>
                    ) : (
                        <button onClick={toggleExpanded}>
                            {isExpanded ? <Cancel /> : <Hamburger />}
                        </button>
                    )}
                </div>
                {isExpanded &&
                    <ul onClick={toggleExpanded} className='flex flex-col pt-8 pb-4 md:hidden'>
                        <li className='rounded-md hover:bg-accent'><Link className='w-full block p-2' to="/">{t('Home')}</Link></li>
                        <li className='rounded-md hover:bg-accent'><Link className='w-full block p-2' to="/contact">{t('Contact')}</Link></li>
                        <li className='rounded-md hover:bg-accent'><Link className='w-full block p-2' to="/gallery">{t('Gallery')}</Link></li>
                    </ul>}
            </div>
            {isExpanded && <button onClick={toggleExpanded} className='absolute top-0 h-screen w-full bg-background/50'></button>}
        </header>
    );
}
export default Header;