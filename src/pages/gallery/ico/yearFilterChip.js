import { useState, useEffect } from "react";

import DropDown from "./dropDown";

function YearFilterChip({ setFilterYear, yearSpan }) {
    const [max, setMax] = useState(yearSpan.max);
    const [min, setMin] = useState(yearSpan.min);
    useEffect(() => {
        const handleClick = (event) => {

        }
    })
    const [isSelected, setIsSelected] = useState(false);
    let elements = [];
    for (let i = yearSpan.max; i >= yearSpan.min; i--)
        elements.push(<button className="p-2 hover:bg-secondary rounded-md hover:scale-[1.05] hover:font-medium" key={i}>{i}</button>)
    const yearList = <div className="absolute bg-accent p-3 pt-0 z-10 w-max rounded-lg rounded-t-none mt-0 grid grid-cols-4 md:grid-cols-5 -translate-y-1 shadow-md">{elements}</div>

    return (
        <div onClick={() => setIsSelected(!isSelected)}>
            <div className={'shadow-md rounded-lg bg-accent cursor-pointer text-center text-nowrap flex items-center px-3 py-2'}>
                <span>{max} - {min}</span>
                <DropDown isRotated={isSelected} />
            </div>
            {isSelected && yearList}
        </div>
    );
};
export default YearFilterChip;