import type { MenuItem } from "../data/MenuData";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  language: "en" | "gr" | "de" | "sr" | "bg" | "ro";
};

const MenuSection = ({ title, items, language }: MenuSectionProps) => (
  <div className="px-4 mt-12 mb-10">
    <h3 className="text-2xl font-bold font-serif text-sky-950 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex justify-between items-start pb-2 last:border-0"
        >
          <div>
            <p className="text-base font-medium font-noto-serif">
              {item.name[language]}
            </p>
            {item.description && (
              <p className="text-sm text-gray-600 font-noto-serif">
                {item.description[language]}
              </p>
            )}
            {language !== "gr" && (
              <p className="text-xs text-gray-500 font-noto-serif">
                {item.name["gr"]}
              </p>
            )}
          </div>
          <span className="text-base font-medium font-noto-serif">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuSection;
