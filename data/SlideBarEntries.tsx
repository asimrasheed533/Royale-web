import GeneralIcon from "@/icons/GeneralIcon";

export const SideBarLink = [
  {
    name: "Dashboard",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Order",
        path: "/customer/orders",
      },
      {
        name: "Users",
        path: "/users",
      },
    ],
  },
  {
    name: "Orders",
    path: "",
  },
];
export const AdminSideBarLink = [
  {
    name: "Admin",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Products",
        path: "/admin/products",
      },
      {
        name: "Orders",
        path: "/admin/orders",
      },
      {
        name: "Users",
        path: "/admin/users",
      },
    ],
  },
];
