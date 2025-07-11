import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import MenuSection from "./components/MenuSection";
import { menuData, type MenuCategory } from "./data/MenuData";
import LanguageDropdown from "./components/LanguageDropdown";

function App() {
  const [filter, setFilter] = useState("All");
  const [language, setLanguage] = useState<"en" | "gr">("gr");

  const filteredMenu: MenuCategory[] =
    filter === "All"
      ? menuData
      : menuData.filter(
          (section: MenuCategory) => section.category.en === filter
        );

  return (
    <div className="min-h-screen bg-fixed md:bg-cover bg-center bg-[url('/bg-desktop.jpeg')] p-4 md:p-20 relative">
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative z-10">
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
      </div>
    </div>
  );
}

export default App;
