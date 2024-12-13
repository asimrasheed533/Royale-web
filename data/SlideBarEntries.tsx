// export function useBackLocation() {
//   const location = useLocation();
//   return location.pathname
//     .toLowerCase()
//     .replace("/" + location.pathname.toLowerCase().split("/")[3], "");
// }

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
