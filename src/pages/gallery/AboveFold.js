import { useTranslation } from 'react-i18next'

import image from './img/above_fold.webp'

function AboveFold() {
    const { t } = useTranslation();

    return (
        <div className='relative select-none'>
            <img className='w-full min-h-80 max-h-96 object-cover bg-[#8e7761]' src={image} alt='house interior'></img>
            <h1 className='absolute top-1/2 px-8 md:px-12 lg:px-24 text-5xl uppercase font-bold text-background drop-shadow-lg'>{t('Projects')}</h1>
        </div>
    )
}
export default AboveFold;