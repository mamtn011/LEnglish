import LessonMenu from "@/components/common/LessonMenu";

export default function NameLayout({ children }) {
  const navItems = [
    { path: "/modals/should", label: "Should" },
    { path: "/modals/need", label: "Need" },
    { path: "/modals/must", label: "Must" },
    { path: "/modals/may", label: "May" },
  ];
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu navItems={navItems} label="4. Modals" />
        {children}
      </div>
    </section>
  );
}
