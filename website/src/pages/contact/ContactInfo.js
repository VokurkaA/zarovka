import CcSmall from './CCard/CcSmall';
import CcLarge from './CCard/CcLarge';

import React, { useState, useEffect } from 'react';
import people from '../../people.info.json';
let smGrid = []
let lgGrid = []
for (let i = 0; i < people.length; i++) {
    smGrid[i] = <CcSmall personInfo={people[i]} />
    lgGrid[i] = <CcLarge personInfo={people[i]} />
}

function ContactInfo() {
    const [gridItems, setGridItems] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            const Component = window.innerWidth >= 768 ? CcLarge : CcSmall;
            const newGridItems = people.map(person => <Component key={person.full_name} personInfo={person} />);
            setGridItems(newGridItems);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex flex-wrap gap-4 justify-center select-none p-8 md:px-12 lg:px-24'>
            {gridItems}
        </div>
    );
}

export default ContactInfo;