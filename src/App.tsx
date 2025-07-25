import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import MenuSection from "./components/MenuSection";
import { menuData, type MenuCategory } from "./data/MenuData";
import LanguageDropdown from "./components/LanguageDropdown";
import FrozenFooter from "./components/FrozenFooter";

function App() {
  const [filter, setFilter] = useState("All");
  const [language, setLanguage] = useState<
    "en" | "gr" | "de" | "sr" | "bg" | "ro"
  >("gr");

  const filteredMenu: MenuCategory[] =
    filter === "All"
      ? menuData
      : menuData.filter(
          (section: MenuCategory) => section.subcategory.en === filter
        );

  return (
    <div className="min-h-screen relative bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <picture>
          <source media="(min-width: 768px)" srcSet="/bg-desktop.jpeg" />
          <img
            src="/bg-mobile.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 h-screen overflow-y-auto px-4 pt-13 pb-40 md:p-20">
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        <Header />
        <FilterBar selected={filter} onSelect={setFilter} language={language} />
        {filteredMenu.map((section, idx) => (
          <MenuSection
            key={idx}
            title={section.category[language]}
            items={section.items}
            language={language}
          />
        ))}
        <FrozenFooter language={language} />
      </div>
    </div>
  );
}

export default App;
