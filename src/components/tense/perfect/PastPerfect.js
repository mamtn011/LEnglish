const PastPerfect = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Past Perfect</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p className="py-2">
            অতীতে সংঘটিত হওয়া ২ টি কাজের মধ্যে যে কাজটি আগে সংঘটিত হয়েছিল তা
            Past Perfect tense হয়। আর যে কাজটি পরে সংঘটিত হয়েছিল তা Past
            Indefinite tense হয় ।
          </p>
          <p>Subject + had + v3 + Object</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>তিনি মারা যাওয়ার আগে স্কুলটি প্রতিষ্ঠা করেছিলেন।</p>
          <p>He had established the school before he died.</p>
        </div>
        <div>
          <p>ডাক্তার আসার পরে রুগী মারা গেল।</p>
          <p>The patient died after the doctor had come.</p>
        </div>
        <div>
          <p>রুগী মারা যাওয়ার পরে ডাক্তার আসলো।</p>
          <p>The doctor came after the patient had died.</p>
        </div>
      </div>
    </div>
  );
};

export default PastPerfect;
