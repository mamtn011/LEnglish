const HadBetter = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Had Better</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              Had better একটি Modal prase. এটিকে নেগেটিভ করার জন্য had better এর
              পরে not বসে। আর প্রশ্ন করার জন্য শুধু had সাব্জেক্টের আগে বসে।
            </p>
            <p>বরং কোনকিছু করা ভালো বোঝাতে had better ব্যবহৃত হয়।</p>
          </div>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <div>
            <p>তোমার বরং সেখানে যাওয়াই ভালো।</p>
            <p>You had better go there.</p>
          </div>
          <div>
            <p>তোমার বরং সেখানে না যাওয়াই ভালো।</p>
            <p>You had better not go there.</p>
          </div>
          <div>
            <p>পুলিশ আসার আগে আমাদের বরং এই স্থানটি পরিত্যাগ করা ভালো।</p>
            <p>We had better leave this place before the police come.</p>
          </div>
          <div>
            <p>তোমার বরং সময় অপচয় না করাই ভালো।</p>
            <p>You had better not waste time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadBetter;
