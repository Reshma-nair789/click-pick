"use client"; // Required for using hooks

import "./navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next"; // i18n hook
import { useCart } from "./CartContext";
import styles from "./navbar.module.css"; // Importing the CartContext
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Hamburger menu */}
        <div className={styles["navbar-hamburger"]} onClick={toggleMenu}>
          <menuitem className="h-8 w-8 text-white" />
        </div>

        {/* Logo */}
        <div className={styles["navbar-logo"]}>
          <Link href="/">
            <Image src="/images/Logo.png" alt="Logo" width={120} height={40} />
          </Link>
        </div>

        {/* Search bar */}
        <div className={styles["navbar-search"]}>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="p-2 border rounded-l-md"
          >
            <option value="EN">EN</option>
            <option value="ES">AR</option>
          </select>
          <input
            type="text"
            placeholder="Search products"
            className="p-2 flex-grow rounded-l-md border"
          />
          <button
            onClick={handleAddToCart}
            className="bg-yellow-400 p-2 rounded-r-md"
          >
            <search className="h-5 w-5" />
          </button>
        </div>

        {/* Navbar links */}
        <div className={`${styles["navbar-links"]} ${menuOpen ? "open" : ""}`}>
          <Link href="/signin" className="text-white">
            Sign In
          </Link>
          <Link href="/orders" className="text-white">
            Orders
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingBagIcon className="h-6 w-6 text-white" />
            <span className={styles["navbar-cart-count"]}>{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
