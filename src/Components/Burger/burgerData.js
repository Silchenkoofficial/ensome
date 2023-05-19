const LINKS = [
  {
    id: 0,
    to: "/",
    title: "Home",
  },
  {
    id: 1,
    to: "/solutions",
    title: "Solutions",
  },
  {
    id: 2,
    title: "Pages",
    childrens: [
      {
        to: "/home-1",
        title: "Home 1",
      },
      {
        to: "/home-2",
        title: "Home 2",
      },
      {
        to: "/home-3",
        title: "Home 3",
      },
    ],
  },
  {
    id: 3,
    to: "/elements",
    title: "Elements",
  },
  {
    id: 4,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 5,
    to: "/contacts",
    title: "Contacts",
  },
];

export default LINKS;
