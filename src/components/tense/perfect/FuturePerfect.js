const FuturePerfect = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Future Perfect</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            Subject কোন কাজ ভবিষ্যতে করে থাকবে/ফেলবে বোঝালে Future Perfect tense
            হয়। ।
          </p>
          <p>Subject + shall/will + have + v3 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমি খেয়ে থাকবো।</p>
          <p>I will have eaten.</p>
        </div>
        <div>
          <p>সে শিখে থাকবে।</p>
          <p>He will have learnt.</p>
        </div>
        <div>
          <p>তিনি দরিদ্রতা দূর করে থাকবেন।</p>
          <p>He will have removed poverty.</p>
        </div>
        <div>
          <p>আমার বাবা একটি স্কুল প্রতিষ্ঠা করে থাকবেন।</p>
          <p>My father will have established a school.</p>
        </div>
      </div>
    </div>
  );
};

export default FuturePerfect;
