import LessonMenu from "@/components/tense/LessonMenu";
import FuturePerfect from "@/components/tense/perfect/FuturePerfect";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <FuturePerfect />
      </div>
    </section>
  );
};

export default page;
