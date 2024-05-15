import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './ico/home';
import LgGallery from './LgGallery';
import places from './places.json';
import Dot from './ico/dot';

function Project() {
    const projectLink = useLocation().pathname.split('/').pop();
    const project = places.find(place => place.link === projectLink) || {};
    const name = project.name ? project.name.charAt(0).toUpperCase() + project.name.slice(1) : null;
    const images = useMemo(() => project.images || [], [project.images]);

    const [image, setImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [progressBar, setProgressBar] = useState([]);
    const [position, setPosition] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    useEffect(() => {
        //initial loading
        async function loadImage(image) {
            const src = await import(`./${image.src}`);
            const imgElement = new Image();
            imgElement.src = src.default;
            return new Promise((resolve, reject) => {
                imgElement.onload = () => resolve(imgElement);
                imgElement.onerror = reject;
            });
        }
        async function loadImages() {
            const cover = await loadImage(images[0]);
            setCoverImage(cover);
            setImage(cover);
            const restImages = await Promise.all(images.slice(1).map(loadImage));
            setLoadedImages([cover, ...restImages]);
        }
        function loadProgressBar() {
            let elements = [];
            for (let i = 0; i <= Math.min(images.length - 1, 4); i++)
                elements.push(<Dot key={i} isUsed={i === 0} />);
            setProgressBar(elements);
        }
        loadProgressBar();
        loadImages();
    }, [images]);

    const handleNextClick = useCallback((rIndex) => {
        const maxImageIndex = images.length - 1;
        const maxDotsIndex = Math.min(maxImageIndex, 4);
        const newIndex = (imageIndex + rIndex + images.length) % images.length;
        setImageIndex(newIndex);
        setImage(loadedImages[newIndex]);
        let newPosition = position;
        if (rIndex === 1) {
            if (newIndex === 0)
                newPosition = 0;
            else if (newIndex === maxImageIndex)
                newPosition = maxDotsIndex;
            else if (position < maxDotsIndex - 1)
                newPosition++;
            setPosition(newPosition);
        } else if (rIndex === -1) {
            if (newIndex === maxImageIndex)
                newPosition = maxDotsIndex;
            else if (newIndex === 0)
                newPosition = 0;
            else if (position > 1)
                newPosition--;
            setPosition(newPosition);
        }
        let elements = [];
        for (let i = 0; i <= maxDotsIndex; i++)
            elements.push(<Dot key={i} isUsed={i === newPosition} />);
        setProgressBar(elements);
    }, [imageIndex, images.length, loadedImages, position]);

    const handleTouch = useCallback((touchEnd) => {
        const dX = touchStart - touchEnd;
        const tolerance = 10;
        if (Math.abs(dX) > tolerance) {
            if (dX > 0)
                handleNextClick(1);
            else if (dX < 0)
                handleNextClick(-1);
        }
    }, [touchStart, handleNextClick]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft')
                handleNextClick(-1);
            else if (event.key === 'ArrowRight')
                handleNextClick(1);
            else if (event.key === 'Escape')
                setIsGalleryVisible(false)
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNextClick]);

    const gallery = useMemo(() => {
        return isGalleryVisible && (
            <LgGallery
                image={image}
                background={project.images[imageIndex].background}
                imageIndex={imageIndex}
                maxImageIndex={images.length - 1}
                handleNextClick={handleNextClick}
                setIsGalleryVisible={setIsGalleryVisible}
                progressBar={progressBar}
                setTouchStart={setTouchStart}
                handleTouch={handleTouch}
            />
        );
    }, [handleNextClick, image, imageIndex, images.length, isGalleryVisible, progressBar, handleTouch, project.images]);

    return (
        <main>
            <Helmet>
                <title>{name || 'Projekt'}</title>
            </Helmet>
            {isGalleryVisible && gallery}
            <img className='w-full min-h-56 max-h-96 object-cover' style={{ backgroundColor: `${project.images[0].background}` }} src={coverImage && coverImage.src} alt='cover' />
            <div className='select-none p-4 px-8 md:px-12 lg:px-24 space-y-12 md:space-y-16'>

                <article className='prose-sm mx-auto lg:prose lg:max-w-5xl prose-a:no-underline prose-a:font-light'>
                    {name && <h1 className='text-center capitalize lg:font-normal md:text-4xl my-6 lg:my-8'>{name}</h1>}
                    <div className='flex space-between flex-wrap justify-between'>
                        <div className='space-x-1 select-none'>
                            <Link to='../'><Home /></Link><span>{'>'}</span><Link to='./'>Galerie</Link><span>{'>'}</span><Link>{name}</Link>
                        </div>
                        <span className='italic font-light capitalize text-right'>
                            {project.location && <a href={`https://www.google.com/maps/search/${project.location}`} target="_blank" rel="noopener noreferrer" >{project.location}</a>}
                            <span> • </span>
                            <span>{project.year.text} {project.year.year}</span>
                        </span>
                    </div>
                    {project.text.length > 0 && (project.text.map((paragraph, index) => <p key={index}>{paragraph}</p>))}
                </article>
                <div className='mx-auto max-w-5xl'>
                    <div className='w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden relative'>
                        <button onMouseDown={() => handleNextClick(1)} className='absolute right-0 top-1/2 h-1/2 min-h-44 translate-x-1/2 -translate-y-1/2 aspect-square rounded-full active:bg-gradient-to-r from-transparent to-accent/40'>
                            <svg className='h-1/5 min-h-14 aspect-square m-auto -translate-x-2/3 p-4 bg-accent/75 rounded-full' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </button>
                        <button onMouseDown={() => handleNextClick(-1)} className='scale-x-[-1] absolute left-0 top-1/2 h-1/2 min-h-44 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full active:bg-gradient-to-r from-transparent to-accent/40'>
                            <svg className='h-1/5 min-h-14 aspect-square m-auto -translate-x-2/3 p-4 bg-accent/75 rounded-full' viewBox="0 0 320 512"> <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                        </button>
                        <button onClick={() => setIsGalleryVisible(true)} className='cursor-default h-full w-full'><img className='h-full w-full object-cover' style={{ backgroundColor: `${project.images[imageIndex].background}` }} src={image && image.src} alt='loading...' /></button>
                    </div>                    <div className='font-light my-4'>
                        {project.authors.length > 0 &&
                            (project.authors.map((author, index) =>
                                <p key={index} className='capitalize'>
                                    <span>{author.position}</span>
                                    <span>: </span>
                                    <span className='italic'>{author.people}</span>
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;
