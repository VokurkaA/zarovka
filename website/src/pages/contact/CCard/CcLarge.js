import UserIco from '../ico/user';

function CcLarge(personInfo) {
    personInfo = personInfo.personInfo;

    return (
        <div className='flex flex-row items-center space-x-4 p-4 shadow-md rounded-xl text-nowrap w-min hover:bg-accent hover:scale-[1.01]'>
            <div className='flex flex-row'>
                <UserIco />
            </div>
            <div className='w-60'>
                <h2 className='text-lg capitalize'>{personInfo.full_name}</h2>
                <p className='text-sm'>{personInfo.position}</p>
            </div>
            <div className='w-64'>
                <p>{personInfo.mobile}</p>
                <p>{personInfo.email}</p>
                {
                    personInfo.ics != null ? (
                        <p>IČO {personInfo.ics}
                        </p>) : null
                }   
            </div>
        </div>
    );
}
export default CcLarge;