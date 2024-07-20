"use client";
import { useState } from "react";
import BarIcon from "@/components/icons/BarIcon";
import Link from "next/link";
const LessonMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: "/starting/be", label: "Be Verb" },
    { path: "/starting/have", label: "Have Verb" },
    { path: "/starting/there", label: "Use of There" },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-6">1. Basic</h3>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-1 bg-black text-white rounded h-6 w-6 flex justify-center items-center"
        >
          {isMenuOpen ? "X" : <BarIcon />}
        </button>
      </div>
      <ul
        className={`gap-12 text-lg block space-y-2 p-4 mt-14  h-lvh ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ path, label }) => (
          <li key={path} className="btn-lesson">
            <Link
              href={path}
              className="hover:text-orange-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LessonMenu;
