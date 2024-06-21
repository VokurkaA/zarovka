import { useTranslation } from 'react-i18next'

import Google from './ico/google_reviews';
import Facebook from './ico/facebook_reviews';
import Quote from './ico/quote';

function Reviews() {
    const { t } = useTranslation();
    return (
        <div>
            <article className='prose-sm max-w-none lg:prose lg:max-w-none md:text-center mb-4 lg:mb-6'>
                <h2>{t('Reviews')}</h2>
            </article>
            <div className='flex gap-4 flex-nowrap overflow-x-auto pb-2'>
                <Google />
                <Quote author='Boris G.' text='S Žárovkou byla od začátku výborná spolupráce. S Katkou Novotnou a Maxem Vlčkem jsme byli celou dobu na stejné vlně - od architektonické studie až po návrhy interiéru. Oceňuji i zprostředkování kvalitních dodavatelů, kteří dokázali proměnit nápad v realitu.' />
                <Facebook />
                <Quote author='Michael Duben' text='Naše spolupráce začala v roce 2007, kdy jsme zadali k projektování rodinný dům na venkově. Celý průběh projektování a vytváření domu byl pro nás radost. Po této zkušenosti jsme neváhali a oslovili stejné architekty i v případě multifunkčního domu v Hradci Králové.' />
            </div>
        </div>
    )
}
export default Reviews;