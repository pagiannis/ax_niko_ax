type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
  language: "en" | "gr" | "de" | "sr" | "bg" | "ro";
};

const FilterBar = ({ selected, onSelect, language }: FilterBarProps) => {
  const categories = [
    { en: "All", gr: "Όλα", de: "Alle", ro: "Toate", bg: "Всички", sr: "Све" },
    {
      en: "Salads",
      gr: "Σαλάτες",
      de: "Salate",
      ro: "Salate",
      bg: "Салати",
      sr: "Салате",
    },
    {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      ro: "Aperitive",
      bg: "Предястия",
      sr: "Предјела",
    },
    {
      en: "Sea food / Fish",
      gr: "Θαλασσινά / Ψάρια",
      de: "Meeresfrüchte / Fisch",
      ro: "Fructe de mare / Pește",
      bg: "Морска храна / Риба",
      sr: "Морски плодови / Риба",
    },
    {
      en: "Meat",
      gr: "Κρεατικά",
      de: "Fleisch",
      ro: "Carne",
      bg: "Месо",
      sr: "Месо",
    },
    {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      ro: "Băuturi",
      bg: "Напитки",
      sr: "Пића",
    },
  ];

  return (
    <nav className="w-full my-6 overflow-hidden">
      <div className="flex overflow-x-auto no-scrollbar snap-x scroll-smooth">
        {/* 
          - On mobile: 'w-max' ensures it's as wide as the content.
          - On desktop: 'md:w-full md:justify-center' centers it perfectly.
        */}
        <div className="flex items-center w-max md:w-full md:justify-center gap-2 md:gap-4">
          {/* THE STARTING SPACER (Mobile only) */}
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />

          {categories.map((cat) => {
            const isActive = selected === cat.en;
            return (
              <button
                key={cat.en}
                onClick={() => onSelect(cat.en)}
                className={`
                  flex-shrink-0 px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium whitespace-nowrap
                  ${
                    isActive
                      ? "bg-sky-950 text-white border-sky-950 shadow-md scale-105"
                      : "bg-white/90 backdrop-blur-sm text-sky-950 border-sky-950 hover:border-sky-950"
                  }
                  active:scale-95
                `}
              >
                {cat[language]}
              </button>
            );
          })}

          {/* Ensures the last button doesn't hit the right edge. */}
          <div className="flex-shrink-0 w-1 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
};

export default FilterBar;
