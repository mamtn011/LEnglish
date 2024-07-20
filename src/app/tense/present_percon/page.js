import LessonMenu from "@/components/tense/LessonMenu";
import PresentPerfectContinuous from "@/components/tense/perfect_continuous/PresentPerfectContinuous";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PresentPerfectContinuous />
      </div>
    </section>
  );
};

export default page;
