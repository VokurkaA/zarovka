import groupPhoto from './img/group.webp';

function AboveFold() {
    return (
        <div className='relative select-none'>
            <div className='h-16 w-full'></div>
            <img className='w-full min-h-80 md:max-h-[30rem] object-cover bg-[#545454]' src={groupPhoto} alt='house interior'></img>
        </div>
    )
}
export default AboveFold;