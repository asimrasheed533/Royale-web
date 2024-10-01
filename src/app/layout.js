import "react-toastify/dist/ReactToastify.css";
import "@/style/global.scss";
// import Toast from "@/components/Toast";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        {children}
        {/* <Toast /> */}
      </body>
    </html>
  );
}
