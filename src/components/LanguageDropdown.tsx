import { useState } from "react";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState<"en" | "gr">("gr");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="absolute top-2 right-4">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-9 h-9 rounded-full overflow-hidden border shadow bg-white"
        >
          {language === "en" ? "🇬🇷" : "🇬🇧"}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border shadow rounded w-24 z-50">
            <button
              onClick={() => {
                setLanguage("gr");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 w-full p-2 hover:bg-gray-100"
            >
              🇬🇷
            </button>
            <button
              onClick={() => {
                setLanguage("en");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 w-full p-2 hover:bg-gray-100"
            >
              🇬🇧
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
