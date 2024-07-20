import LessonMenu from "@/components/tense/LessonMenu";
import PresentPerfect from "@/components/tense/perfect/PresentPerfect";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PresentPerfect />
      </div>
    </section>
  );
};

export default page;
