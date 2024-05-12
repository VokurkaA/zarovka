import { useTranslation } from 'react-i18next'

function Why_us() {
    const { t } = useTranslation();

    return (
        <article className='prose-sm lg:max-w-none lg:prose'>
            <h2 className='md:text-center'>{t('Why')}</h2>
            <div className='grid gap-6 lg:grid-flow-col'>
                <div className=''>
                    <h3 className='mt-0'>{t('Experts')}</h3>
                    <p>{t('Experts_text')}</p>
                </div>
                <div>
                    <h3 className='mt-0'>{t('Professionals')}</h3>
                    <p>{t('Professionals_text')}</p>
                </div>
                <div>
                    <h3 className='mt-0'>{t('History')}</h3>
                    <p>{t('History_text')}</p>
                </div>
            </div>
        </article>
    )
}
export default Why_us;