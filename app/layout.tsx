import { CartProvider } from "./Components/CartContext";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import "./styles/globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ClickNpicK</title>
        <link rel="icon" href="/Images/Favicon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
