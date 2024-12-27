const Going = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Going to</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>Going to</p>
            <p>Willing to</p>
            <p>Unwilling to</p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে যাচ্ছি (ভবিষ্যতের কোন পরিকল্পনা বা ইচ্ছা) বোঝাতে be(am,
            is are...) going to + v1 ব্যবহৃত হয়।
          </p>

          <div>
            <p>আমি এক মাসের মধ্যে একটা গাড়ি কিনতে যাচ্ছি।</p>
            <p>i am going to buy a car within one month.</p>
          </div>
          <div>
            <p>আমার ভাই একজন পেশাদার ক্রিকেটার হতে যাচ্ছে।</p>
            <p>My brother is going to be a professional cricketer.</p>
          </div>
          <div>
            <p>
              মেয়েটি গতকাল আত্মহত্যা করতে যাচ্ছিলো কিন্তু আমি তাকে বাছিয়েছিলাম।
            </p>
            <p>
              The girl is going to commit suicide yesterday but I saved her.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে ইচ্ছুক/অনিচ্ছুক বোঝাতে be(am, is are...)
            willing/unwilling to + v1 ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি ইংরেজি শিখতে ইচ্ছুক।</p>
            <p>I am willing to learn English.</p>
          </div>
          <div>
            <p>সে ওখানে যেতে ইচ্ছুক ছিল।</p>
            <p>He was willing to go there.</p>
          </div>
          <div>
            <p>আমি মনে করি সে এই কাজটি করতে ইচ্ছুক হবে।</p>
            <p>I think that he will be willing to do this work.</p>
          </div>
          <div>
            <p>আমার বন্ধু সেখানে যেতে ইচ্ছুক হতে পারে।</p>
            <p>My friend may be willing to go there.</p>
          </div>
          <div>
            <p>তুমি কি আমার সাথে যেতে ইচ্ছুক?</p>
            <p>Are you willing to go with me?</p>
          </div>
          <div>
            <p>আমি তোমার সাথে যেতে ইচ্ছুক নই।</p>
            <p>I am not willing to go with you.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে অনিচ্ছুক ছিলাম।</p>
            <p>I was unwilling to speak English.</p>
          </div>
          <div>
            <p>
              যেহেতু সে এখানে আসতে অনিচ্ছুক সেহেতু তোমার তাকে অনুরোধ করা উচিৎ
              না।
            </p>
            <p>
              Since he is unwilling to come here, you should not request him.
            </p>
          </div>
          <div>
            <p>তুমি তাকে সাহায্য করতে অনিচ্ছুক কেন?</p>
            <p>Why are you unwilling to help him?</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করার সম্ভাবনা আছে/নেই বোঝাতে be(am, is are...)
            likely/unlikely to + v1 ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমাদের প্রধানমন্ত্রীর আজ লন্ডনে যাবার কথা আছে।</p>
            <p>Our Prime Minister is likely to go to London today.</p>
          </div>
          <div>
            <p>ব্রাজিলের আগামী বিশ্বকাপ জেতার সম্ভাবনা আছে।</p>
            <p>Brazil is likely to win next world cup.</p>
          </div>
          <div>
            <p>
              তার এখানে আসার সম্ভাবনা ছিল কিন্তু আমি বুঝতে পারলামনা কেন সে
              আসলোনা।
            </p>
            <p>
              He was likely to come here but I couldn&apos;t understand why he
              didn&apos;t come.
            </p>
          </div>
          <div>
            <p>তার এই কাজটি করার খুব সম্ভাবনা আছে।</p>
            <p>He is very likely to do this.</p>
          </div>
          <div>
            <p>
              আমার বন্ধুর পরীক্ষায় একটি ভাল রেজাল্ট করার ব্যপক সম্ভাবনা আছে।
            </p>
            <p>
              My friend is highly/extremely likely to get a good result in the
              exam.
            </p>
          </div>
          <div>
            <p>অশিক্ষিত লোকজনেরই এই কাজ করার বেশী সম্ভাবনা আছে।</p>
            <p>Illiterate people are more likely to do this.</p>
          </div>
          <div>
            <p>বাংলাদেশের ইংল্যান্ডকে হারানোর সম্ভাবনা কম।</p>
            <p>Bangladesh is less likely to defeat England.</p>
          </div>
          <div>
            <p>লোকটির আর বেছে থাকার সম্ভাবনা নেই।</p>
            <p>The man is unlikely to live any more.</p>
          </div>
          <div>
            <p>আজকের আবহাওয়া পরিবর্তন হওয়ার সম্ভাবনা নেই।</p>
            <p>Today&apos;s wethear is unlikely to change.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কারও মতো কোনকিছু করার সম্ভাবনা আছে/নেই বোঝাতে be(am, is are...) + as
            + likely/unlikely to + v1 + as + (somebody) ব্যবহৃত হয়। <br />
            It is likely that... : এটা সম্ভাব্য যে...। <br />
            It seems likely that... : এটা সম্ভাব্য বলে মনে হয় যে...।
          </p>
          <div>
            <p>তার তোমার মত ভালো রেজাল্ট করার সম্ভাবনা আছে।</p>
            <p>He is as likely to get a good result as you.</p>
          </div>
          <div>
            <p>এটা সম্ভাব্য যে চাকরীটা সেই পাবে। (পাওয়ার সম্ভাবনা তারই)</p>
            <p>It is likely that he will get the job.</p>
          </div>
          <div>
            <p>
              এটা সম্ভাব্য বলে মনে হয় যে মানুষ ২০৩০ সালের মধ্যে মঙ্গলগ্রহে অবতরন
              করবে।
            </p>
            <p>It seems likely that humans will land on Mars by 2030.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Going;
