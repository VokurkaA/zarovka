import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';

function Card({ project }) {
    const { t } = useTranslation();
    const projectRef = useRef(null);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    const handleResize = useCallback(() => {
        if (projectRef.current) {
            const maxLength = Math.floor((projectRef.current.getBoundingClientRect().width - 32) / 11);
            const newName = project.name.length > maxLength ? project.name.slice(0, maxLength - 3) + '...' : project.name;
            setName(newName);
        }
    }, [project.name]);

    useLayoutEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        let isMounted = true;

        const loadImage = async () => {
            const imageModule = await import(`../${project.cover.src}`);
            if (isMounted) {
                setImage(imageModule.default);
            }
        };

        loadImage();

        return () => {
            isMounted = false;
        };
    }, [project.cover.src]);
    return (
        <Link to={`/project/${project.link}`}
            ref={projectRef}
            className="flex flex-col flex-1 h-[22rem] rounded-xl shadow-md grayscale 
            focus:animate-fadeIn hover:animate-fadeIn hover:grayscale-0 hover:scale-[1.005]">
            <img
                className='h-64 w-full object-cover rounded-xl'
                style={{ backgroundColor: `${project.cover.background}` }}
                src={image}
                alt='loading...'
            />
            <div className='px-4 py-5  text-nowrap overflow-hidden'>
                {name && <h2 className='pb-1 text-xl uppercase'>{name}</h2>}
                <div className='flex items-center justify-between'>
                    {project.location && <h3 className='capitalize'>{project.location}</h3>}
                    <h3 className='text-sm italic'>
                        {project.year && <span>{project.year.year} </span>}
                        {(project.name && project.filters.length > 0) && <span>•</span>}
                        {project.filters.length > 0 && <span> {t(project.filters[0])}</span>}
                    </h3>
                </div>
            </div>
        </Link>
    )
}
export default Card;