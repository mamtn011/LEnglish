import LessonMenu from "@/components/tense/LessonMenu";
import PresentIndefinite from "@/components/tense/indefinite/PresentIndefinite";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <PresentIndefinite />
      </div>
    </section>
  );
};

export default page;
