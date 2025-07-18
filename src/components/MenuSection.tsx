import type { MenuItem } from "../data/MenuData";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  language: "en" | "gr" | "de" | "sr" | "bg" | "ro";
};

const MenuSection = ({ title, items, language }: MenuSectionProps) => (
  <div className="mt-15 mb-10">
    <h3 className="text-2xl font-extrabold font-serif text-sky-950 mb-3">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex justify-between items-start border-b border-gray-400 pb-1 last:border-0"
        >
          <div>
            <p className="text-base font-sans">{item.name[language]}</p>
            {item.description && (
              <p className="text-base text-gray-600">
                {item.description[language]}
              </p>
            )}
          </div>
          <span className="text-sky-950 font-bold">{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuSection;
