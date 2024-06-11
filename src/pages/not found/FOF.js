import { useTranslation } from 'react-i18next'

function FOF (){
    const { t } = useTranslation();

    return(
        <main className="text-center p-16 select-none">
            <h1 className="text-9xl font-semibold">404</h1>
            <h2 className="text-3xl">{t('NotFound')}</h2>
            <p>{t('FNotFound')}</p>
        </main>
    );
}
export default FOF;