import { useTranslation } from 'react-i18next'

function Chip({ text, isSelected, filterCategory, setFilterCategory }) {
  const { t } = useTranslation();

  return (
    <button onClick={() => filterCategory === text ? setFilterCategory(null) : setFilterCategory(text)}
      className={`shadow-md bg-accent text-center text-nowrap rounded-lg px-3 py-2 h-10 flex items-center hover:contrast-[0.9] hover:scale-[1.03] ${isSelected && 'pr-2 bg-secondary border-none'}`}>
      <span>{t(text)}</span>
      {isSelected && (
        <svg className="h-6 opacity-75 pl-1"
          fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
};
export default Chip;