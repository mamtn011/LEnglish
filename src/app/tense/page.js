import Link from "next/link";
const Page = () => {
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
    <main className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">2. Tense</h1>
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
