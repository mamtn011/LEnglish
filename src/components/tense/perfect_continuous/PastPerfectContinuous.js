const PastPerfectContinuous = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Past Perfect Continuous</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject অতীতে কোন কাজ একটি সময় ধরে/থেকে/যাবত করতেছিলো বোঝালে Past
            Perfect Continuous Tense হয়।
          </p>
          <p>Subject + had been + v+ing + Object </p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি এক ঘণ্টা ধরে যাচ্ছিলাম।</p>
          <p>I had been going for an hour.</p>
        </div>
        <div>
          <p>সে এক ঘণ্টা ধরে খাচ্ছিল</p>
          <p>He had been eating for an hour.</p>
        </div>
        <div>
          <p>সে এক ঘণ্টা ধরে রান্না করছিল।</p>
          <p>He had been cooking for an hour.</p>
        </div>
        <div>
          <p>তারা সকাল থেকে চেষ্টা করছিল।</p>
          <p>They had been trying since morning.</p>
        </div>
      </div>
    </div>
  );
};

export default PastPerfectContinuous;
