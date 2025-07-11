type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
  language: "en" | "gr";
};

const FilterBar = ({ selected, onSelect, language }: FilterBarProps) => {
  const categories = [
    { en: "All", gr: "Όλα" },
    { en: "Salads", gr: "Σαλάτες" },
    { en: "Starters", gr: "Ορεκτικά" },
    { en: "Fish", gr: "Ψάρια" },
    { en: "Drinks", gr: "Ποτά" },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-2 my-4 font-mono">
      {categories.map((cat) => (
        <button
          key={cat.en}
          className={`px-4 py-2 rounded-3xl border cursor-pointer ${
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
