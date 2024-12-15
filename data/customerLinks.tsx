import GeneralIcon from "@/icons/GeneralIcon";

export default [
  {
    label: "General",
    children: [
      {
        href: "/",
        label: "Dashboard",
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
