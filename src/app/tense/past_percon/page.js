import LessonMenu from "@/components/tense/LessonMenu";
import PastPerfectContinuous from "@/components/tense/perfect_continuous/pastPerfectContinuous";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PastPerfectContinuous />
      </div>
    </section>
  );
};

export default page;
