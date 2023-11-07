const menuData = [
  {
    id: 1,
    title: "الرئيسية",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "حولنا",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "من نحن؟ ",
        path: "/about",
        newTab: false,
      },
      {
        id: 12,
        title: "التراخيص ",
        path: "/reg",
        newTab: false,
      },
      {
        id: 13,
        title: " الشروط والأحكام",
        path: "/terms",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "أسواق التداول",
    newTab: false,
    submenu: [
      {
        id: 20,
        title: "تداول الفوركس ",
        path: "/forex",
        newTab: false,
      },
      {
        id: 21,
        title: "تداول الأسهم والمؤشرات",
        path: "/stock",
        newTab: false,
      },
      {
        id: 22,
        title: "تداول السلع ",
        path: "/commodity",
        newTab: false,
      },
      {
        id: 23,
        title: "تداول العملات الرقمية",
        path: "/crypto",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: " الاداوت  ",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "  ادوات التداول  ",
        path: "/trading-tools",
        newTab: false,
      },
      {
        id: 32,
        title: "المنصات",
        newTab: false,
        path: "/platforms",
      },
      {
        id: 33,
        title: "   تمويل حسابك ",
        path: "/funding",
        newTab: false,
      },
    ],
  },

  {
    id: 5,
    title: "تواصل معنا",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
