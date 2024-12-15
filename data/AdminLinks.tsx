import GeneralIcon from "@/icons/GeneralIcon";

export default [
  {
    label: "Dashboard",
    children: [
      {
        href: "/",
        label: "Dashboard",
        icon: <GeneralIcon />,
      },
      {
        href: "/admin/products",
        label: "Products",
        icon: <GeneralIcon />,
      },
      {
        href: "/admin/orders",
        label: "Orders",
        icon: <GeneralIcon />,
      },
    ],
  },
];
