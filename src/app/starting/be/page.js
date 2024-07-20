import BeVerb from "@/components/starting/BeVerb";
import LessonMenu from "@/components/starting/LessonMenu";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <BeVerb />
      </div>
    </section>
  );
};

export default page;
