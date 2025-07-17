type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
  language: "en" | "gr";
};

const FilterBar = ({ selected, onSelect, language }: FilterBarProps) => {
  const categories = [
    { en: "All", gr: "Όλα" },
    { en: "Salads with olive oil", gr: "Σαλάτες με ελαιόλαδο" },
    { en: "Hot Appetizers", gr: "Ζεστά Ορεκτικά" },
    { en: "Appetizers", gr: "Ορεκτικά" },
    { en: "Salty Appetizers", gr: "Αλμυρά Ορεκτικά" },
    { en: "Cheeses", gr: "Τυριά" },
    { en: "Sea food portion", gr: "Θαλλασινά μερίδες" },
    { en: "Fish per kilo", gr: "Ψάρια με το κιλό" },
    { en: "Meat", gr: "Κρεατικά" },
    { en: "Refreshments", gr: "Αναψυκτικά" },
    { en: "Beers", gr: "Μπύρες" },
    { en: "Retsines", gr: "Ρετσίνες" },
    { en: "Barrel wine", gr: "Βαρελίσια κρασιά" },
    { en: "Wine", gr: "Κρασιά" },
    { en: "Ouzo", gr: "Ούζο" },
    { en: "Tsipouro", gr: "Τσίπουρο" },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-2 my-4 font-noto-serif">
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
