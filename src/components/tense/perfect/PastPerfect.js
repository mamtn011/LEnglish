const PastPerfect = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Past Perfect</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject কোন কাজ অতীতে শেষ করেছিল এবং এর এর ফল কিছু সময় ছিল বোঝালে
            Past Perfect tense হয়। ।
          </p>
          <p>Subject + had + v3 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি খেয়েছিলাম।</p>
          <p>I had eaten.</p>
        </div>
        <div>
          <p>সে শিখেছিল।</p>
          <p>He had learnt.</p>
        </div>
        <div>
          <p>তিনি দরিদ্রতা দূর করেছিলেন।</p>
          <p>He had removed poverty.</p>
        </div>
        <div>
          <p>আমার বাবা একটি স্কুল প্রতিষ্ঠা করেছিলেন।</p>
          <p>My father had established a school.</p>
        </div>
      </div>
    </div>
  );
};

export default PastPerfect;
