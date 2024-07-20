const FutureIndefinite = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Future Indefinite</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            বাংলা ক্রিয়ার সাথে ব, বে, বেন থাকলে এটা Future Indefinite Tense হয়।
          </p>
          <p>Subject + Shall/Will + v1 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি আলোচনা করবো।</p>
          <p>I will discuss.</p>
        </div>
        <div>
          <p>আমি ইংরেজি শিখবো।</p>
          <p>I will learn English.</p>
        </div>
        <div>
          <p>আমি রান্না করবো।</p>
          <p>I will cook.</p>
        </div>
        <div>
          <p>সে চেষ্টা করবে।</p>
          <p>He will try.</p>
        </div>
        <div>
          <p>সূর্য উদিত হবে।</p>
          <p>The will sun rise.</p>
        </div>
        <div>
          <p>তারা দরিদ্রতা দূর করবে।</p>
          <p>They will remove poverty.</p>
        </div>
      </div>
    </div>
  );
};

export default FutureIndefinite;
