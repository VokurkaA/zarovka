import {Helmet} from "react-helmet";
import { useTranslation } from 'react-i18next'

import AboveFold from './AboveFold'
import ContactInfo from './ContactInfo'

function ContactPage() {
    const { t } = useTranslation();

    return (
        <main>
            <Helmet>
                <title>{t('Contact')}</title>
            </Helmet>
            <AboveFold />
            <ContactInfo />
        </main>
    )
}
export default ContactPage;