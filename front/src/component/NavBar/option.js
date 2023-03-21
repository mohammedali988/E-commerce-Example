export const Option = [
  {
    title: "Home",
    to: "/",
    active: true,
    subMenu: false,
    subMenuItems: [],
  },
  {
    title: "Explore",
    to: "/explore",
    active: false,
    subMenu: false,
    subMenuItems: [],
  },
  {
    title: "Pages",
    to: "",
    active: false,
    subMenu: true,
    subMenuItems: [
      {
        title: "Explore Items",
        to: "/explore",
      },
      {
        title: "Item Details",
        to: "/itemDetails",
      },
      {
        title: "Create Items",
        to: "/create/item",
      },
      {
        title: "Connect Wallet",
        to: "/connect/wallet",
      },
      {
        title: "Support",
        to: "/support",
      },
      {
        title: "Sign In Page",
        to: "",
      },
      {
        title: "Sign Up Page",
        to: "",
      },
    ],
  },
  {
    title: "Support",
    to: "/support",
    active: false,
    subMenu: false,
    subMenuItems: [],
  },
];
