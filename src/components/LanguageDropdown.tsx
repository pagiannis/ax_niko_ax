import { useState, useRef, useEffect } from "react";

type Language = "en" | "gr";

type Props = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageDropdown = ({ language, setLanguage }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div ref={dropdownRef} className="absolute top-2 right-3">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-11 h-11 p-2 md:w-13 md:h-13 rounded-full overflow-hidden border shadow bg-white cursor-pointer hover:bg-gray-100"
        >
          {language === "gr" ? (
            <span className="fi fi-gr"></span>
          ) : (
            <span className="fi fi-gb"></span>
          )}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border shadow rounded w-24 z-50">
            <button
              onClick={() => {
                setLanguage("gr");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 w-full p-4 cursor-pointer hover:bg-gray-100"
            >
              <span className="fi fi-gr"></span>
            </button>
            <button
              onClick={() => {
                setLanguage("en");
                setDropdownOpen(false);
              }}
              className="flex items-center gap-2 w-full p-4 cursor-pointer hover:bg-gray-100"
            >
              <span className="fi fi-gb"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
