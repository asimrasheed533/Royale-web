import GeneralIcon from "@/icons/GeneralIcon";

export const UserSideBarLink = [
  {
    name: "Dashboard",
    path: "",
    icon: <GeneralIcon />,
    children: [
      {
        name: "Al Order",
        path: "/customer/orders",
      },
      {
        name: "On Going Order",
        path: "/customer/orders",
      },
    ],
  },
  {
    name: "User",
    path: "/customer/users",
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
