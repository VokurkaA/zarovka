import { useTranslation } from 'react-i18next'

import house1 from './img/house_1.webp';

function About_us() {
    const { t } = useTranslation();

    return (
        <div className='grid gap-4 md:grid-cols-2'>
            <article className='prose-sm my-auto lg:prose lg:max-w-none'>
                <h2>{t("About_us")}</h2>
                <p>{t("About_text")}</p>
            </article>
            <img className='w-full h-80 md:h-96 object-cover my-auto' src={house1} alt='Picture of a house'></img>
        </div>
    )
}
export default About_us;