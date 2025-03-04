const About = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">About to & Yet to</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              কোনকিছু করে করে বা হয় হয় ভাব কিন্তু করেনি বা হয়নি, এমন বোঝাতে (be)
              + about to + v1 ব্যবহৃত হয়। <br />
              কোনকিছু এখনো করা বাকী বা করা হয়নি বোঝাতে (be) + yet to + v1
              ব্যবহৃত হয়।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            be( am, is, are, was ....) + about to + v1 <br />
            এই স্ট্রাকচারটি মূলত কোন কাজ সম্পন্ন হওয়ার কাছাকাছি বা প্রায় সম্পন্ন
            হয়ে গেছে বোঝাতে ব্যবহৃত হয়। এখানে be verb পরিবর্তন করে বাক্য়ের কাল
            পরিবর্তন করা যায়।
          </p>
          <div>
            <p>লোকটি মরে মরে ভাব/অবস্থা।</p>
            <p>The man is about to die.</p>
          </div>
          <div>
            <p>আমটি পরে পরে অবস্থা।</p>
            <p>The mango is about to fall down.</p>
          </div>
          <div>
            <p>ফুলটি ফুটি ফুটি করেও ফুটিলোনা।</p>
            <p>The flower was about to bloom but didn&apos;t.</p>
          </div>
          <div>
            <p>আমার বন্ধুর পরীক্ষায় ফেল করে করে অবস্থা ছিল।</p>
            <p>My friend was about to fail in the exam.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            about to এর passive form. <br />
            be( am, is, are, was ....) + about to be + v3{" "}
          </p>
          <div>
            <p>লোকটিকে শাস্তি দেয় দেয় ভাব।</p>
            <p>The man is about to be punished.</p>
          </div>
          <div>
            <p>উত্তর কোরিয়েকে আক্রমন করে করে অবস্থা ছিল।</p>
            <p>North Korea was about to be attacked.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            be ( am, is, are, was ....) + yet to + v1{" "}
          </p>
          <div>
            <p>আমার এখনো বইটি পড়া বাকী/হয়নি।</p>
            <p>I am yet to read the book.</p>
          </div>
          <div>
            <p>আমার এখনো বরিশাল যাওয়া হয়নি।</p>
            <p>I am yet to go to Barisal.</p>
          </div>
          <div>
            <p>আমার বন্ধু এখনো চাকরী পায়নি।</p>
            <p>My friend is yet to get a job.</p>
          </div>
          <div>
            <p>আমি তখনো চাকরীটি পাইনি।</p>
            <p>I was yet to get the job.</p>
          </div>
          <div>
            <p>আমার তখনো ইন্ডিয়া যাওয়া বাকী ছিল।</p>
            <p>I had yet to go to India.</p>
          </div>
          <div>
            <p>বাংলাদেশের এখনো ক্রিকেট বিসশ্বকাপ জেতা বাকী।</p>
            <p>Bangladesh is yet to win the cricket world cup.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            yet to এর passive form. <br />
            be( am, is, are, was ....) + yet to be + v3{" "}
          </p>
          <div>
            <p>কাজটি এখনো করা হয়নি/বাকী।</p>
            <p>The task/work is yet to be done.</p>
          </div>
          <div>
            <p>বইটি এখনো পড়া হয়নি।</p>
            <p>The book is yet to be read.</p>
          </div>
          <div>
            <p>লোকটিকে এখনো শাস্তি দেয়া হয়নি।</p>
            <p>The man is yet to be punished.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
