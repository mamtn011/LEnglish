const PresentContinuous = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Present Continuous</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject বর্তমানে কোন কাজ করতেছে বোঝালে Present Continuous Tense হয়।
          </p>
          <p>Subject + am/is/are + v+ing + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি খাচ্ছি।</p>
          <p>I am eating.</p>
        </div>
        <div>
          <p>সে রান্না করছে।</p>
          <p>He is cooking.</p>
        </div>
        <div>
          <p>তারা চেষ্টা করছে।</p>
          <p>They are trying.</p>
        </div>
      </div>
    </div>
  );
};

export default PresentContinuous;
