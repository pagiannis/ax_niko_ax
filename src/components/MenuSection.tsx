import type { MenuItem } from "../data/MenuData";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  language: "en" | "gr";
};

const MenuSection = ({ title, items, language }: MenuSectionProps) => (
  <div className="mt-3 mb-18 font-noto-serif ">
    <h3 className="text-xl font-bold text-sky-950 mb-3">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex justify-between items-start border-b pb-2"
        >
          <div>
            <p className="font-bold">{item.name[language]}</p>
            {item.description && (
              <p className="text-sm text-gray-600 font-bold">
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
