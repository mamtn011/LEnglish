const PastIndefinite = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Past Indefinite</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            বাংলা ক্রিয়ার সাথে ল, লে, লাম, ত, তে, তাম থাকলে এটা Past Indefinite
            Tense হয়।
          </p>
          <p>Subject + v2 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি আলোচনা করলাম।</p>
          <p>I discussed.</p>
        </div>
        <div>
          <p>আমি ইংরেজি শিখলাম।</p>
          <p>I learnt English.</p>
        </div>
        <div>
          <p>আমি রান্না করলাম।</p>
          <p>I cooked.</p>
        </div>
        <div>
          <p>সে চেষ্টা করল।</p>
          <p>He tried.</p>
        </div>
        <div>
          <p>সূর্য উদিত হয়েছিল।</p>
          <p>The sun rose.</p>
        </div>
        <div>
          <p>তারা দরিদ্রতা দূর করল।</p>
          <p>They removed poverty.</p>
        </div>
      </div>
    </div>
  );
};

export default PastIndefinite;
