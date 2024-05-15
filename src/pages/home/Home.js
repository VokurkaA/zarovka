import {Helmet} from "react-helmet";

import { Analytics } from '@vercel/analytics/react';

import AboveFold from './AboveFold';
import AboutUs from './AboutUs';
import WhyUs from './WhyUs';
import Reviews from './Reviews';
import ContactUs from './ContactUs';


function MainPage() {
    return (
        <main>
            <Helmet>
                <title>žárovka architekti</title>
            </Helmet>
            <AboveFold />
            <div className='select-none space-y-16 md:space-y-20 p-8 md:px-12 lg:px-24'>
                <AboutUs />
                <Reviews/>
                <WhyUs/>
                <ContactUs/>
            </div>
            <Analytics />
        </main>
    )
}
export default MainPage;