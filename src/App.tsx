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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image layer */}
      <div className="fixed inset-0 -z-10">
        <picture>
          <source media="(min-width: 768px)" srcSet="/bg-desktop.jpeg" />
          <img
            src="/bg-mobile.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-none z-0" />

      {/* Main content */}
      <div className="relative z-10 p-4 md:p-20">
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
