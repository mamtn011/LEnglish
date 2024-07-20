const PresentPerfect = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Present Perfect</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject কোন কাজ শেষ করেছে কিন্তু এর ফল এখনো আছে বোঝালে Present
            Perfect tense হয়। ।
          </p>
          <p>Subject + have/has + v3 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি খেয়েছি।</p>
          <p>I have eaten.</p>
        </div>
        <div>
          <p>সে শিখেছে।</p>
          <p>He has learnt.</p>
        </div>
        <div>
          <p>তিনি দরিদ্রতা দূর করেছেন।</p>
          <p>He has removed poverty.</p>
        </div>
        <div>
          <p>আমার বাবা একটি স্কুল প্রতিষ্ঠা করেছেন।</p>
          <p>My father has established a school.</p>
        </div>
      </div>
    </div>
  );
};

export default PresentPerfect;
