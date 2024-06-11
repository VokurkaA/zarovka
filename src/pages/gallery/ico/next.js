function Next({ isRotated, handleNextClick }) {
    return (
        <button onClick={() => handleNextClick(isRotated)}
        className={`w-1/2 md:w-2/6 aspect-square rounded-full z-10 absolute top-1/2 -translate-y-1/2 hover:scale-[98%]
            ${isRotated ? 'right-0 translate-x-1/2 pr-24 active:bg-gradient-to-r from-transparent to-accent/25' :
                'left-0 -translate-x-1/2 pl-24 active:bg-gradient-to-l from-transparent to-accent/25'}`}>
            <div className={`bg-accent p-4 rounded-full w-min mx-auto opacity-85 ${isRotated ? '' : 'scale-x-[-1]'}`}>
                <svg className='w-4 h-4'
                    viewBox="0 0 320 512">
                    <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
            </div>
        </button>
    )
}
export default Next;