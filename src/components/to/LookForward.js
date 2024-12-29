const LookForward = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">
        Look forward to, Sure of, Fond of
      </button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              Look forward to : কোনকিছুর জন্য প্রতীক্ষা করা/প্রত্যাশা করা/চেয়ে
              থাকা।
            </p>
            <p>Sure of/about : কোন বিষয়ে বা কোনকিছু করার বিষয়ে নিশ্চিত হওয়া।</p>
            <p>
              Fond of : কোনকিছু করতে পছন্দ করা বা ভালবাসা অথবা কোনকিছুকে/কাউকে
              পছন্দ করা বা ভালবাসা।
            </p>
          </div>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছুর জন্য প্রতীক্ষা করা/প্রত্যাশা করা/চেয়ে থাকা বোঝাতে look
            forward to + v+ing/(something) ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি একটি চাকরী পাওয়ার প্রত্যাশা করছি।</p>
            <p>I am looking forward to getting a job.</p>
          </div>
          <div>
            <p>আমি একটি চাকরীর প্রত্যাশা করছি।</p>
            <p>I am looking forward to a job.</p>
          </div>
          <div>
            <p>আমি তোমার সাথে দেখা করতে প্রতীক্ষা করছি।</p>
            <p>I am looking forward to meeting you.</p>
          </div>
          <div>
            <p>আমি আগামী মাসে লন্ডন যাওয়ার প্রত্যাশা করছি।</p>
            <p>I am looking forward to going to London next month.</p>
          </div>
          <div>
            <p>তুমি এখন কী প্রত্যাশা করছ?</p>
            <p>What are you looking forward to now?</p>
          </div>
          <div>
            <p>আমার এখন কী প্রত্যাশা করা উচিৎ?</p>
            <p>What should I look forward to now?</p>
          </div>
          <div>
            <p>আমরা তোমার উত্তর প্রত্যাশা/ উত্তরের জন্য প্রতীক্ষা করছিলাম</p>
            <p>We were looking forward to your reply.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোন বিষয়ে বা কোনকিছু করার বিষয়ে নিশ্চিত হওয়া বোঝাতে be(am, is,
            are...) + sure of/about + v+ing/(something) ব্যবহৃত হয়। <br />
            sure of/about এর স্থলে আরও কিছু স্ট্রাকচার ব্যবহার করা যায়। যেমন ঃ{" "}
            <br />
            confident of/about <br />
            convinced of/about <br />
            positive about <br />
            clear about
          </p>
          <div>
            <p>আমি সফলতা অর্জনের ব্যপারে নিশ্চিত।</p>
            <p>I am sure/confident about/of achieving success.</p>
          </div>
          <div>
            <p>আমি আমার সফলতার ব্যপারে নিশ্চিত।</p>
            <p>I am sure about/of my success.</p>
          </div>
          <div>
            <p>বাংলাদেশ এশিয়া কাপ জিতার বিষয়ে নিশ্চিত ছিল।</p>
            <p>Bangladesh was sure of winning the Asia Cup.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে পছন্দ করা বা ভালবাসা বোঝাতে be(am, is, are...) + fond
            of + v+ing ব্যবহৃত হয়। <br />
            কোনকিছুকে/কাউকে পছন্দ করা বা ভালবাসা বোঝাতে be(am, is, are...) +
            fond of + (something/somebody) ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি মিষ্টি পছন্দ করি/ভালবাসি।</p>
            <p>I am fond of sweets.</p>
          </div>
          <div>
            <p>আমি মিষ্টি খেতে পছন্দ করি/ভালবাসি।</p>
            <p>I am fond of eating sweets.</p>
          </div>
          <div>
            <p>সে আমাকে ভালবাসেনা।</p>
            <p>He is not fond of me.</p>
          </div>
          <div>
            <p>সে গান গাইতে ভালবাসে কিন্তু তার ভাই নাচতে ভালবাসে।</p>
            <p>She is fond of singing but her brother is fond of dancing.</p>
          </div>
          <div>
            <p>সে ধূমপান পছন্দ করত/ভালবাসতো।</p>
            <p>He was fond of smocking.</p>
          </div>
          <div>
            <p>তুমি কি গল্প বলতে ভালোবাস?</p>
            <p>Are you fond of telling stories?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookForward;
