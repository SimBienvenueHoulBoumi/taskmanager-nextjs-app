"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu (ouvert/fermé)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex h-screen">home</div>
    </>
  );
}
