type FilterBarProps = {
  selected: string;
  onSelect: (category: string) => void;
};

const FilterBar = ({ selected, onSelect }: FilterBarProps) => {
  const categories = ["All", "Salads", "Starters", "Fish", "Drinks"];

  return (
    <div className="flex justify-center flex-wrap gap-2 my-4 font-mono">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-3xl border cursor-pointer ${
            selected === cat
              ? "bg-sky-950 text-white"
              : "bg-white text-sky-950 border-sky-950"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
