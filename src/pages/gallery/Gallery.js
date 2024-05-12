import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";

import AboveFold from "./AboveFold";
import Chip from "./ico/chip";
import YearFilterChip from "./ico/yearFilterChip";
import Card from "./ico/card";

import places from './places.json';

function Gallery() {
    const { t } = useTranslation();

    const [filterCategory, setFilterCategory] = useState(null);
    const [filterYear, setFilterYear] = useState({ min: null, max: null });
    const [projects, setProjects] = useState([]);

    const yearSpan = places.reduce((acc, project) => {
        acc.min = Math.min(acc.min, project.year.year);
        acc.max = Math.max(acc.max, project.year.year);
        return acc;
    }, { min: Infinity, max: -Infinity });

    const filters = ['rodinne-domy', 'obytne-domy', 'interiery', 'verejne-stavby', 'rekonstrukce', 'urbanismus'];
    const filterChips = (
        <div className="flex gap-2 overflow-x-scroll nowrap pb-2 mt-2">
            <YearFilterChip setFilterYear={setFilterYear} yearSpan={yearSpan} />
            {filters.map(filter => <Chip key={filter} text={filter} isSelected={filterCategory === filter} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />)}
        </div>
    );

    useEffect(() => {
        let elements = places;
        filterCategory && (elements = elements.filter(element => element.filters.includes(filterCategory)))
        filterYear.min && filterYear.max && (elements = elements.filter(element => (element.year.year >= filterYear.min) && (element.year.year <= filterYear.max)));
        elements.length === 0 ? setProjects([]) : setProjects(elements)
    }, [filterCategory, filterYear]);

    return (
        <main>
            <Helmet>
                <title>{t('Gallery')}</title>
            </Helmet>
            <AboveFold />
            <div className="select-none p-4 px-8 md:px-12 lg:px-24">
                {filterChips}
                <h2 className="mb-4">{[t('showing'), projects.length, t('results'), yearSpan.min, t('and') ,yearSpan.max, filterCategory && [(t('category')), t(filterCategory)].join(' ')].join(' ')}</h2>
                <div className="flex flex-row flex-wrap gap-4 font-thin">
                    {projects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Gallery;