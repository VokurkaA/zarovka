import { useState, useEffect } from "react";

import DropDown from "./dropDown";

function YearFilterChip({ setFilterYear, yearSpan }) {
    const [isSelected, setIsSelected] = useState(false);
    const [num1, setNum1] = useState(yearSpan.max);
    const [num2, setNum2] = useState(yearSpan.min);
    const [clickAmount, setClickAmount] = useState(0);

    useEffect(() => {
        const handleClick = (event) => {
            if (event.target.id === 'year') {
                if (event.pointerType === 'touch') {
                    if (clickAmount % 2 === 0) {
                        // setNum2(null);
                        setNum1(parseInt(event.target.textContent));
                    } else {
                        let num = parseInt(event.target.textContent);
                        setNum2(num);
                        setFilterYear(Math.max(num1, num), Math.min(num1, num));
                    }
                    setClickAmount(clickAmount + 1);
                } else {
                    let origin = parseInt(event.target.textContent);
                    setNum1(origin);

                    const handleMove = (event) => {
                        if (event.target.id === 'year') {
                            let num = parseInt(event.target.textContent);
                            num !== num2 && setNum2(num);
                        }
                    };

                    const handleUp = (event) => {
                        let num = parseInt(event.target.textContent);
                        setNum2(num);
                        setFilterYear({ max: Math.max(origin, num), min: Math.min(origin, num) });
                        document.removeEventListener('mousemove', handleMove);
                        document.removeEventListener('pointerup', handleUp);
                    };

                    document.addEventListener('mousemove', handleMove);
                    document.addEventListener('pointerup', handleUp);
                }

            } else if (event.target.id !== 'container')
                setIsSelected(false);
        }
        document.addEventListener('pointerdown', handleClick);
        return () => {
            document.removeEventListener('pointerdown', handleClick);
        };
    }, [num1, num2, clickAmount, setFilterYear]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && isSelected)
                setIsSelected(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSelected]);

    let elements = [];
    for (let i = yearSpan.max; i >= yearSpan.min; i--)
        elements.push(<button id="year"
            className={`p-2 hover:bg-secondary hover:rounded-md hover:scale-[1.05] hover:font-medium 
                        ${i === Math.min(num1, num2) && 'bg-secondary rounded-br-md'} 
                        ${i === Math.max(num1, num2) && 'bg-secondary rounded-tl-md'} 
                        ${(num2 && (i > Math.min(num1, num2) && i < Math.max(num1, num2))) && 'bg-secondary/50'}`} key={i}>{i}
        </button>)
    const yearList = <div id="container" className="absolute bg-accent p-3 pt-0 z-10 w-max rounded-lg rounded-tl-none mt-0 grid grid-cols-4 md:grid-cols-5 -translate-y-1 shadow-md">{elements}</div>

    return (
        <div>
            <button onClick={() => setIsSelected(!isSelected)} 
                id="container"
                className={'shadow-md rounded-lg bg-accent cursor-pointer text-center text-nowrap flex items-center px-3 py-2'}>
                <span id="container">{Math.min(num1, num2) || yearSpan.min} - {Math.max(num1, num2) || yearSpan.max}</span>
                <DropDown isRotated={isSelected} />
            </button>
            {isSelected && yearList}
        </div>
    );
};
export default YearFilterChip;