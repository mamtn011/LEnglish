import LessonMenu from "@/components/common/LessonMenu";
import { passiveNavItems } from "@/store/links";
export default function NameLayout({ children }) {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu navItems={passiveNavItems} label="5. Passive" />
        {children}
      </div>
    </section>
  );
}
