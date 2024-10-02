const May = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">May - Might</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2">
            <p className="text-red-500">
              May এবং Might এর ব্যবহার অনেকটা Can/Could এর মতই। May/Might
              সম্মানের সাথে (যেমন শিক্ষক বা অফিসের বস এর সাথে) বলার ক্ষেত্রে
              ব্যবহার হয়ে থাকে। সাধারণত possibility, permission, wish/hope ও
              obligation অর্থে May/Might ব্যবহার হয়ে থাকে।
            </p>
            <p className="text-red-500">
              <strong>NB: </strong> Might শুধুমাত্র Possibility অর্থে ব্যবহার
              হয়। কোন কিছু করা বা হওয়ার সম্ভাবনা বেশী থাকলে May আর কম থাকলে
              Might হয়। সম্ভাবনা 30% এর কম হলে Might আর 30% এর বেশী হলে May
              ব্যবহার করা যেতে পারে - এটার ধরা-বাঁধা কোন নিয়ম নেই।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-blue-500">Possibility:</p>
            <div>
              <p>আজ রাতে আমার বন্ধুরা আসতে পারে।</p>
              <p>My friends may come tonight.</p>
            </div>
            <div>
              <p>আজকে বৃষ্টি হতে পারে।</p>
              <p>It may/might rain today.</p>
            </div>
            <div>
              <p>আজকে বৃষ্টি হতে পারতো।</p>
              <p>It might have rained today.</p>
            </div>

            <div>
              <p>তুমি এই কলমটি সামীম লাইব্রেরীতে পেতে পারো।</p>
              <p>You may/might get this pen in Shamim Library.</p>
            </div>
            <div>
              <p>বাংলাদেশ আজকে ইন্ডিয়ার সাথে জিততেও পারে। (কম সম্মভাবনা)</p>
              <p>Bangladesh might win against India today.</p>
            </div>
            <div>
              <p>সে একজন ড্রাইভার হতে পারে।</p>
              <p>He may/might be a driver.</p>
            </div>
            <div>
              <p>সে বাড়িতে থাকতে পারে।</p>
              <p>He may/might be at home.</p>
            </div>
            <div>
              <p>সে বাড়িতে থাকতে পারতো।</p>
              <p>He might have been at home.</p>
            </div>

            <div>
              <p>তার অনেক টাকা থাকতে পারে।</p>
              <p>He may have a lot of money.</p>
            </div>
            <div>
              <p>তার অনেক টাকা থাকতে পারতো।</p>
              <p>He might have had a lot of money.</p>
            </div>
            <div>
              <p>সে এই কাজটি করে থাকতে পারে।</p>
              <p>He may have done this work.</p>
            </div>
            <div>
              <p>সে এই কাজটি করে থাকতে পারতো।</p>
              <p>He might have done this work.</p>
            </div>
            <div>
              <p>আমার যেতে হতে পারে।</p>
              <p>I may/might have to go.</p>
            </div>
            <div>
              <p>আমার যেতে হতে পারতো।</p>
              <p>I might have had to go.</p>
            </div>
            <div>
              <p>তারা এখন খেলতে থাকতে পারে। (সম্ভবত তারা এখন খেলছে)</p>
              <p>They may be playing now.</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-blue-500">Permission:</p>
            <div>
              <p>তুমি এখন যেতে পারো।</p>
              <p>You may go now.</p>
            </div>
            <div>
              <p>আমি কি (ভিতরে) আসতে পারি?</p>
              <p>May I come in?</p>
            </div>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-blue-500">Wish/Hope:</p>
            <div>
              <p>আল্লাহ তোমার মঙ্গল করুন!</p>
              <p>May Allah bless you!</p>
            </div>
            <div>
              <p>তুমি সুখী হও!</p>
              <p>May you be happy!</p>
            </div>
            <div>
              <p>!</p>
              <p>!</p>
            </div>
            <div>
              <p>!</p>
              <p>!</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-blue-500">Obligation:</p>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
            <div>
              <p>।</p>
              <p>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default May;
