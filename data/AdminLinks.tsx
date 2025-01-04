import GeneralIcon from "@/icons/GeneralIcon";

export default [
  {
    label: "Dashboard",
    children: [
      {
        href: "/admin/products",
        label: "Products",
        icon: <GeneralIcon />,
      },
      {
        href: "/admin/categories",
        label: "Categories",
        icon: <GeneralIcon />,
      },
      {
        href: "/admin/orders",
        label: "Appartment",
        icon: <GeneralIcon />,
      },
    ],
  },
];
