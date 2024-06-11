function Dot({isUsed}){
    return(
        <div className={`h-2 aspect-square bg-text rounded-full block ${!isUsed && 'opacity-25'}`}></div>
    )
}
export default Dot;