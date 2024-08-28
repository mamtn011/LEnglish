import Link from "next/link";
const Page = () => {
  const navItems = [
    { path: "/whq/who", label: "Who - Whom" },
    { path: "/whq/whom", label: "Whom" },
    { path: "/whq/whose", label: "Whose" },
    { path: "/whq/which", label: "Which" },
    { path: "/whq/what", label: "What" },
    { path: "/whq/how", label: "How" },
    { path: "/whq/where", label: "Where" },
    { path: "/whq/why", label: "Why" },
    { path: "/whq/when", label: "When" },
  ];
  return (
    <main className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">1. Basic</h1>
        <ul className="w-full flex flex-col items-center justify-center gap-2">
          {navItems.map(({ path, label }) => (
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

export default Page;
