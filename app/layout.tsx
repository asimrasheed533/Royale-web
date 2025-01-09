import "react-toastify/dist/ReactToastify.css";
import "@/style/global.scss";

import { ToastContainer } from "react-toastify";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const APP_NAME = "Royal";
const APP_DEFAULT_TITLE = "Royal Fast Food";
const APP_TITLE_TEMPLATE = "%L | Royal Fast Food";
const APP_DESCRIPTION =
  "Royel Fast Food is a food delivery app that provides a fast and convenient way to order food from a wide variety of restaurants.";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#161c24",
};
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>
        {children}
        <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
      </body>
    </html>
  );
}
