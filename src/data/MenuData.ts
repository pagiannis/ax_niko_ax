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
  subcategory: {
    en: string;
    gr: string;
  };
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: { en:"Salads with olive oil", gr:"Σαλάτες με ελαιόλαδο" },
    subcategory: { en: "Salads", gr: "Σαλάτες" },
    items: [
      {
        name: {en: "Tomato and cucmber salad", gr: "Αγγουροντομάτα"},
        price: "€5,00",
      },
      {
        name: {en: "Greek Salad", gr: "Χωριάτικη"},
        price: "€7,50",
      },
      {
        name: {en: "Lettuce", gr: "Μαρούλι"},
        price: "€4,00",
      },
      {
        name: {en: "Boiled greens", gr: "Χόρτα"},
        price: "€5,00",
      },
      {
        name: {en: "Beet roots", gr: "Παντζάρια"},
        price: "€5,00",
      },
      {
        name: {en: "Red sweet peepers", gr: "Πιπεριές Φλωρίνης"},
        price: "€4,00",
      },
      {
        name: {en: "Cabbage salad", gr: "Πολίτικη"},
        price: "€5,00",
      },
      {
        name: {en: "Potato Salad", gr: "Πατατοσαλάτα"},
        price: "€5,00",
      },
      {
        name: {en: "Ach! Salad", gr: "Σαλάτα Αχ!"},
        price: "€7,00",
        description: {en: "(variety of salads)", gr: "(διάφορες σαλάτες)"},
      },
      {
        name: {en: "Rocket", gr: "Ρόκα"},
        price: "€4,00",
      },
      {
        name: {en: "Tuna salad", gr: "Τονοσαλάτα"},
        price: "€7,50",
      },
      {
        name: {en: "Rocket, lettuce, tomato", gr: "Ρόκα, μαρούλι, ντομάτα"},
        price: "€6,00",
        description: {en: "(extra large)", gr: "(γίγας)"},
      },
      {
        name: {en: "Shrimp salad", gr: "Γαριδοσαλάτα"},
        price: "€7,50",
      },
      {
        name: {en: "Extra virgin olive oil 50ml", gr: "Έξτρα ελαιόλαδο 50ml"},
        price: "€2,50",
      }
    ],
  },
  {
    category: { en: "Hot Appetizers", gr: "Ζεστά Ορεκτικά" },
    subcategory: { en: "Appetizers", gr: "Ορεκτικά" },
    items: [
      {
        name: {en: 'Special in the pot "Nikos"', gr: "Πήλινο <<Νίκος>>"},
        price: "€6,00",
        description: {en: "(Potatoes, ham, mushrooms, cheese, sour cream)", gr: "(Πατάτες, ζαμπόν, μανιτάρια, τυρί, κρέμα γάλακτος)"},
      },
      {
        name: {en: "Mushrooms with sour cream", gr: "Μανιτάρια αλά κρεμ"},
        price: "€4,50",
      },
      {
        name: {en: "Mushrooms with onions", gr: "Μανιτάρια σωτέ"},
        price: "€4,50",
      },
      {
        name: {en: '"Plevrotous" grilled mushrooms', gr: "Μανιτάρια πλευρώτους σχάρας"},
        price: "€7,00",
      },
      {
        name: {en: "Potatoes in white cream sauce", gr: "Πατάτες αλά κρεμ"},
        price: "€4,50",
      },
      {
        name: {en: "French fries", gr: "Πατάτες τηγανητές"},
        price: "€3,50",
      },
      {
        name: {en: "Fried zucchini", gr:"Κολοκυθάκια τηγανιτά"},
        price: "€4,00",
      },
      {
        name: {en: "Fried eggplant", gr:"Μελιτζάνες τηγανιτές"},
        price: "€4,50",
      },
      {
        name: {en: "Hot pepper", gr:"Κολοκυθάκια τηγανιτά"},
        price: "€2,00",
      },
      {
        name: {en: "Grilled aubergine Ach!", gr:"Μελιτζάνα Αχ!"},
        price: "€6,00",
        description: {en: "White cheese and tomato", gr: "Ψητή με φέτα, ντομάτα"}
      },
      {
        name: {en: "Rice with fruit of the sea*", gr:"Ριζότο με θαλασσινά*"},
        price: "€8,00",
      },
      {
        name: {en: "Grilled vegetables", gr:"Λαχανικά ψητά"},
        price: "€7,00",
      },
    ],
  },
  {
    category: { en: "Appetizers", gr: "Ορεκτικά" },
    subcategory: { en: "Appetizers", gr: "Ορεκτικά" },
    items: [
      {
        name: {en: "Bread per person", gr: "Ψωμί ανά άτομο"},
        price: "€1,00",
      },
      {
        name: {en: "Spicy cheese dip", gr: "Τυροκαυτερή"},
        price: "€4,00",
      },
      {
        name: {en: "Tzatziki dip", gr: "Τζατζίκι"},
        price: "€4,00",
      },
      {
        name: {en: "Fish roe salad", gr: "Ταραμοσαλάτα"},
        price: "€4,00",
      },
      {
        name: {en: "Crab salad", gr: "Καβουροσαλάτα"},
        price: "€5,00",
      },
      {
        name: {en: "Tzatziki dip, fish roe dip and spicy cheese dip", gr: "Αλοιφές"},
        price: "€6,00",
      }
    ],
  },
  {
    category: { en: "Salty Appetizers", gr: "Αλμυρά Ορεκτικά" },
    subcategory: { en: "Appetizers", gr: "Ορεκτικά" },
    items: [
      {
        name: { en: "Hors d' oeuveres", gr: "Ορντέρβ αλμυρών"},
        price: "€10,00",
      },
      {
        name: { en: "Anchovies", gr: "Αντσούγιες"},
        price: "€5,00",
      },
      {
        name: { en: "Dried salted mackerel", gr: "Τσιροσαλάτα"},
        price: "€5,00",
      },
      {
        name: { en: "Common mackerel", gr: "Σκουπρί"},
        price: "€7,00",
      },
      {
        name: {en: "Anchovies in salt", gr: "Γαύρος μαριναρισμένος"},
        price: "€5,00",
      }
    ],
  },
  {
    category: { en: "Cheeses", gr: "Τυριά" },
    subcategory: { en: "Appetizers", gr: "Ορεκτικά" },
    items: [
      {
        name: { en: "Feta cheese", gr: "Φέτα" },
        price: "€4,50",
      },
      {
        name: { en: "Grilled Feta cheese ", gr: "Φέτα ψητή καυτερή" },
        price: "€4,50",
      },
      {
        name: { en: "Fried Kefalotyri cheese", gr: "Κεφαλουτύρι σαγανάκι" },
        price: "€4,50",
      },
      {
        name: { en: "Cheese croquettes* ", gr: "Κασεροκροκέτες*" },
        price: "€4,00",
      },
      {
        name: { en: "Hot Feta cheese in the pot", gr: "Μπουγιουρντί"},
        price: "€6,00",
      },
      {
        name: { en: "Cheese in th pot", gr: "Τυρί σε πήλινο"},
        price: "€6,00",
        description: { en: "(variety of cheeses)", gr: "(διάφορα τυριά)"}
      },
      {
        name: { en: "Roasted Chaloumi with tomato", gr: "Χαλούμι ψητό με ντομάτα"},
        price: "€7,00",
      },
      {
        name: { en: "Feta cheese wrapped in the pie leave with honey*", gr: "Φέτα σε φύλλο με μέλι*" },
        price: "€7,00",
      }
    ],
  },
  {
    category: { en: "Sea food portion", gr: "Θαλλασινά μερίδες" },
    subcategory: { en: "Sea food / Fish", gr: "Θαλλασινά / Ψάρια" },
    items: [
      {
        name: { en: "Grilled squids*", gr: "Καλαμαράκια ψητά*" },
        price: "€9,50",
      },
      {
        name: { en: "Fried squids*", gr: "Καλαμαράκια τηγανιτά*" },
        price: "€9,50",
      },
      {
        name: { en: "Stuffed squids with cheese*", gr: "Καλαμαράκια γεμιστά με κασέρι*" },
        price: "€10,00",
      },
      {
        name: { en: "Fried mussels", gr: "Μύδια τηγανιτά" },
        price: "€8,00",
      },
      {
        name: { en: "Mussels with sauce lemon", gr: "Μύδια σαγανάκι" },
        price: "€8,50",
      },
      {
        name: { en: "Octopus in vinegar*", gr: "Χταπόδι ξυδάτο*" },
        price: "€14,00",
      },
      {
        name: { en: "Grilled octapus*", gr: "Χταπόδι ψητό*" },
        price: "€14,00",
      },
      {
        name: { en: "Grilled sardines", gr: "Σαρδέλα ψητή" },
        price: "€8,00",
      },
      {
        name: { en: "Fried anchovies", gr: "Γαύρος τηγανιτός" },
        price: "€8,00",
      },
      {
        name: { en: "Anchovies in white sauce", gr: "Γαύρος αχνιστός" },
        price: "€8,50",
      },
      {
        name: { en: "Tope with sauce*", gr: "Γαλέος σαγανάκι*" },
        price: "€8,50",
      },
      {
        name: { en: "Fried Tope*", gr: "Γαλέος τηγανιτός*" },
        price: "€8,50",
      },
      {
        name: { en: "Codfish*", gr: "Μπακαλίαρος υγρανάλατος*" },
        price: "€11,00",
      },
      {
        name: { en: "Shrimps with tomato sauce 300gr*", gr: "Γαρίδα σαγανάκι 300γραμ.*" },
        price: "€13,00",
      },
      {
        name: { en: "Fried shrimps 300gr*", gr: "Γαρίδα τηγανιτή 300γρ.*" },
        price: "€13,00",
      },
      {
        name: { en: "Shrimps with spaghetti*", gr: "Γαριδομακαρονάδα*" },
        price: "€14,00",
      },
      {
        name: { en: "Grilled shrimps 300gr*", gr: "Γαρίδα σχάρας 300γραμ.*" },
        price: "€13,00",
      },
      {
        name: { en: "Mix sea food*", gr: "Μιξ θαλασσινών*" },
        price: "€22,00",
        description: { en: "(squids, mussels, anchovies, shrimps)*", gr: "(καλαμάρια, μύδια, γαύρος, γαρίδα)*"}
      },
    ],
  },
  {
    category: { en: "Fish per kilo", gr: "Ψάρια με το κιλό" },
    subcategory: { en: "Sea food / Fish", gr: "Θαλλασινά / Ψάρια" },
    items: [
      {
        name: { en: "Fish of the day", gr: "Ψάρια ημέρας" },
        price: "€50,00",
      },
      {
        name: { en: "Dorado 300gr", gr: "Τσιπούρες 300γραμ." },
        price: "€15,00",
      },
      {
        name: { en: "Bass fish 300gr", gr: "Λαβράκια 300γραμ." },
        price: "€15,00",
      },
      {
        name: { en: "Red Mullet 300gr", gr: "Κουτσομούρες 300γραμ." },
        price: "€15,00",
      },
      {
        name: { en: "Cod fish 300gr", gr: "Μπακαλιαράκια 300γραμ." },
        price: "€15,00",
      },
    ],
  },
  {
    category: { en: "Meat", gr: "Κρεατικά" },
    subcategory: { en: "Meat", gr: "Κρεατικά" },
    items: [
      {
        name: { en: "Skewers pork 3 pieces", gr: "Σουβλάκια χοιρινά 3 τεμ." },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Pork chop", gr: "Μπριζόλα χοιρινή" },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Pork snitzel", gr: "Σνίτσελ χοιρινό" },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Snitzel with spicy sauce", gr: "Σνίτσελ με τσιγγάνικη σάλτσα" },
        price: "€10,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Snitzel with mushrooms and white sour cream", gr: "Σνίτσελ με μανιτάρια αλά κρεμ" },
        price: "€10,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Pork ribs", gr: "Πανσέτα" },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Burger pork", gr: "Μπιφτέκι" },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Stuffed beef burger pork", gr: "Μπιφτέκι γεμιστό" },
        price: "€8,50",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Chicken fillet", gr: "Κοτόπουλο φιλέτο" },
        price: "€8,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Chicken with mushrooms and white sour cream", gr: "Κοτόπουλο με μανιτάρια αλά κρέμ" },
        price: "€10,00",
        description: {en: "with french fries & salad", gr: "με πατάτες τηγανητές & σαλάτα"}
      },
      {
        name: { en: "Mixed grill for 3 people", gr: "Ποικιλία κρεατικών για 3 άτομα" },
        price: "€24,00",
      },
    ],
  },
  {
    category: { en: "Refreshments", gr: "Αναψυκτικά" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Coca - Cola 250ml" , gr: "Κόκα - Κόλα 250ml"},
        price: "€2,50",
      },
      {
        name: { en: "Sprite 250ml" , gr: "Σπράιτ 250ml"},
        price: "€2,50",
      },
      {
        name: { en: "Orangeade 250ml" , gr: "Πορτοκαλάδα 250ml"},
        price: "€2,50",
      },
      {
        name: { en: "Soda water 250ml" , gr: "Σόδα 250ml"},
        price: "€2,50",
      },
      {
        name: { en: "Table water 1L" , gr: "Νερό εμφιαλωμένο 1L"},
        price: "€1,50",
      },
    ],
  },
  {
    category: { en: "Beers", gr: "Μπύρες" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Amstel 500ml" , gr: "Άμστελ 500ml"},
        price: "€4,00",
      },
      {
        name: { en: "Kaiser 500ml" , gr: "Κάιζερ 500ml"},
        price: "€4,00",
      },
      {
        name: { en: "Mythos 500ml" , gr: "Μύθος 500ml"},
        price: "€4,00",
      },
      {
        name: { en: "Fix 500ml" , gr: "Φιξ 500ml"},
        price: "€4,00",
      },
      {
        name: { en: "Alfa 500ml" , gr: "Άλφα 500ml"},
        price: "€4,00",
      },
    ],
  },
  {
    category: { en: "Retsines", gr: "Ρετσίνες" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Malamatina 500ml" , gr: "Μαλαματίνα 500ml"},
        price: "€4,00",
      },
      {
        name: { en: "Vasiliki 500ml" , gr: "Βασιλική 500ml"},
        price: "€6,00",
      },
      {
        name: { en: "Georgiadi 500ml" , gr: "Γεωργιάδη 500ml"},
        price: "€4,00",
      },
    ],
  },
  {
    category: { en: "Barrel wine", gr: "Βαρελίσια κρασιά" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Demi sweet red wine 500ml" , gr: "Ημίγλυκο κόκκινο 500ml"},
        price: "€5,00",
      },
      {
        name: { en: "Dry red 500ml" , gr: "Ξηρό κόκκινο 500ml"},
        price: "€5,00",
      },
      {
        name: { en: "White 500ml" , gr: "Λευκό 500ml"},
        price: "€5,00",
      },
    ],
  },
  {
    category: { en: "Wine", gr: "Κρασιά" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Moschofilero 750ml" , gr: "Μοσχοφίλερο 750ml"},
        price: "€14,00",
      },
      {
        name: { en: "Vivlia Chora 750ml" , gr: "Βιβλία Χώρα 750ml"},
        price: "€25,00",
      },
    ],
  },
  {
    category: { en: "Ouzo", gr: "Ούζο" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Varvagiannis 200ml" , gr: "Βαρβαγιάννης 200ml"},
        price: "€8,00",
      },
      {
        name: { en: "Magia 200ml" , gr: "Μαγεία 200ml"},
        price: "€8,00",
      },
      {
        name: { en: "Mitilini MINI 200ml" , gr: "Μυτιλήνη ΜΙΝΙ 200ml"},
        price: "€8,00",
      },
      {
        name: { en: "Plomari 200ml" , gr: "Πλωμάρι 200ml"},
        price: "€8,00",
      },
    ],
  },
  {
    category: { en: "Tsipouro", gr: "Τσίπουρο" },
    subcategory: { en: "Drinks", gr: "Ποτά" },
    items: [
      {
        name: { en: "Babatzim with anise 200ml" , gr: "Μπαμπατζίμ με γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Babatzim without anise 200ml" , gr: "Μπαμπατζίμ χωρίς γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Apostolaki with anise 200ml" , gr: "Αποστολάκη με γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Apostolaki without anise 200ml" , gr: "Αποστολάκη χωρίς γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Idoniko with anise 200ml" , gr: "Ηδωνικό με γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Idoniko without anise 200ml" , gr: "Ηδωνικό χωρίς γλυκάνισο 200ml"},
        price: "€9,00",
      },
      {
        name: { en: "Tsipouro homemade with anise 250ml" , gr: "Τσίπουρο χύμα με γλυκάνισο 250ml"},
        price: "€7,00",
      },
      {
        name: { en: "Tsipouro homemade without anise 250ml" , gr: "Τσίπουρο χύμα χωρίς γλυκάνισο 250ml"},
        price: "€7,00",
      },
      {
        name: { en: "Tsipouro homemade with anise, glass 50ml" , gr: "Ηδωνικό με γλυκάνισο, ποτήρι 50ml"},
        price: "€3,00",
      },
      {
        name: { en: "Tsipouro homemade without anise, glass 50ml" , gr: "Αποστολάκη χωρίς γλυκάνισο, ποτήρι 50ml"},
        price: "€3,00",
      },
    ],
  },

];
