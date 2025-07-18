import { useState, useRef, useEffect } from "react";

type Language = "en" | "gr" | "de" | "sr" | "bg" | "ro";

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

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: "en", flag: "gb", label: "English" },
    { code: "gr", flag: "gr", label: "Ελληνικά" },
    { code: "de", flag: "de", label: "Deutsch" },
    { code: "ro", flag: "ro", label: "Română" },
    { code: "bg", flag: "bg", label: "Български" },
    { code: "sr", flag: "rs", label: "Српски" },
  ];

  const selected = languages.find((l) => l.code === language);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-15 right-5 md:top-25 md:right-25"
    >
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-11 h-11 p-2 md:w-13 md:h-13 rounded-full overflow-hidden border shadow bg-white cursor-pointer hover:bg-gray-200"
        > 
          <span className={`fi fi-${selected?.flag}`}></span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-gray-100 border shadow rounded w-25 z-50">
            {languages.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setDropdownOpen(false);
                }}
                className=" items-center gap-2 w-full p-2 cursor-pointer hover:bg-gray-200"
              >
                <span className={`fi fi-${flag}`}></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
