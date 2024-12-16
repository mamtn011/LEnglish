const Able = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">
        Able to, Supposed to & Compelled to
      </button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              (Be) + able to : কোনকাজ করতে সক্ষম।
              <br />
              (Be) + unable to : কোনকাজ করতে অক্ষম।
              <br />
              (Be) + supposed to : কোনকিছু করার কথা আছে।
              <br />
              (Be) + compelled to : কোনকিছু করতে বাধ্য হওয়া।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোন কাজ করতে সক্ষম হওয়া বা পারা বোঝাতে be( am, is, are, was ...) +
            able to + v1 ব্যবহৃত হয়। <br /> এখানে able to + v1 এর পরিবর্তে
            capable of + v+ing ও ব্যবহার করা যায়।
            <br />
            অপর দিকে কোন কাজ করতে অক্ষম হওয়া বা না পারা বোঝাতে be( am, is, are,
            was ...) + unable to + v1 ব্যবহৃত হয়। <br /> এখানে unable to + v1 এর
            পরিবর্তে incapable of + v+ing ও ব্যবহার করা যায়।
          </p>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম/পারি।</p>
            <p>I am able to speak English.</p>
            <p>I am capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হচ্ছি/ পারছি।</p>
            <p>I am being able to speak English.</p>
            <p>I am being capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হয়েছি/পেরেছি।</p>
            <p>I have been able to speak English.</p>
            <p>I have been capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হলাম/পারলাম।</p>
            <p>I was able to speak English.</p>
            <p>I was capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হয়েছিলাম/পেরেছিলাম।</p>
            <p>I had been able to speak English.</p>
            <p>I had been capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হচ্ছিলাম/ পারছিলাম।</p>
            <p>I were being able to speak English.</p>
            <p>I were being capable of speaking English.</p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে সক্ষম হবো/ পারবো</p>
            <p>I will be able to speak English.</p>
            <p>I will be capable of speaking English.</p>
          </div>
          <div>
            <p>আমার ইংরেজিতে কথা বলতে সক্ষম হওয়া উচিৎ/ পাড়া উচিৎ।</p>
            <p>I should be able to speak English.</p>
            <p>I should be capable of speaking English.</p>
          </div>
          <div>
            <p>তোমার ইংরেজিতে কথা বলতে সক্ষম হতে হবে/ পারতে হবে।</p>
            <p>You have to be able to speak English.</p>
            <p>You have to be capable of speaking English.</p>
          </div>
          <div>
            <p>আমার মা বিষয়টি বোঝতে সক্ষম হয়েছে/পেরেছে।</p>
            <p>My mother has been able to understand the matter.</p>
          </div>
          <div>
            <p>সে লন্ডনে যেতে সক্ষম হয়েছিল/পেরেছিল।</p>
            <p>He had been able to go to London.</p>
          </div>
          <div>
            <p>সে কম্পিউটারটি ব্যবহার করতে/চালাতে পারছিলো।</p>
            <p>He was being able to use the computer.</p>
          </div>
          <div>
            <p>
              আমাদের সরকার আমাদের দেশ থেকে সকল প্রকার সমস্যা দূর করতে
              পারবে/সক্ষম হবে।
            </p>
            <p>
              Our government will be able to remove all kinds of problems from
              our country.
            </p>
          </div>
          <div>
            <p>আমি ইংরেজিতে কথা বলতে অক্ষম/সক্ষম নই/পারিনা।</p>
            <p>I am unable to speak English.</p>
            <p>I am incapable of speaking English.</p>
          </div>
          <div>
            <p>তুমি কি মনে কর যে আমার বন্ধু এই কাজটি করতে আক্ষম?</p>
            <p>Do you thing that my friend is unable to do this task?</p>
            <p>Do you thing that my friend is incapable of doing this task?</p>
          </div>
          <div>
            <p>যারা ইংরেজিতে কথা বলতে অক্ষম, তারা আন্তর্জাতিকভাবে বোবা।</p>
            <p>
              Those who are unable to speak English, are internationally dumb.
            </p>
            <p>
              Those who are incapable of speaking English, are internationally
              dumb.
            </p>
          </div>
          <div>
            <p>
              আমাদের দেশের জনগন দিনে তিন বেলা খাবার ব্যবস্থা করতে পারতনা/আক্ষম
              ছিল।
            </p>
            <p>
              The people of our country were unable to manage food three times
              in a day.
            </p>
            <p>
              The people of our country were incapable of managing food three
              times in a day.
            </p>
          </div>
          <div>
            <p>
              আমাদের দেশের শিক্ষা ব্যবস্থা আমাদের দেশের ছাত্রছাত্রীদেরকে নৈতিক
              শিক্ষা দিতে অক্ষম হয়েছে/ পারেনি।
            </p>
            <p>
              The education system of our country has been unable to give moral
              education to the students of our country.
            </p>
            <p>
              The education system of our country has been incapable of giving
              moral education to the students of our country.
            </p>
          </div>
          <div>
            <p>
              তুমি কেন মনে কর যে আমাদের দেশের নারীরা বিজ্ঞান ও প্রজুক্তিতে
              ভূমিকা রাখতে অক্ষম হচ্ছে/পারছেনা?
            </p>
            <p>
              Why do you think that the women of our country are being unable to
              play a role in science and technology?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করার কথা আছে বোঝাতে be( am, is, are, was ...) + supposed to
            + v1 ব্যবহৃত হয়। <br /> এখানে supposed to + v1 এর পরিবর্তে expected
            to + v1 ও ব্যবহার করা যায়।
          </p>
          <div>
            <p>আজকে তার এখানে আসার কথা আছে।</p>
            <p>He is supposed to come here today.</p>
            <p>He is expected to come here today.</p>
          </div>
          <div>
            <p>আমার বন্ধুর একটা কম্পিউটার কেনার কথা ছিল।</p>
            <p>My friend was supposed/expected to buy a computer.</p>
          </div>
          <div>
            <p>গতকাল তোমার সেখানে যাওয়ার কথা ছিল, কিন্তু তুমি গেলেনা কেন?</p>
            <p>
              You were supposed to go there yesterday, but why didn&apos;t you
              go?
            </p>
          </div>
          <div>
            <p>বাংলাদেশের কি গতকাল ভারতের বিরুদ্ধে একটি ম্যাচ খেলার কথা ছিল?</p>
            <p>
              Was Bangladesh supposed to play a match against India yesterday?
            </p>
          </div>
          <div>
            <p>তোমার কি সেখানে যাওয়ার কথা ছিল?</p>
            <p>Were you supposed to go there?</p>
          </div>
          <div>
            <p>কেন তোমার সেখানে যাওয়ার কথা ছিল?</p>
            <p>Why were you supposed to go there?</p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে বাধ্য হওয়া বোঝাতে be( am, is, are, was ...) + compelled
            to + v1 ব্যবহৃত হয়। <br /> compelld to + v1 এর আরও কিছু alternative
            আছে, সেগুলো হল ... forced to + v1, bound to + v1 and coerced into +
            v+ing. <br />
            এখানে মনে রাখতে হবে যে, bound to হল নীতি বা নতিকতার কারণে বাধ্য
            হওয়া। আর বাকীগুলো হল কেউ জোর করার কারণে বা বহিরাগত কোন চাপের কারণে
            বাধ্য হওয়া।
          </p>
          <div>
            <p>আমি ইংরেজি শিখতে বাধ্য।</p>
            <p>I am compelled/forced/bound to learn English.</p>
            <p>I am coerced into learning English.</p>
          </div>
          <div>
            <p>সে সেখানে যেতে বাধ্য ছিল।</p>
            <p>He was compelled to go there.</p>
          </div>
          <div>
            <p>আমার ভাই এই কাজটি করতে বাধ্য হচ্ছে।</p>
            <p>My brother is being compelled to do this work.</p>
          </div>
          <div>
            <p>আমি জানি তুমি সেখানে যেতে বাধ্য হবে।</p>
            <p>I know that you will be compelled to go there.</p>
          </div>
          <div>
            <p>বাংলাদেশ রহিঙ্গাদেরকে আশ্রয় দিতে বাধ্য হয়ে থাকতে পারে।</p>
            <p>Bangladesh may have been compelled to shelter the Rohingyas.</p>
          </div>
          <div>
            <p>তুমি কি এই কাজটি করতে বাধ্য?</p>
            <p>Are you compelled to do this work?</p>
          </div>
          <div>
            <p>কেন তুমি এই কাজটি করতে বাধ্য?</p>
            <p>Why are you compelled to do this work?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Able;
