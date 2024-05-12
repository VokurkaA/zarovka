import { useTranslation } from 'react-i18next'

import bigImg from './img/bgimg.webp';

function Above_fold() {
    const { t } = useTranslation();

    return (
        <div id='image' className='relative select-none'>
            <img className='w-full h-[80svh] object-cover bg-[#a8b0bb]' src={bigImg} alt="Main content image" />
            <div className='absolute grid grid-cols-2 inset-0 text-background opacity-85 content-center px-8 md:px-24'>
                <h1 className='text-6xl md:text-8xl uppercase font-bold'>žárovka architekti</h1>
                <h2 className='col-start-1 text-2xl md:text-5xl max-w-2xl md:leading-tight'>{t('Arch_studio')}</h2>
            </div>
        </div>
    )
}
export default Above_fold;