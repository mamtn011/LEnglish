import LessonMenu from "@/components/tense/LessonMenu";
import PastPerfect from "@/components/tense/perfect/PastPerfect";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PastPerfect />
      </div>
    </section>
  );
};

export default page;
