import Link from "next/link";
import { passiveNavItems } from "@/store/links";
const page = () => {
  return (
    <main className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">5. Passive</h1>
        <ul className="w-full flex flex-col items-center justify-center gap-2">
          {passiveNavItems.map(({ path, label }) => (
            <li key={path}>
              <Link href={path} className="nav-link hover:text-orange-500">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default page;
