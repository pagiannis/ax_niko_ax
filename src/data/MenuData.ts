export type MenuItem = {
  name: {
    en: string;
    gr: string;
    de: string;
    sr: string;
    bg: string;
    ro: string;
  };
  price: string;
  description?: {
    en: string;
    gr: string;
    de: string;
    sr: string;
    bg: string;
    ro: string;
  };
};

export type MenuCategory = {
  category: {
    en: string;
    gr: string;
    de: string;
    sr: string;
    bg: string;
    ro: string;
  };
  subcategory: {
    en: string;
    gr: string;
    de: string;
    sr: string;
    bg: string;
    ro: string;
  };
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: {
    "en": "Salads with olive oil",
    "gr": "Σαλάτες με ελαιόλαδο",
    "de": "Salate mit Olivenöl",
    "sr": "Салате са маслиновим уљем",
    "bg": "Салати с маслиново масло",
    "ro": "Salate cu ulei de măsline"
    },
    subcategory: {
    "en": "Salads",
    "gr": "Σαλάτες",
    "de": "Salate",
    "sr": "Салате",
    "bg": "Салати",
    "ro": "Salate"
    },
    items: [
      {
      name: {
        "en": "Tomato and cucmber salad",
        "gr": "Αγγουροντομάτα",
        "de": "Tomaten-Gurkensalat",
        "sr": "Салата од парадајз и краставац",
        "bg": "Салата с домати и краставици",
        "ro": "Salată de roșii și castraveți"
      },
      price: "€5,00"
    },
    {
      name: {
        "en": "Greek Salad",
        "gr": "Χωριάτικη",
        "de": "Griechischer Salat",
        "sr": "Грчка салата",
        "bg": "Гръцка салата",
        "ro": "Salată grecească"
      },
      price: "€7,50"
    },
    {
      name: {
        "en": "Lettuce",
        "gr": "Μαρούλι",
        "de": "Salat (Kopfsalat)",
        "sr": "Зелена салата",
        "bg": "Маруля",
        "ro": "Salată verde"
      },
      price: "€4,00"
    },
    {
      name: {
        "en": "Boiled greens",
        "gr": "Χόρτα",
        "de": "Gekochtes Grünzeug",
        "sr": "Кувано зелено поврће",
        "bg": "Задушени зелении",
        "ro": "Legume fierte"
      },
      price: "€5,00"
    },
    {
      name: {
        "en": "Beet roots",
        "gr": "Παντζάρια",
        "de": "Rote Beete",
        "sr": "Цвекла",
        "bg": "Цвекло",
        "ro": "Sfeclă roșie"
      },
      price: "€5,00"
    },
    {
      name: {
        "en": "Red sweet peepers",
        "gr": "Πιπεριές Φλωρίνης",
        "de": "Rote süße Paprika",
        "sr": "Црвене слатке паприке (Флорина)",
        "bg": "Червени сладки пиперки (Флорина)",
        "ro": "Ardei dulci roșii (Florina)"
      },
      price: "€4,00"
    },
    {
      name: {
        "en": "Cabbage salad",
        "gr": "Πολίτικη",
        "de": "Kohlsalat",
        "sr": "Салата од купус",
        "bg": "Зелева салата",
        "ro": "Salată de varză"
      },
      price: "€5,00"
    },
    {
      name: {
        "en": "Potato Salad",
        "gr": "Πατατοσαλάτα",
        "de": "Kartoffelsalat",
        "sr": "Пиринач салата",
        "bg": "Картофена салата",
        "ro": "Salată de cartofi"
      },
      price: "€5,00"
    },
    {
      name: {
        "en": "Ach! Salad",
        "gr": "Σαλάτα Αχ!",
        "de": "Ach! Salat",
        "sr": "Ах! Салата",
        "bg": "Ах! Салата",
        "ro": "Salată Ah!"
      },
      price: "€7,00",
      description: {
        "en": "(variety of salads)",
        "gr": "(διάφορες σαλάτες)",
        "de": "(Verschiedene Salate)",
        "sr": "(Разне салате)",
        "bg": "(Разнообразие от салати)",
        "ro": "(varietate de salate)"
      }
    },
    {
      name: {
        "en": "Rocket",
        "gr": "Ρόκα",
        "de": "Rucola",
        "sr": "Рукола",
        "bg": "Рукола",
        "ro": "Rucola"
      },
      price: "€4,00"
    },
    {
      name: {
        "en": "Tuna salad",
        "gr": "Τονοσαλάτα",
        "de": "Thunfischsalat",
        "sr": "Салата од туна",
        "bg": "Салата с риба тон",
        "ro": "Salată cu ton"
      },
      price: "€7,50"
    },
    {
      name: {
        "en": "Rocket, lettuce, tomato",
        "gr": "Ρόκα, μαρούλι, ντομάτα",
        "de": "Rucola, Salat, Tomate",
        "sr": "Рукола, зелена салата, парадајз",
        "bg": "Рукола, маруля, домат",
        "ro": "Rucola, salată verde, roșii"
      },
      price: "€6,00",
      description: {
        "en": "(extra large)",
        "gr": "(γίγας)",
        "de": "(extra groß)",
        "sr": "(екстра велико)",
        "bg": "(екстра голямо)",
        "ro": "(extra mare)"
      }
    },
    {
      name: {
        "en": "Shrimp salad",
        "gr": "Γαριδοσαλάτα",
        "de": "Garnelensalat",
        "sr": "Салата од шкампи",
        "bg": "Салата с скариди",
        "ro": "Salată de creveți"
      },
      price: "€7,50"
    },
    {
      name: {
        "en": "Extra virgin olive oil 50ml",
        "gr": "Έξτρα ελαιόλαδο 50ml",
        "de": "Extra natives Olivenöl 50ml",
        "sr": "Екстра девичанско маслиново уље 50мл",
        "bg": "Екстра върджин зехтин 50мл",
        "ro": "Ulei de măsline extravirgin 50ml"
      },
      price: "€2,50"
    }
    ],
  },
  {
    category: {
      en: "Hot Appetizers",
      gr: "Ζεστά Ορεκτικά",
      de: "Warme Vorspeisen",
      sr: "Топла предјела",
      bg: "Топли предястия",
      ro: "Aperitive calde"
    },
    subcategory: {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      sr: "Предјела",
      bg: "Предястия",
      ro: "Aperitive"
    },
    items: [
      {
        name: {
          en: 'Special in the pot "Nikos"',
          gr: 'Πήλινο <<Νίκος>>',
          de: 'Spezial im Topf "Nikos"',
          sr: 'Специјално у лонцу "Никос"',
          bg: 'Специалитет в гърне "Никос"',
          ro: 'Special în oală „Nikos”'
        },
        price: "€6,00",
        description: {
          en: "(Potatoes, ham, mushrooms, cheese, sour cream)",
          gr: "(Πατάτες, ζαμπόν, μανιτάρια, τυρί, κρέμα γάλακτος)",
          de: "(Kartoffeln, Schinken, Pilze, Käse, saure Sahne)",
          sr: "(Кромпир, шунка, печурке, сир, кисела павлака)",
          bg: "(Картофи, шунка, гъби, сирене, сметана)",
          ro: "(Cartofi, șuncă, ciuperci, brânză, smântână)"
        }
      },
      {
        name: {
          en: "Mushrooms with sour cream",
          gr: "Μανιτάρια αλά κρεμ",
          de: "Pilze mit Sauerrahm",
          sr: "Печурке са киселом павлаком",
          bg: "Гъби със заквасена сметана",
          ro: "Ciuperci cu smântână"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "Mushrooms with onions",
          gr: "Μανιτάρια σωτέ",
          de: "Pilze mit Zwiebeln",
          sr: "Печурке са луком",
          bg: "Гъби с лук",
          ro: "Ciuperci cu ceapă"
        },
        price: "€4,50"
      },
      {
        name: {
          en: '"Plevrotous" grilled mushrooms',
          gr: "Μανιτάρια πλευρώτους σχάρας",
          de: 'Gegrillte "Pleurotus"-Pilze',
          sr: 'Печурке "Плевротус" на роштиљу',
          bg: 'Печени гъби "Плевротус"',
          ro: 'Ciuperci "Pleurotus" la grătar'
        },
        price: "€7,00"
      },
      {
        name: {
          en: "Potatoes in white cream sauce",
          gr: "Πατάτες αλά κρεμ",
          de: "Kartoffeln in Weißer Cremesauce",
          sr: "Кромпир у белом крем сосу",
          bg: "Картофи в бял крем сос",
          ro: "Cartofi în sos alb de smântână"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "French fries",
          gr: "Πατάτες τηγανητές",
          de: "Pommes Frites",
          sr: "Похован кромпир",
          bg: "Пържени картофи",
          ro: "Cartofi prăjiți"
        },
        price: "€3,50"
      },
      {
        name: {
          en: "Fried zucchini",
          gr: "Κολοκυθάκια τηγανιτά",
          de: "Gebratene Zucchini",
          sr: "Пржене тиквице",
          bg: "Пържени тиквички",
          ro: "Dovlecei prăjiți"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Fried eggplant",
          gr: "Μελιτζάνες τηγανιτές",
          de: "Gebratene Auberginen",
          sr: "Пржене патлиџане",
          bg: "Пържени патладжани",
          ro: "Vinete prăjite"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "Hot pepper",
          gr: "Πιπεριά καυτερή",
          de: "Scharfe Paprika",
          sr: "Ljuta paprika",
          bg: "Лют пипер",
          ro: "Ardei iute"
        },
        price: "€2,00"
      },
      {
        name: {
          en: "Grilled aubergine Ach!",
          gr: "Μελιτζάνα Αχ!",
          de: "Gegrillte Aubergine Ach!",
          sr: "Патлиџан Ах!",
          bg: "Патладжан Ах!",
          ro: "Vânătă la grătar Ah!"
        },
        price: "€6,00",
        description: {
          en: "White cheese and tomato",
          gr: "Ψητή με φέτα, ντομάτα",
          de: "Mit Weißkäse und Tomate",
          sr: "Печен са белим сиром и парадајзом",
          bg: "Печен с бяло сирене и домат",
          ro: "La grătar cu brânză albă și roșii"
        }
      },
      {
        name: {
          en: "Rice with fruit of the sea*",
          gr: "Ριζότο με θαλασσινά*",
          de: "Reis mit Meeresfrüchten*",
          sr: "Пиринач са морским плодовима*",
          bg: "Ориз с морски дарове*",
          ro: "Orez cu fructe de mare*"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Grilled vegetables",
          gr: "Λαχανικά ψητά",
          de: "Gegrilltes Gemüse",
          sr: "Печено поврће",
          bg: "Печени зеленчуци",
          ro: "Legume la grătar"
        },
        price: "€7,00"
      }
    ]
  },
  {
    category: {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      sr: "Предјела",
      bg: "Предястия",
      ro: "Aperitive"
    },
    subcategory: {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      sr: "Предјела",
      bg: "Предястия",
      ro: "Aperitive"
    },
    items: [
      {
        name: {
          en: "Bread per person",
          gr: "Ψωμί ανά άτομο",
          de: "Brot pro Person",
          sr: "Хлеб по особи",
          bg: "Хляб на човек",
          ro: "Pâine per persoană"
        },
        price: "€1,00"
      },
      {
        name: {
          en: "Spicy cheese dip",
          gr: "Τυροκαυτερή",
          de: "Scharfer Käseaufstrich",
          sr: "Пикантни сирни намаз",
          bg: "Пикантен сирен сос",
          ro: "Pasta picantă de brânză"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Tzatziki dip",
          gr: "Τζατζίκι",
          de: "Tzatziki-Dip",
          sr: "Тзатзики намаз",
          bg: "Цацики дип",
          ro: "Sos Tzatziki"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Fish roe salad",
          gr: "Ταραμοσαλάτα",
          de: "Fischrogen-Salat",
          sr: "Салата од рибља икра",
          bg: "Салата от рибено хайверче",
          ro: "Salată de icre"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Crab salad",
          gr: "Καβουροσαλάτα",
          de: "Krabbensalat",
          sr: "Салата од ракови",
          bg: "Салата с раци",
          ro: "Salată de crab"
        },
        price: "€5,00"
      },
      {
        name: {
          en: "Tzatziki dip, fish roe dip and spicy cheese dip",
          gr: "Αλοιφές",
          de: "Dips: Tzatziki, Fischrogen und scharfer Käse",
          sr: "Намази: Тзатзики, рибља икра и пикантни сир",
          bg: "Разядки: цацики, рибен хайвер и пикантен сирене",
          ro: "Pateuri: Tzatziki, icre de pește și brânză picantă"
        },
        price: "€6,00"
      }
    ]
  },

  {
    category: {
      en: "Salty Appetizers",
      gr: "Αλμυρά Ορεκτικά",
      de: "Salzige Vorspeisen",
      sr: "Солена предјела",
      bg: "Солени предястия",
      ro: "Aperitive sărate"
    },
    subcategory: {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      sr: "Предјела",
      bg: "Предястия",
      ro: "Aperitive"
    },
    items: [
      {
        name: {
          en: "Hors d' oeuveres",
          gr: "Ορντέρβ αλμυρών",
          de: "Häppchen",
          sr: "Хорс д’оурвес",
          bg: "Хорс дьоувър",
          ro: "Aperitive"
        },
        price: "€10,00"
      },
      {
        name: {
          en: "Anchovies",
          gr: "Αντσούγιες",
          de: "Anchovis",
          sr: "Анчоуси",
          bg: "Аншоа",
          ro: "Anșoa"
        },
        price: "€5,00"
      },
      {
        name: {
          en: "Dried salted mackerel",
          gr: "Τσιροσαλάτα",
          de: "Getrockneter gesalzener Makrelen-Salat",
          sr: "Салата од суви солени скушевац",
          bg: "Сушена солена скумрия салата",
          ro: "Salată de macrou uscat sărat"
        },
        price: "€5,00"
      },
      {
        name: {
          en: "Common mackerel",
          gr: "Σκουπρί",
          de: "Gemeine Makrele",
          sr: "Обичен скуша",
          bg: "Обикновена скумрия",
          ro: "Macrou comun"
        },
        price: "€7,00"
      },
      {
        name: {
          en: "Anchovies in salt",
          gr: "Γαύρος μαριναρισμένος",
          de: "Gesalzene Sardellen",
          sr: "Маринирани анчоуси",
          bg: "Мариновани аншоа",
          ro: "Anșoa în saramură"
        },
        price: "€5,00"
      }
    ]
  },

  {
    category: {
      en: "Cheeses",
      gr: "Τυριά",
      de: "Käse",
      sr: "Сиреви",
      bg: "Сирена",
      ro: "Brânzeturi"
    },
    subcategory: {
      en: "Appetizers",
      gr: "Ορεκτικά",
      de: "Vorspeisen",
      sr: "Предјела",
      bg: "Предястия",
      ro: "Aperitive"
    },
    items: [
      {
        name: {
          en: "Feta cheese",
          gr: "Φέτα",
          de: "Feta-Käse",
          sr: "Фета сир",
          bg: "Фета сирене",
          ro: "Brânză feta"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "Grilled Feta cheese ",
          gr: "Φέτα ψητή καυτερή",
          de: "Gegrillter scharfer Feta",
          sr: "Печена љута фета",
          bg: "Печена люта фета",
          ro: "Feta la grătar iute"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "Fried Kefalotyri cheese",
          gr: "Κεφαλουτύρι σαγανάκι",
          de: "Gebratener Kefalotyri-Käse",
          sr: "Пржени Кефалотијри сир",
          bg: "Пържено сирене Кефалотиури",
          ro: "Brânză Kefalotyri prăjită"
        },
        price: "€4,50"
      },
      {
        name: {
          en: "Cheese croquettes* ",
          gr: "Κασεροκροκέτες*",
          de: "Käsekroketten*",
          sr: "Крокете од сир",
          bg: "Крокети със сирене*",
          ro: "Crochete cu brânză*"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Hot Feta cheese in the pot",
          gr: "Μπουγιουρντί",
          de: "Warmer Feta im Topf",
          sr: "Топла фета у лонцу",
          bg: "Топла фета в гърне",
          ro: "Feta caldă în oală"
        },
        price: "€6,00"
      },
      {
        name: {
          en: "Cheese in th pot",
          gr: "Τυρί σε πήλινο",
          de: "Käse im Tontopf",
          sr: "Сир у глиненом лонцу",
          bg: "Сирене в глинен съд",
          ro: "Brânză în vas de lut"
        },
        price: "€6,00",
        description: {
          en: "(variety of cheeses)",
          gr: "(διάφορα τυριά)",
          de: "(Verschiedene Käsesorten)",
          sr: "(Разне врсте сира)",
          bg: "(Разнообразие от сирена)",
          ro: "(varietate de brânzeturi)"
        }
      },
      {
        name: {
          en: "Roasted Chaloumi with tomato",
          gr: "Χαλούμι ψητό με ντομάτα",
          de: "Gegrillter Halloumi mit Tomate",
          sr: "Печени Халуми са парадајзом",
          bg: "Печен халуми с домат",
          ro: "Halloumi la grătar cu roșii"
        },
        price: "€7,00"
      },
      {
        name: {
          en: "Feta cheese wrapped in the pie leave with honey*",
          gr: "Φέτα σε φύλλο με μέλι*",
          de: "Feta im Teigmantel mit Honig*",
          sr: "Фета умотана у кора са медом*",
          bg: "Фета в тесто с мед*",
          ro: "Feta în foaie cu miere*"
        },
        price: "€7,00"
      }
    ]
  },

  {
    category: {
      en: "Sea food portion",
      gr: "Θαλλασινά μερίδες",
      de: "Meeresfrüchte Portion",
      sr: "Порција морских плодова",
      bg: "Порция морски дарове",
      ro: "Porție fructe de mare"
    },
    subcategory: {
      en: "Sea food / Fish",
      gr: "Θαλλασινά / Ψάρια",
      de: "Meeresfrüchte / Fisch",
      sr: "Морски плодови / Риба",
      bg: "Морски дарове / Риба",
      ro: "Fructe de mare / Pește"
    },
    items: [
      {
        name: {
          en: "Grilled squids*",
          gr: "Καλαμαράκια ψητά*",
          de: "Gegrillte Tintenfische*",
          sr: "Печени лигње*",
          bg: "Печени калмари*",
          ro: "Calamari la grătar*"
        },
        price: "€9,50"
      },
      {
        name: {
          en: "Fried squids*",
          gr: "Καλαμαράκια τηγανιτά*",
          de: "Gebratene Tintenfische*",
          sr: "Пржене лигње*",
          bg: "Пържени калмари*",
          ro: "Calamari prăjiți*"
        },
        price: "€9,50"
      },
      {
        name: {
          en: "Stuffed squids with cheese*",
          gr: "Καλαμαράκια γεμιστά με κασέρι*",
          de: "Gefüllte Tintenfische mit Käse*",
          sr: "Пуњене лигње са сиром*",
          bg: "Пълнени калмари с кашкавал*",
          ro: "Calamari umpluți cu brânză*"
        },
        price: "€10,00"
      },
      {
        name: {
          en: "Fried mussels",
          gr: "Μύδια τηγανιτά",
          de: "Gebratene Muscheln",
          sr: "Пржене мушље",
          bg: "Пържени миди",
          ro: "Midii prăjite"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Mussels with sauce lemon",
          gr: "Μύδια σαγανάκι",
          de: "Muscheln in Zitronensauce",
          sr: "Мушље у лимуновом сосу",
          bg: "Миди с лимонов сос",
          ro: "Midii cu sos de lămâie"
        },
        price: "€8,50"
      },
      {
        name: {
          en: "Octopus in vinegar*",
          gr: "Χταπόδι ξυδάτο*",
          de: "Oktopus in Essig*",
          sr: "Хоботница у сирћету*",
          bg: "Октопод в оцет*",
          ro: "Caracatiță în oțet*"
        },
        price: "€14,00"
      },
      {
        name: {
          en: "Grilled octapus*",
          gr: "Χταπόδι ψητό*",
          de: "Gegrillter Oktopus*",
          sr: "Печена хоботница*",
          bg: "Печен октопод*",
          ro: "Caracatiță la grătar*"
        },
        price: "€14,00"
      },
      {
        name: {
          en: "Grilled sardines",
          gr: "Σαρδέλα ψητή",
          de: "Gegrillte Sardinen",
          sr: "Печене сардине",
          bg: "Печени сардини",
          ro: "Sardine la grătar"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Fried anchovies",
          gr: "Γαύρος τηγανιτός",
          de: "Gebratene Anchovis",
          sr: "Пржени анћоси",
          bg: "Пържени аншоа",
          ro: "Anșoa prăjiți"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Steamed anchovies",
          gr: "Γαύρος αχνιστός",
          de: "Gedämpfter Anchovis",
          sr: "Парени инћун",
          bg: "Парен сафрид",
          ro: "Pește aburit"
        },
        price: "€8,50"
      },
      {
        name: {
          en: "Tope with sauce*",
          gr: "Γαλέος σαγανάκι*",
          de: "Seeteufel mit Sauce*",
          sr: "Риба галеос са сосом*",
          bg: "Риба галeос с сос*",
          ro: "Pește Galeos cu sos*"
        },
        price: "€8,50"
      },
      {
        name: {
          en: "Fried Tope*",
          gr: "Γαλέος τηγανιτός*",
          de: "Gebratener Seeteufel*",
          sr: "Пржени галеос*",
          bg: "Пържен галeос*",
          ro: "Pește Galeos prăjit*"
        },
        price: "€8,50"
      },
      {
        name: {
          en: "Codfish*",
          gr: "Μπακαλίαρος υγρανάλατος*",
          de: "Kabeljau*",
          sr: "Треска*",
          bg: "Треска*",
          ro: "Cod*"
        },
        price: "€11,00"
      },
      {
        name: {
          en: "Shrimps with tomato sauce 300gr*",
          gr: "Γαρίδα σαγανάκι 300γραμ.*",
          de: "Garnelen mit Tomatensoße 300g*",
          sr: "Шкампи у парадајз сосу 300г*",
          bg: "Скариди в доматен сос 300г*",
          ro: "Creveți cu sos de roșii 300g*"
        },
        price: "€13,00"
      },
      {
        name: {
          en: "Fried shrimps 300gr*",
          gr: "Γαρίδα τηγανιτή 300γρ.*",
          de: "Gebratene Garnelen 300g*",
          sr: "Пржени шкампи 300г*",
          bg: "Пържени скариди 300г*",
          ro: "Creveți prăjiți 300g*"
        },
        price: "€13,00"
      },
      {
        name: {
          en: "Shrimps with spaghetti*",
          gr: "Γαριδομακαρονάδα*",
          de: "Garnelen mit Spaghetti*",
          sr: "Шкампи са шпагети*",
          bg: "Скариди със спагети*",
          ro: "Creveți cu spaghete*"
        },
        price: "€14,00"
      },
      {
        name: {
          en: "Grilled shrimps 300gr*",
          gr: "Γαρίδα σχάρας 300γραμ.*",
          de: "Gegrillte Garnelen 300g*",
          sr: "Печени шкампи 300г*",
          bg: "Печени скариди 300г*",
          ro: "Creveți la grătar 300g*"
        },
        price: "€13,00"
      },
      {
        name: {
          en: "Mix sea food*",
          gr: "Μιξ θαλασσινών*",
          de: "Meeresfrüchte Mix*",
          sr: "Микс морских плодова*",
          bg: "Микс морски дарове*",
          ro: "Mix fructe de mare*"
        },
        price: "€22,00",
        description: {
          en: "(squids, mussels, anchovies, shrimps)*",
          gr: "(καλαμάρια, μύδια, γαύρος, γαρίδα)*",
          de: "(Tintenfische, Muscheln, Anchovis, Garnelen)*",
          sr: "(лигње, мушље, анћоси, шкампи)*",
          bg: "(калмари, миди, аншоа, скариди)*",
          ro: "(calamari, midii, anșoa, creveți)*"
        }
      }
    ]
  },

  {
    category: {
      en: "Fish per kilo",
      gr: "Ψάρια με το κιλό",
      de: "Fisch pro Kilo",
      sr: "Риба по килограму",
      bg: "Риба на килограм",
      ro: "Pește pe kilogram"
    },
    subcategory: {
      en: "Sea food / Fish",
      gr: "Θαλλασινά / Ψάρια",
      de: "Meeresfrüchte / Fisch",
      sr: "Морски плодови / Риба",
      bg: "Морски дарове / Риба",
      ro: "Fructe de mare / Pește"
    },
    items: [
      {
        name: {
          en: "Fish of the day",
          gr: "Ψάρια ημέρας",
          de: "Fisch des Tages",
          sr: "Риба дана",
          bg: "Риба на деня",
          ro: "Peștele zilei"
        },
        price: "€50,00"
      },
      {
        name: {
          en: "Dorado 300gr",
          gr: "Τσιπούρες 300γραμ.",
          de: "Dorade 300g",
          sr: "Дорадо 300г",
          bg: "Дорадо 300г",
          ro: "Doradă 300g"
        },
        price: "€15,00"
      },
      {
        name: {
          en: "Bass fish 300gr",
          gr: "Λαβράκια 300γραμ.",
          de: "Wolfsbarsch 300g",
          sr: "Бранцин 300г",
          bg: "лаврак 300г",
          ro: "Biban de mare 300g"
        },
        price: "€15,00"
      },
      {
        name: {
          en: "Red Mullet 300gr",
          gr: "Κουτσομούρες 300γραμ.",
          de: "Rote Meerbarbe 300g",
          sr: "Трља 300г",
          bg: "Червен Кефал 300г",
          ro: "Pește mic roșu prăjit 300g"
        },
        price: "€15,00"
      },
      {
        name: {
          en: "European hake 300gr",
          gr: "Μπακαλιαράκια 300γραμ.",
          de: "Seehecht 300g",
          sr: "Ослић 300г",
          bg: "хек 300г",
          ro: "Merluciu 300g"
        },
        price: "€15,00"
      }
    ]
  },

  {
    category: {
      en: "Meat",
      gr: "Κρεατικά",
      de: "Fleisch",
      sr: "Месо",
      bg: "Месо",
      ro: "Carne"
    },
    subcategory: {
      en: "Meat",
      gr: "Κρεατικά",
      de: "Fleisch",
      sr: "Месо",
      bg: "Месо",
      ro: "Carne"
    },
    items: [
      {
        name: {
          en: "Skewers pork 3 pieces",
          gr: "Σουβλάκια χοιρινά 3 τεμ.",
          de: "Schweine-Spieße 3 Stück",
          sr: "Свињски ражњићи 3 комада",
          bg: "Свински шишчета 3 броя",
          ro: "Frigarui porc 3 bucăți"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Pork chop",
          gr: "Μπριζόλα χοιρινή",
          de: "Schweinekotelett",
          sr: "Свињска котлета",
          bg: "Свинска пържола",
          ro: "Cotlet de porc"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Pork snitzel",
          gr: "Σνίτσελ χοιρινό",
          de: "Schweineschnitzel",
          sr: "Свињски шницл",
          bg: "Свински шницел",
          ro: "Șnițel de porc"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Snitzel with spicy sauce",
          gr: "Σνίτσελ με τσιγγάνικη σάλτσα",
          de: "Schnitzel mit würziger Soße",
          sr: "Шницл са љутим сосом",
          bg: "Шницел с пикантен сос",
          ro: "Șnițel cu sos picant"
        },
        price: "€10,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Snitzel with mushrooms and white sour cream",
          gr: "Σνίτσελ με μανιτάρια αλά κρεμ",
          de: "Schnitzel mit Champignons und Sauerrahm",
          sr: "шницла са печуркама и павлаком ",
          bg: "шницел с гъби и сметана",
          ro: "Șnițel cu ciuperci și smântână albă"
        },
        price: "€10,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Pork ribs",
          gr: "Πανσέτα",
          de: "Bauchspeck",
          sr: "Свињске ребрце",
          bg: "Свински ребра",
          ro: "Coaste de porc"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Meatball",
          gr: "Μπιφτέκι",
          de: "Frikadellen",
          sr: "Љуљ-бифтек",
          bg: "Кюфте",
          ro: "Chiftea"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Stuffed meatball",
          gr: "Μπιφτέκι γεμιστό",
          de: "Gefüllte Frikadelle",
          sr: "пуњени пљескавицу",
          bg: "Пълнено кюфте",
          ro: "Chiftea umplută"
        },
        price: "€8,50",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Chicken fillet",
          gr: "Κοτόπουλο φιλέτο",
          de: "Hähnchenfilet",
          sr: "Пилећи филе",
          bg: "Пилешко филе",
          ro: "File de pui"
        },
        price: "€8,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Chicken with mushrooms and white sour cream",
          gr: "Κοτόπουλο με μανιτάρια αλά κρέμ",
          de: "Hähnchen mit Champignons und Sauerrahm",
          sr: "Пиле са печуркама и киселом павлаком",
          bg: "Пиле с гъби и бяла сметана",
          ro: "Pui cu ciuperci și smântână albă"
        },
        price: "€10,00",
        description: {
          en: "with french fries & salad",
          gr: "με πατάτες τηγανητές & σαλάτα",
          de: "mit Pommes frites & Salat",
          sr: "са помфритом и салатом",
          bg: "с пържени картофи и салата",
          ro: "cu cartofi prăjiți și salată"
        }
      },
      {
        name: {
          en: "Mixed grill for 3 people",
          gr: "Ποικιλία κρεατικών για 3 άτομα",
          de: "Gemischter Grill für 3 Personen",
          sr: "Мешано месо за 3 особе",
          bg: "Смесено месо за 3 души",
          ro: "Grătar mixt pentru 3 persoane"
        },
        price: "€24,00"
      }
    ]
  },

  {
    category: {
      en: "Refreshments",
      gr: "Αναψυκτικά",
      de: "Erfrischungsgetränke",
      sr: "Освежавајућа пића",
      bg: "Освежителни напитки",
      ro: "Răcoritoare"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Coca - Cola 250ml",
          gr: "Κόκα - Κόλα 250ml",
          de: "Coca-Cola 250ml",
          sr: "Кока-Кола 250ml",
          bg: "Кока-Кола 250ml",
          ro: "Coca-Cola 250ml"
        },
        price: "€2,50"
      },
      {
        name: {
          en: "Sprite 250ml",
          gr: "Σπράιτ 250ml",
          de: "Sprite 250ml",
          sr: "Спрајт 250ml",
          bg: "Спрайт 250ml",
          ro: "Sprite 250ml"
        },
        price: "€2,50"
      },
      {
        name: {
          en: "Orangeade 250ml",
          gr: "Πορτοκαλάδα 250ml",
          de: "Orangenlimonade 250ml",
          sr: "Портокал 250ml",
          bg: "Портокал 250ml",
          ro: "Portocaladă 250ml"
        },
        price: "€2,50"
      },
      {
        name: {
          en: "Soda water 250ml",
          gr: "Σόδα 250ml",
          de: "Sodawasser 250ml",
          sr: "Кисела вода 250ml",
          bg: "Содa 250ml",
          ro: "Apă carbogazoasă 250ml"
        },
        price: "€2,50"
      },
      {
        name: {
          en: "Table water 1L",
          gr: "Νερό εμφιαλωμένο 1L",
          de: "Tafelwasser 1L",
          sr: "Вода 1L",
          bg: "Вода 1L",
          ro: "Apă plată 1L"
        },
        price: "€1,50"
      }
    ]
  },

  {
    "category": {
      "en": "Beers",
      "gr": "Μπύρες",
      "de": "Biere",
      "sr": "Пиво",
      "bg": "Бира",
      "ro": "Bere"
    },
    "subcategory": {
      "en": "Drinks",
      "gr": "Ποτά",
      "de": "Getränke",
      "sr": "Пијачa",
      "bg": "Напитки",
      "ro": "Băuturi"
    },
    "items": [
      {
        "name": {
          "en": "Amstel 500ml",
          "gr": "Άμστελ 500ml",
          "de": "Amstel 500ml",
          "sr": "Amstel 500ml",
          "bg": "Amstel 500ml",
          "ro": "Amstel 500ml"
        },
        "price": "€4,00"
      },
      {
        "name": {
          "en": "Kaiser 500ml",
          "gr": "Κάιζερ 500ml",
          "de": "Kaiser 500ml",
          "sr": "Kaiser 500ml",
          "bg": "Kaiser 500ml",
          "ro": "Kaiser 500ml"
        },
        "price": "€4,00"
      },
      {
        "name": {
          "en": "Mythos 500ml",
          "gr": "Μύθος 500ml",
          "de": "Mythos 500ml",
          "sr": "Mythos 500ml",
          "bg": "Mythos 500ml",
          "ro": "Mythos 500ml"
        },
        "price": "€4,00"
      },
      {
        "name": {
          "en": "Fix 500ml",
          "gr": "Φιξ 500ml",
          "de": "Fix 500ml",
          "sr": "Fix 500ml",
          "bg": "Fix 500ml",
          "ro": "Fix 500ml"
        },
        "price": "€4,00"
      },
      {
        "name": {
          "en": "Alfa 500ml",
          "gr": "Άλφα 500ml",
          "de": "Alfa 500ml",
          "sr": "Alfa 500ml",
          "bg": "Alfa 500ml",
          "ro": "Alfa 500ml"
        },
        "price": "€4,00"
      }
    ]
  },

  {
    category: {
      en: "Retsines",
      gr: "Ρετσίνες",
      de: "Retsinen",
      sr: "Рецине",
      bg: "Рецине",
      ro: "Retsine"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Malamatina 500ml",
          gr: "Μαλαματίνα 500ml",
          de: "Malamatina 500ml",
          sr: "Malamatina 500ml",
          bg: "Malamatina 500ml",
          ro: "Malamatina 500ml"
        },
        price: "€4,00"
      },
      {
        name: {
          en: "Vasiliki 500ml",
          gr: "Βασιλική 500ml",
          de: "Vasiliki 500ml",
          sr: "Vasiliki 500ml",
          bg: "Vasiliki 500ml",
          ro: "Vasiliki 500ml"
        },
        price: "€6,00"
      },
      {
        name: {
          en: "Georgiadi 500ml",
          gr: "Γεωργιάδη 500ml",
          de: "Georgiadi 500ml",
          sr: "Georgiadi 500ml",
          bg: "Georgiadi 500ml",
          ro: "Georgiadi 500ml"
        },
        price: "€4,00"
      }
    ]
  },

  {
    category: {
      en: "Barrel wine",
      gr: "Βαρελίσια κρασιά",
      de: "Fasswein",
      sr: "Вино из буради",
      bg: "Винен барел",
      ro: "Vin la butoi"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Demi sweet red wine 500ml",
          gr: "Ημίγλυκο κόκκινο 500ml",
          de: "Halbsüßer Rotwein 500ml",
          sr: "Полуслатко црвено вино 500ml",
          bg: "Полусладко червено вино 500ml",
          ro: "Vin roșu demi-dulce 500ml"
        },
        price: "€5,00"
      },
      {
        name: {
          en: "Dry red 500ml",
          gr: "Ξηρό κόκκινο 500ml",
          de: "Trockener Rotwein 500ml",
          sr: "Суво црвено 500ml",
          bg: "Сухо червено 500ml",
          ro: "Vin roșu sec 500ml"
        },
        price: "€5,00"
      },
      {
        name: {
          en: "White 500ml",
          gr: "Λευκό 500ml",
          de: "Weißwein 500ml",
          sr: "Бело 500ml",
          bg: "Бяло 500ml",
          ro: "Vin alb 500ml"
        },
        price: "€5,00"
      }
    ]
  },

  {
    category: {
      en: "Wine",
      gr: "Κρασιά",
      de: "Wein",
      sr: "Вино",
      bg: "Вино",
      ro: "Vin"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Moschofilero 750ml",
          gr: "Μοσχοφίλερο 750ml",
          de: "Moschofilero 750ml",
          sr: "Moschofilero 750ml",
          bg: "Moschofilero 750ml",
          ro: "Moschofilero 750ml"
        },
        price: "€14,00"
      },
      {
        name: {
          en: "Vivlia Chora 750ml",
          gr: "Βιβλία Χώρα 750ml",
          de: "Vivlia Chora 750ml",
          sr: "Vivlia Chora 750ml",
          bg: "Vivlia Chora 750ml",
          ro: "Vivlia Chora 750ml"
        },
        price: "€25,00"
      }
    ]
  },

  {
    category: {
      en: "Ouzo",
      gr: "Ούζο",
      de: "Ouzo",
      sr: "Узо",
      bg: "Узо",
      ro: "Uzo"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Varvagiannis 200ml",
          gr: "Βαρβαγιάννης 200ml",
          de: "Varvagiannis 200ml",
          sr: "Varvagiannis 200ml",
          bg: "Varvagiannis 200ml",
          ro: "Varvagiannis 200ml"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Magia 200ml",
          gr: "Μαγεία 200ml",
          de: "Magia 200ml",
          sr: "Magia 200ml",
          bg: "Magia 200ml",
          ro: "Magia 200ml"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Mitilini MINI 200ml",
          gr: "Μυτιλήνη ΜΙΝΙ 200ml",
          de: "Mitilini MINI 200ml",
          sr: "Mitilini MINI 200ml",
          bg: "Mitilini МINI 200ml",
          ro: "Mitilini MINI 200ml"
        },
        price: "€8,00"
      },
      {
        name: {
          en: "Plomari 200ml",
          gr: "Πλωμάρι 200ml",
          de: "Plomari 200ml",
          sr: "Plomari 200ml",
          bg: "Plomari 200ml",
          ro: "Plomari 200ml"
        },
        price: "€8,00"
      }
    ]
  },

  {
    category: {
      en: "Tsipouro",
      gr: "Τσίπουρο",
      de: "Tsipouro",
      sr: "Ципуро",
      bg: "Ципуро",
      ro: "Țipouro"
    },
    subcategory: {
      en: "Drinks",
      gr: "Ποτά",
      de: "Getränke",
      sr: "Пијачa",
      bg: "Напитки",
      ro: "Băuturi"
    },
    items: [
      {
        name: {
          en: "Babatzim with anise 200ml",
          gr: "Μπαμπατζίμ με γλυκάνισο 200ml",
          de: "Babatzim mit Anis 200ml",
          sr: "Babatzim са анисом 200ml",
          bg: "Babatzim с анасон 200ml",
          ro: "Babatzim cu anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Babatzim without anise 200ml",
          gr: "Μπαμπατζίμ χωρίς γλυκάνισο 200ml",
          de: "Babatzim ohne Anis 200ml",
          sr: "Babatzim без аниса 200ml",
          bg: "Babatzim без анасон 200ml",
          ro: "Babatzim fără anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Apostolaki with anise 200ml",
          gr: "Αποστολάκη με γλυκάνισο 200ml",
          de: "Apostolaki mit Anis 200ml",
          sr: "Apostolaki са анисом 200ml",
          bg: "Apostolaki с анасон 200ml",
          ro: "Apostolaki cu anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Apostolaki without anise 200ml",
          gr: "Αποστολάκη χωρίς γλυκάνισο 200ml",
          de: "Apostolaki ohne Anis 200ml",
          sr: "Apostolaki без аниса 200ml",
          bg: "Apostolaki без анасон 200ml",
          ro: "Apostolaki fără anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Idoniko with anise 200ml",
          gr: "Ηδωνικό με γλυκάνισο 200ml",
          de: "Idoniko mit Anis 200ml",
          sr: "Idoniko са анисом 200ml",
          bg: "Idoniko с анасон 200ml",
          ro: "Idoniko cu anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Idoniko without anise 200ml",
          gr: "Ηδωνικό χωρίς γλυκάνισο 200ml",
          de: "Idoniko ohne Anis 200ml",
          sr: "Idoniko без аниса 200ml",
          bg: "Idoniko без анасон 200ml",
          ro: "Idoniko fără anason 200ml"
        },
        price: "€9,00"
      },
      {
        name: {
          en: "Tsipouro homemade with anise 250ml",
          gr: "Τσίπουρο χύμα με γλυκάνισο 250ml",
          de: "Hausgemachtes Tsipouro mit Anis 250ml",
          sr: "Ципуро домаћи са анисом 250ml",
          bg: "Домашно ципуро с анасон 250ml",
          ro: "Țipouro de casă cu anason 250ml"
        },
        price: "€7,00"
      },
      {
        name: {
          en: "Tsipouro homemade without anise 250ml",
          gr: "Τσίπουρο χύμα χωρίς γλυκάνισο 250ml",
          de: "Hausgemachtes Tsipouro ohne Anis 250ml",
          sr: "Ципуро домаћи без аниса 250ml",
          bg: "Домашно ципуро без анасон 250ml",
          ro: "Țipouro de casă fără anason 250ml"
        },
        price: "€7,00"
      },
      {
        name: {
          en: "Tsipouro homemade with anise, glass 50ml",
          gr: "Ηδωνικό με γλυκάνισο, ποτήρι 50ml",
          de: "Hausgemachtes Tsipouro mit Anis, Glas 50ml",
          sr: "Домаћи Ципуро са анисом, чаша 50ml",
          bg: "Домашно ципуро с анасон, чаша 50ml",
          ro: "Țipouro de casă cu anason, pahar 50ml"
        },
        price: "€3,00"
      },
      {
        name: {
          en: "Tsipouro homemade without anise, glass 50ml",
          gr: "Αποστολάκη χωρίς γλυκάνισο, ποτήρι 50ml",
          de: "Hausgemachtes Tsipouro ohne Anis, Glas 50ml",
          sr: "Домаћи Ципуро без аниса, чаша 50ml",
          bg: "Домашно ципуро без анасон, чаша 50ml",
          ro: "Țipouro de casă fără anason, pahar 50ml"
        },
        price: "€3,00"
      }
    ]
  },
];
