const Going = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Going to</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              কোনকিছু করতে যাচ্ছি (ভবিষ্যতের কোন পরিকল্পনা বা ইচ্ছা) বোঝাতে
              be(am, is are...) going to + v1 ব্যবহৃত হয়।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <div>
            <p>আমি এক মাসের মধ্যে একটা গাড়ি কিনতে যাচ্ছি।</p>
            <p>i am going to buy a car within one month.</p>
          </div>
          <div>
            <p>আমার ভাই একজন পেশাদার ক্রিকেটার হতে যাচ্ছে।</p>
            <p>My brother is going to be a professional cricketer.</p>
          </div>
          <div>
            <p>
              মেয়েটি গতকাল আত্মহত্যা করতে যাচ্ছিলো কিন্তু আমি তাকে বাছিয়েছিলাম।
            </p>
            <p>
              The girl is going to commit suicide yesterday but I saved her.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Going;
