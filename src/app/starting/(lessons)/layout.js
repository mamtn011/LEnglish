import LessonMenu from "@/components/common/LessonMenu";

export default function RootLayout({ children }) {
  const navItems = [
    { path: "/starting/be", label: "Be Verb" },
    { path: "/starting/have", label: "Have Verb" },
    { path: "/starting/there", label: "Use of There" },
  ];
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu navItems={navItems} label="1. Basic" />
        {children}
      </div>
    </section>
  );
}
