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
    const filters = ['rodinne-domy', 'obytne-domy', 'interiery', 'verejne-stavby', 'rekonstrukce', 'urbanismus'];
    const yearSpan = places.reduce((acc, project) => {
        acc.min = Math.min(acc.min, project.year.year);
        acc.max = Math.max(acc.max, project.year.year);
        return acc;
    }, { min: Infinity, max: -Infinity });

    const [filterCategory, setFilterCategory] = useState(null);
    const [filterYear, setFilterYear] = useState({ min: yearSpan.min, max: yearSpan.max });
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let elements = places;
        filterYear.min && filterYear.max && (elements = elements.filter(element => (element.year.year >= filterYear.min) && (element.year.year <= filterYear.max)));
        filterCategory && (elements = elements.filter(element => element.filters.includes(filterCategory)))
        elements.sort((a, b) => b.year.year - a.year.year)
        elements.length === 0 ? setProjects([]) : setProjects(elements)
    }, [filterCategory, filterYear]);

    return (
        <main>
            <Helmet>
                <title>{t('Gallery')}</title>
            </Helmet>
            <AboveFold />
            <div className="select-none p-4 px-8 md:px-12 lg:px-24">
                <div className="flex gap-2 overflow-x-scroll nowrap pb-2 mt-2">
                    <YearFilterChip setFilterYear={setFilterYear} yearSpan={yearSpan} />
                    {filters.map(filter =>
                        <Chip key={filter} text={filter} isSelected={filterCategory === filter  } filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
                    )}
                </div>
                <h2 className="mb-4">
                    {((projects.length === 0 || projects.length > 4) && t('showing0')) || (projects.length === 1 && t('showing1')) || t('showing2')}
                    {projects.length}
                    {((projects.length === 0 || projects.length > 4) && t('result0')) || (projects.length === 1 && t('result1')) || t('result2')}
                    {filterYear.max === filterYear.min ? t('from') + ' ' + filterYear.max : t('between') + filterYear.min + t('and') + filterYear.max}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 font-thin">
                    {projects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Gallery;