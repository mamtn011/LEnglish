const PresentIndefinite = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Present Indefinite</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            বাংলা ক্রিয়ার সাথে অতিরিক্ত কোন বর্ন না থাকলে এটা Present Indefinite
            Tense হয়।
          </p>
          <p>Subject + v1 + Object</p>
          <p>NB. Subject 3rd person singular হলে verb এর শেষে s/es যোগ হয়।</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি আলোচনা করি।</p>
          <p>I discuss.</p>
        </div>
        <div>
          <p>আমি ইংরেজি শিখি।</p>
          <p>I learn English.</p>
        </div>
        <div>
          <p>আমি রান্না করি।</p>
          <p>I cook.</p>
        </div>
        <div>
          <p>সে চেষ্টা করে।</p>
          <p>He tries.</p>
        </div>
        <div>
          <p>সূর্য উদিত হয়।</p>
          <p>The sun rises.</p>
        </div>
        <div>
          <p>তারা দরিদ্রতা দূর করে।</p>
          <p>They remove poverty.</p>
        </div>
      </div>
    </div>
  );
};

export default PresentIndefinite;
