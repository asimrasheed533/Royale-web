import GeneralIcon from "@/icons/GeneralIcon";

export const UserSideBarLink = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <GeneralIcon />,
  },
  {
    name: "Al Order",
    path: "/dashboard/orders",
    icon: <GeneralIcon />,
  },
  {
    name: "On Going Order",
    path: "/dashboard/onGoingOrders",
    icon: <GeneralIcon />,
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
