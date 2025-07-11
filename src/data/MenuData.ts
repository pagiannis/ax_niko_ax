export type MenuItem = {
  name: {
    en: string;
    gr: string;
  };
  price: string;
  description?: {
    en: string;
    gr: string;
  };
};

export type MenuCategory = {
  category: {
    en: string;
    gr: string;
  };
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: { en:"Salads", gr:"Σαλάτες" },
    items: [
      {
        name: {en: "Greek Salad", gr: "Χωριάτικη Σαλάτα"},
        price: "€6",
        description: {en: "Tomato, cucumber, feta, onion, olive oil", gr: "Ντομάτα, αγγούρι, φέτα, κρεμμύδι, ελαιόλαδο"},
      },
    ],
  },
  {
    category: { en: "Starters", gr: "Ορεκτικά" },
    items: [
      {
        name: {en: "Saganaki Cheese", gr: "Σαγανάκι Κεφαλοτύρι"},
        price: "€7",
        description: {en:"Greek cheese fried", gr:"Ελληνικό τυρί τηγανητό"},
      },
      {
        name: {en: "Fried Zucchini", gr: "Τηγανητά Κολοκυθάκια"},
        price: "€7",
        description: {en: "Crispy zucchini slices with tzatziki", gr: "Τραγανά κολοκυθάκια με τζατζίκι"},
      },
    ],
  },
  {
    category: { en: "Fish", gr: "Ψάρια" },
    items: [
      {
        name: { en: "Grilled Sea Bream", gr: "Γαρίδα Σαγανάκι" },
        price: "€14",
        description: {en: "Sea bream with lemon", gr: "Γαρίδα σαγανάκι με λεμόνι."},
      },
      {
        name: { en: "Fried Calamari", gr: "Τηγανητά Καλαμάρια" },
        price: "€10",
        description: { en: "Golden and crispy, served with lemon", gr: "Τραγανά, σερβιρισμένα με λεμόνι" },
      },
    ],
  },
  
  {
    category: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: {en: "Ouzo" , gr: "Ούζο"},
        price: "€4",
        description: {en: "Traditional Greek anise aperitif", gr: "Παραδοσιακό ελληνικό ούζο με γλυκάνισο"},
      },
      {
        name: {en: "Tsipouro", gr: "Τσίπουρο"},
        price: "€4",
        description: {en: "Strong spirit from grape pomace", gr: ""},
      },
      {
        name: {en: "Alpha Beer", gr: "Μπύρα Άλφα"},
        price: "€3",
        description: {en: "Popular Greek lager", gr:""},
      }
    ],
  },
];
