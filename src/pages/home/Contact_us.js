import { useTranslation } from 'react-i18next'

import house2 from './img/house_2.webp'

function Contact_us() {
    const { t } = useTranslation();

    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <img className='w-full h-80 md:h-full object-cover my-auto' src={house2} alt='Picture of a house'></img>
            <form id='contact' className='space-y-6 h-min my-auto'>
                <h2 className='text-2xl'>{t('CCUs')}</h2>
                <label className='block'>
                    <span>{t('Name')}</span>
                    <input className='form-input block bg-accent rounded-lg w-full text-sm' placeholder={t('FName')}></input>
                </label>

                <label className='block'>
                    <span>{t('Email')}</span>
                    <input className='form-input block bg-accent rounded-lg w-full text-sm' type='email' placeholder={t('FEmail')}></input>
                </label>

                <label className='block'>
                    <span>{t('Message')}</span>
                    <textarea className='form-textarea bg-accent rounded-lg w-full h-40 resize-none text-sm' placeholder={t('FMessage')}></textarea>
                </label>

                <div>
                    <span>{t('Service')}</span>
                    <div className='space-x-6'>
                        <label>
                            <input type="radio" className='form-radio cursor-pointer' name='Service'></input>
                            <span className='ml-1'>{t('Consultation')}</span>
                        </label>
                        <label>
                            <input type="radio" className='form-radio cursor-pointer' name='Service'></input>
                            <span className='ml-1'>{t('Price')}</span>
                        </label>
                        <button type='submit' className='bg-text text-background rounded float-right px-4 py-1'>{t('Send')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Contact_us;