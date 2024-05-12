function DropDown({isRotated}) {
    return (
        <svg
        className={`h-6 w-6 ${isRotated && 'rotate-180'}`}
            viewBox="0 -960 960 960" >
            <path
                d="M480-360 280-560h400L480-360Z" />
        </svg>
    )
}
export default DropDown