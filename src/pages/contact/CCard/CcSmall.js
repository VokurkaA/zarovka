import React, { useState } from 'react';
import UserIco from '../ico/user';
import Arrow from '../ico/arrow';
import Email from '../ico/email';
import Phone from '../ico/phone';
import Icso from '../ico/icso';

function CcSmall(personInfo) {
    personInfo = personInfo.personInfo;

    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(!isExpanded);
    }

    return (
        <button onClick={expand} className='p-4 rounded-lg shadow-md hover:bg-accent hover:scale-[1.02]'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex items-center'>
                    <UserIco />
                    <div className='mr-8 ml-4 text-left'>
                        <h2 className='capitalize'>{personInfo.full_name}</h2>
                        <p className='w-56'>{personInfo.position}</p>
                    </div>
                </div>
                <Arrow isExpanded={isExpanded}></Arrow>
            </div>
            <div className={isExpanded ? 'flex-col space-y-2 mt-2' : 'hidden flex-col space-y-2 mt-2'}>
                <div className='h-px w-full bg-text'></div>
                <a href='mailto:email@email.com' className='flex flex-row items-center gap-1'>
                    <Email color='background' />{personInfo.email}
                </a>
                <div className='flex flex-row items-center gap-1'>
                    <Phone color='background' />{personInfo.mobile}
                </div>
                {
                personInfo.ics && (
                    <div className='flex flex-row items-center gap-1'>
                        <Icso color='background' />{personInfo.ics}
                    </div>)
                }
            </div>
        </button>
    );
}

export default CcSmall;
