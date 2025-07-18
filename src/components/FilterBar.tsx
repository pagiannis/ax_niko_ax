type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
  language: "en" | "gr" | "de" | "sr" | "bg" | "ro";
};

const FilterBar = ({ selected, onSelect, language }: FilterBarProps) => {
  const categories = [
    {
      en: "All",
      gr: "Όλα",
      de: "Alle",
      ro: "Toate",
      bg: "Всички",
      sr: "Све",
    },
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
    <div className="flex justify-center flex-wrap gap-1 min-[400px]:gap-2 my-4 font-sans text-sm md:text-base">
      {categories.map((cat) => (
        <button
          key={cat.en}
          className={`px-2 min-[360px]:px-4 py-2 rounded-3xl border cursor-pointer ${
            selected === cat.en
              ? "bg-sky-950 text-white"
              : "bg-white text-sky-950 border-sky-950"
          }`}
          onClick={() => onSelect(cat.en)}
        >
          {cat[language]}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
