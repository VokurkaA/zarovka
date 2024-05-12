import {Helmet} from "react-helmet";

import Above_fold from './Above_fold';
import AboutUs from './About_us';
import Why_us from './Why_us';
import Reviews from './Reviews';
import Contact_us from './Contact_us';


function MainPage() {
    return (
        <main>
            <Helmet>
                <title>žárovka architekti</title>
            </Helmet>
            <Above_fold />
            <div className='select-none space-y-16 md:space-y-20 p-8 md:px-12 lg:px-24'>
                <AboutUs />
                <Reviews/>
                <Why_us/>
                <Contact_us/>
            </div>
        </main>
    )
}
export default MainPage;