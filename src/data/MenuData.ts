export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: "Fish",
    items: [
      {
        name: "Grilled Sea Bream",
        price: "€14",
        description: "Freshly caught, with lemon & herbs",
      },
      {
        name: "Fried Calamari",
        price: "€10",
        description: "Golden and crispy, served with lemon",
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        name: "Greek Salad",
        price: "€6",
        description: "Tomato, cucumber, feta, onion, olive oil",
      },
    ],
  },
  {
    category: "Starters",
    items: [
      {
        name: "Saganaki Cheese",
        price: "€7",
        description: "Greek cheese fried to perfection",
      },
      {
        name: "Fried Zucchini",
        price: "€7",
        description: "Crispy zucchini slices with tzatziki",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Ouzo",
        price: "€4",
        description: "Traditional Greek anise aperitif",
      },
      {
        name: "Tsipouro",
        price: "€4",
        description: "Strong spirit from grape pomace",
      },
      {
        name: "Alpha Beer",
        price: "€3",
        description: "Popular Greek lager",
      }
    ],
  },
];
