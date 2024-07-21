import LessonMenu from "@/components/common/LessonMenu";

export default function WhLayout({ children }) {
  const navItems = [
    { path: "/whq/who", label: "Who" },
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
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu navItems={navItems} label="3. Wh Questions" />
        {children}
      </div>
    </section>
  );
}
