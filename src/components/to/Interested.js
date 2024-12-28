const Interested = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">
        Interested, Determined, Enthusiastic
      </button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>Interested to : কোনকিছু করতে আগ্রহী।</p>
            <p>Uninterested to : কোনকিছু করতে অনাগ্রহী।</p>
            <p>Determined to : কোনকিছু করতে দৃঢ় প্রতিজ্ঞ/সংকল্পিত।</p>
            <p>Enthusiastic about : কোনকিছু করার বিষয়ে অতি উৎসাহী।</p>
            <p>
              Unenthusiastic about : কোনকিছু করার বিষয়ে নিরুৎসাহিত/আগ্রহশূন্য
              হওয়া।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে আগ্রহী/অনাগ্রহী বোঝাতে be(am,is,are...) +
            interested/uninterested to + v1 ব্যবহৃত হয়। <br />
            এখানে interested/uninterested + in + v+ing ও ব্যবহার করা যায়। তবে এই
            দুইটির মধ্যে কিছুটা ভাবগত পার্থক্য আছে।
            <br />
            to + v1 এর মানে হল কাজটি আমি পারিনা বা কখনো করিনি কিন্তু করতে
            আগ্রহী। <br />
            আর in + v+ing এর মানে হল কাজটি আমি পারি বা অলরেডি শুরুকরা হয়েছে এবং
            তার প্রতি আগ্রহ প্রকাশ করা হচ্ছে। <br />
            এজন্য interested to এর পরে সাধারণত know, learn, see, fine, find out,
            understand, feel, hear এই verb গুলো বেশী ব্যবহৃত হয়ে থাকে।
          </p>
          <div>
            <p>আমি ইংরেজি শিখতে আগ্রহী।</p>
            <p>I am interested to learn English.</p>
            <p>I am interested in learning English.</p>
          </div>
          <div>
            <p>আমি ক্রিকেট খেলতে আগ্রহী।</p>
            <p>I am interested in playing cricket.</p>
          </div>
          <div>
            <p>আমার বাবা সত্যটা জানতে আগ্রহী।</p>
            <p>My father is interested to know the truth.</p>
            <p>My father is interested in knowing the truth.</p>
          </div>
          <div>
            <p>আমার বোন টিভিতে হিন্দি সিরিয়াল দেখতে আগ্রহী।</p>
            <p>My sister is interested in watching Hindi serials on TV.</p>
          </div>
          <div>
            <p>আমার বন্ধু সেখানে যেতে আগ্রহী ছিলোনা।</p>
            <p>My friend was not interested in going there.</p>
          </div>
          <div>
            <p>আমি মনে করি তিনি দরিদ্রদের সাহায্য করতে আগ্রহী হবে।</p>
            <p>I think he will be interested in helping the poor.</p>
          </div>
          <div>
            <p>তুমি কি তার ব্যর্থতার কারণ শুনতে আগ্রহী?</p>
            <p>Are you interested to hear the reason for his failure?</p>
            <p>Are you interested in hearing the reason for his failure?</p>
          </div>
          <div>
            <p>কেন তুমি তার ব্যর্থতার কারণ শুনতে আগ্রহী নও?</p>
            <p>
              Why aren&apos;t you interested in hearing the reason for his
              failure?
            </p>
          </div>
          <div>
            <p>আমি দাবা খেলতে অনাগ্রহী।</p>
            <p>I am uninterested in playing chess.</p>
          </div>
          <div>
            <p>আমি অজানাকে জানতে এবং অদেখাকে দেখতে অনাগ্রহী নই।</p>
            <p>
              I am not uninterested in knowing the unknown and seeing the
              unseen.
            </p>
            <p>I am not uninterested to know the unknown and see the unseen.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে দৃঢ় প্রতিজ্ঞ/সংকল্পিত বোঝাতে be(am,is,are...) +
            determined to + v1 ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি ইংরেজি শিখতে দৃঢ় প্রতিজ্ঞ।</p>
            <p>I am determined to learn English.</p>
          </div>
          <div>
            <p>আমার বন্ধু পরীক্ষায় একটি ভাল রেজাল্ট করতে দৃঢ় প্রতিজ্ঞ।</p>
            <p>My friend is determined to get a good result in the exam.</p>
          </div>
          <div>
            <p>সরকার দরিদ্রতা দূর করতে দৃঢ় প্রতিজ্ঞ ছিল।</p>
            <p>The goverment was determined to remove poverty.</p>
          </div>
          <div>
            <p>
              আমাদের সরকারের উচিৎ দেশের অশিক্ষিত লোকদের শিক্ষিত করতে দৃঢ়
              প্রতিজ্ঞ হওয়া।
            </p>
            <p>
              Our goverment should be determined to educate the uneducated
              people of the country.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করার বিষয়ে অতি উৎসাহী/নিরুৎসাহিত বোঝাতে be(am,is,are...) +
            enthusiastic/unenthusiastic about + v+ing ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি ইংরেজি শিখতে অতি উৎসাহী।</p>
            <p>I am enthusiastic about learning English.</p>
          </div>
          <div>
            <p>সে সেখানে যাওয়ার ব্যপারে অতি উৎসাহী ছিল।</p>
            <p>He was enthusiastic about going there.</p>
          </div>
          <div>
            <p>আমাদের সরকার দরিদ্রতা দূর করতে আতি উৎসাহী হচ্ছে।</p>
            <p>Our government is being enthusiastic about removing poverty.</p>
          </div>
          <div>
            <p>আমি এই বিষয়টি জানার জন্য অতি উৎসাহী নই।</p>
            <p>I am not very enthusiastic about knowing this matter.</p>
          </div>
          <div>
            <p>সে সেখানে যাওয়ার বিষয়ে নিরুৎসাহিত/আগ্রহশূন্য ছিল।</p>
            <p>He was unenthusaistic about going there.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
