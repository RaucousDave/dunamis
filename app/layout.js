import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const polySans = localFont({
  src: [
    {
      path: "./fonts/Polysans-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Polysans-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Polysans-neutral.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Polysans-slim.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Polysans-bold-italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Polysans-medium-italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Polysans-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Polysans-slim-italic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-polysans",
});

export const metadata = {
  title: "Dunamis Dental Clinic",
  description: "An Uyo based Dental Clinic that prioritizes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${polySans.variable} antialiased`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
