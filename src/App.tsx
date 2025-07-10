import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import MenuSection from "./components/MenuSection";
import { menuData } from "./data/MenuData";
import LanguageDropdown from "./components/LanguageDropdown";

function App() {
  const [filter, setFilter] = useState("All");

  const filteredMenu =
    filter === "All"
      ? menuData
      : menuData.filter((section) => section.category === filter);

  return (
    <div className="min-h-screen bg-fixed md:bg-cover bg-center bg-[url('/bg-desktop.jpeg')] p-4 md:p-20 relative">
      <div className="absolute inset-0 bg-white opacity-70"></div>
      <div className="relative z-10">
        <LanguageDropdown />

        <Header />
        <FilterBar selected={filter} onSelect={setFilter} />
        {filteredMenu.map((section, idx) => (
          <MenuSection
            key={idx}
            title={section.category}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
