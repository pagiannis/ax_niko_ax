import type { MenuItem } from "../data/MenuData";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

const MenuSection = ({ title, items }: MenuSectionProps) => (
  <div className="my-6 font-mono">
    <h3 className="text-xl font-bold text-sky-950 mb-3">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex justify-between items-start border-b pb-2"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            {item.description && (
              <p className="text-sm text-gray-600">{item.description}</p>
            )}
          </div>
          <span className="text-sky-950 font-bold">{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuSection;
