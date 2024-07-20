import LessonMenu from "@/components/tense/LessonMenu";
import FuturePerfectContinuous from "@/components/tense/perfect_continuous/FuturePerfectContinuous";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <FuturePerfectContinuous />
      </div>
    </section>
  );
};

export default page;
