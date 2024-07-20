"use client";
import { useState } from "react";
import BarIcon from "@/components/icons/BarIcon";
import Link from "next/link";
const LessonMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: "/tense/present_in", label: "Present Indefinite" },
    { path: "/tense/past_in", label: "Past Indefinite" },
    { path: "/tense/future_in", label: "Future Indefinite" },
    { path: "/tense/present_con", label: "Present Continuous" },
    { path: "/tense/past_con", label: "Past Continuous" },
    { path: "/tense/future_con", label: "Future Continuous" },
    { path: "/tense/present_per", label: "Present Perfect" },
    { path: "/tense/past_per", label: "Past Perfect" },
    { path: "/tense/future_per", label: "Future Perfect" },
    { path: "/tense/present_percon", label: "Present Perfect Continuous" },
    { path: "/tense/past_percon", label: "Past Perfect Continuous" },
    { path: "/tense/future_percon", label: "Future Perfect Continuous" },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-6">2. Tense</h3>
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
