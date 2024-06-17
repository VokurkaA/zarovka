function LgGallery({ image, background, imageIndex, maxImageIndex, handleNextClick, setIsGalleryVisible, progressBar, setTouchStart, handleTouch }) {
    return (
        <div id='gallery' className='fixed z-50 h-svh w-svw bg-background/70 backdrop-blur-sm'>
            <div className='absolute p-4'>
                <span className='font-bold'>{imageIndex + 1}</span>
                <span className='font-bold'>/</span>
                <span className='font-semibold'>{maxImageIndex + 1}</span>
            </div>
            <button className='absolute right-0 p-4' onClick={() => setIsGalleryVisible(false)}>
                <svg className="h-6 opacity-75 pl-1"
                    fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <button onMouseDown={() => handleNextClick(1)} className='group absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full aspect-square h-48 active:bg-gradient-to-r from-transparent to-accent/40 z-10'>
                <svg className='h-1/3 aspect-square m-auto -translate-x-2/3 p-4 bg-accent/75 rounded-full group-hover:scale-105' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </button>
            <button onMouseDown={() => handleNextClick(-1)} className='group scale-x-[-1] absolute left-0 top-1/2 h-48 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full active:bg-gradient-to-r from-transparent to-accent/40 z-10'>
                <svg className='h-1/3 aspect-square m-auto -translate-x-2/3 p-4 bg-accent/75 rounded-full group-hover:scale-105' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </button>
            <div className='absolute flex flex-row flex-nowrap gap-2 bottom-0 translate-x-1/2 right-1/2 p-4 z-10'>
                {progressBar}
            </div>
            <img className="absolute max-h-[90%] max-w-[95%] object-scale-down right-1/2 translate-x-1/2 -translate-y-1/2 top-1/2"
                style={{ backgroundColor: `${background}` }}
                alt="missing"
                src={image && image.src}
                onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
                onTouchEnd={(event) => handleTouch(event.changedTouches[0].clientX)}
            />
            <button className='absolute w-full h-full top-0 -z-10 cursor-default' onClick={() => setIsGalleryVisible(false)} />
        </div>
    );
}

export default LgGallery;
