import PastContinuous from "@/components/tense/continuous/PastContinuous";
import LessonMenu from "@/components/tense/LessonMenu";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PastContinuous />
      </div>
    </section>
  );
};

export default page;
