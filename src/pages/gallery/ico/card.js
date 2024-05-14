import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect } from 'react';

function Card({ project }) {
    const { t } = useTranslation();
    let name = (project.name.length > 25) ? project.name.substr(0, 23) + '...' : project.name;
    const [image, setImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const imageModule = await import(`../${project.cover.src}`);
            setImage(imageModule.default);
        };
        loadImage();
    }, [project.cover.src]);
    return (
        <Link to={`/project/${project.link}`}
            className="flex flex-col flex-1 h-[22rem] rounded-xl shadow-md grayscale 
            focus:animate-fadeIn hover:animate-fadeIn hover:grayscale-0 hover:scale-[1.005]">
            {image && <img className="h-64 w-full object-cover rounded-xl" loading='lazy' src={image} alt="missing"></img>}
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