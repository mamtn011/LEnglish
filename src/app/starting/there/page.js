import UseOfThere from "@/components/starting/UseOfThere";
import LessonMenu from "@/components/starting/LessonMenu";

const page = () => {
  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        <LessonMenu />
        <UseOfThere />
      </div>
    </section>
  );
};

export default page;
