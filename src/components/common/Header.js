import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <h3 className="text-2xl font-bold text-white">
          Learn<span className="text-orange-500">English</span>
        </h3>
        <h4 className="text-white text-xl hover:text-orange-500">
          <Link href="/">Home</Link>
        </h4>
      </div>
    </header>
  );
};

export default Header;
