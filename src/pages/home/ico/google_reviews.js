import { useTranslation } from 'react-i18next'

import Google from './google.js';
import Star from './star.js';

function Reviews() {
    const { t } = useTranslation();

    return (
        <a className='flex flex-col bg-accent items-center shadow-md w-56 justify-center p-6 rounded-xl hover:scale-[1.01]'
            href='https://g.co/kgs/SuixKJK'
            rel='noreferrer noopener'
            target='_blank'>
            <Google />
            <div className='flex flex-row'>
                <p className='font-bold mr-2 text-xl'>5.0</p>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className='underline text-xs text-primary' >{t('AllReviews')}</p>
        </a>
    )
}
export default Reviews;