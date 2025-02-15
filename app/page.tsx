import { CartProvider } from "./Components/CartContext";
import "./styles/globals.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";

export default function Home() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <HomePage />
      </CartProvider>
    </div>
  );
}
