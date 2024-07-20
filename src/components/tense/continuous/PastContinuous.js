const PastContinuous = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Past Continuous</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject অতীতে কোন কাজ করতেছিলো বোঝালে Past Continuous Tense হয়।
          </p>
          <p>Subject + was/ware + v+ing + Object </p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি খাচ্ছিলাম।</p>
          <p>I was eating.</p>
        </div>
        <div>
          <p>সে রান্না করছিল।</p>
          <p>He was cooking.</p>
        </div>
        <div>
          <p>তারা চেষ্টা করছিল।</p>
          <p>They were trying.</p>
        </div>
      </div>
    </div>
  );
};

export default PastContinuous;
