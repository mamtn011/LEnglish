"use client";

import Link from "next/link";

export default function Home() {
  // JSX
  return (
    <main className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">
          Personal Notes For Learning English
        </h1>
        <ul className="w-full flex flex-col items-center justify-center gap-2">
          <li>
            <Link href="/starting" className="nav-link hover:text-orange-500">
              Basic
            </Link>
          </li>
          <li>
            <Link href="/tense" className="nav-link hover:text-orange-500">
              Tense
            </Link>
          </li>
          <li>
            <Link href="/whq" className="nav-link hover:text-orange-500">
              WH Questions
            </Link>
          </li>
          <li>
            <Link href="/modals" className="nav-link hover:text-orange-500">
              Modals
            </Link>
          </li>
          <li>
            <Link href="/passive" className="nav-link hover:text-orange-500">
              Passive
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
