const PresentPerfectContinuous = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Present Perfect Continuous</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject বর্তমানে কোন কাজ একটি সময় ধরে/থেকে/যাবত করতেছে বোঝালে
            Present Perfect Continuous Tense হয়।
          </p>
          <p>Subject + have/has + been + v+ing + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি এক ঘণ্টা ধরে যাচ্ছি।</p>
          <p>I have been going for an hour.</p>
        </div>
        <div>
          <p>সে এক ঘণ্টা ধরে খাচ্ছে।</p>
          <p>He has been eating for an hour.</p>
        </div>
        <div>
          <p>সে এক ঘণ্টা যাবত রান্না করছে।</p>
          <p>He has been cooking for an hour.</p>
        </div>
        <div>
          <p>তারা সকাল থেকে চেষ্টা করছে।</p>
          <p>They have been trying since morning.</p>
        </div>
      </div>
    </div>
  );
};

export default PresentPerfectContinuous;
