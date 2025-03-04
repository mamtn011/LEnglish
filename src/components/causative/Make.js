const Make = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Make, Get, Have</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2">
            <p>
              আমরা জানি Eat মানে খাওয়া আর Feed মানে খাওয়ানো। I feed him - আমি
              তাকে খাওয়াই। আবার Learn মানে শেখা আর Teach মানে শেখানো। I teach
              you - আমি তোমাকে শেখাই।
            </p>
            <p>
              আবার, Understand মানে বোঝা, কিন্তু বোঝানোর ইংরেজি কী? আসলে বোঝানোর
              কোন নির্দিষ্ট ইংরেজী নাই। তাহলে (আমি তাকে বোঝাই।) এর ইংরেজি কিভাবে
              করবো! এক্ষেত্রে আমাদেরকে Make/Get/Have এর সাহায্য নিতে হবে।
            </p>
            <div className="text-blue-500 flex flex-col gap-2">
              <p>
                কাউকে কোনকিছু করানো বা কাওকে দিয়ে কোনকিছু করানো বোঝাতে Make or
                get of Have ব্যবহৃত হয়। এছাড়া কাউকে কোনকিছু করতে বাধ্য করা
                অর্থেও Make ব্যবহৃত হয়।
              </p>
              <p>
                <strong>Structure: </strong>
              </p>
              <p>
                Make + (somebody) + v1 + (something). বাধ্যকরে বা আদেশ দিয়ে
                করানো অর্থে।
              </p>
              <p>
                Get + (somebody) + to + v1 + (something). বোঝিয়ে বা কৌশলে রাজি
                করিয়ে করানো অর্থে।
              </p>
              <p>
                Have + (somebody) + v1 + (something). দায়িত্বপ্রপ্ত কাউকে দিয়ে
                করানো অর্থে।
              </p>
              <p>
                সাধারনত Spoken English এ Make এর ব্যবহার সবচেয়ে বেশী হয়। উপরে
                বর্নিত সকল ক্ষেত্রেই Make এর ব্যবহার হয়ে থাকে।
              </p>
            </div>
          </div>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500 font-semibold">Make</p>

          <div>
            <p>আমি তাকে বোঝাই।</p>
            <p>I make him understand.</p>
          </div>
          <div>
            <p>সে তাকে হাসায়।</p>
            <p>He makes her laugh.</p>
          </div>
          <div>
            <p>তোমার শিশুটিকে কাঁদানো উচিৎ না।</p>
            <p>You should not make the baby cry.</p>
          </div>
          <div>
            <p>সাপুড়ে সাপটিকে নাচাচ্ছে।</p>
            <p>The snake-charmer is making the snake dance.</p>
          </div>
          <div>
            <p>যদি তুমি আমাকে কাঁদাও তবে আমি আত্মহত্যা করবো।</p>
            <p>If you make me cry, I will commit suicide.</p>
          </div>
          <div>
            <p>তুমি আমাকে দেরি করাচ্ছ কেন?</p>
            <p>Why are you making me delay?</p>
          </div>
          <div>
            <p>আমি তোমাকে স্বীকার করাবো যে তুমি কাজটি করেছ।</p>
            <p>I will make you admit/confess that you have done this work.</p>
          </div>
          <div>
            <p>
              তোমার ব্যর্থতা আমাকে এই সিদ্ধান্ত গ্রহণ করিয়েছে/করতে বাধ্য করেছে।
            </p>
            <p>Your failure has made me take this decision.</p>
          </div>
          <div>
            <p>তোমার অবহেলা তোমাকে পরীক্ষায় ফেল করাবে।</p>
            <p>Your negligence will make you fail in the exam.</p>
          </div>
          <div>
            <p>আমি নিশ্চিত এই পোশাকটা তোমাকে মোটা দেখাবে।</p>
            <p>I am sure that this dress will make you look fat.</p>
          </div>
          <div>
            <p>সে তোমাকে এই বিষয়টা ভুলিয়ে দিবে।</p>
            <p>He will make you forget this matter.</p>
          </div>
          <div>
            <p>আমার বাবা আমাকে ঢাকা বিশ্ববিদ্যালয়ে পড়াতে চায়।</p>
            <p>My father wants to make me study at Dhaka University.</p>
          </div>
          <div>
            <p>সে তোমাকে কঠোর পরিশ্রম করাবে।</p>
            <p>He will make you work hard.</p>
          </div>
          <div>
            <p>তার জোকসগুলো সবাইকে হাসাল।</p>
            <p>His jokes made everyone laugh.</p>
          </div>
          <div>
            <p>সিনেমাটি আমাকে অনেক কাঁদিয়েছে।</p>
            <p>The movie has made me cry a lot.</p>
          </div>
          <div>
            <p>উচ্ছ আওয়াজ শিশুটিকে ঘুম থেকে জাগিয়ে দিয়েছিল।</p>
            <p>The loud noise had made the baby wake up.</p>
          </div>
          <div>
            <p>ম্যানেজার আমাকে দুপুরের মধ্যে রিপোর্ট শেষ করতে বাধ্য করবে।</p>
            <p>The manager will make me finish the report by noon.</p>
            <p>The manager will force me to finish the report by noon.</p>
          </div>
          <div>
            <p>তারা তাকে তার ভুলের জন্য দুঃখ প্রকাশ করতে বাধ্য করছে।</p>
            <p>They are making him apologize for his mistake.</p>
          </div>
          <div>
            <p>কোচ এই মৌসুমে খেলোয়াড়দের দ্রুত দৌড়াতে বাধ্য করেছেন।</p>
            <p>The coach has made the players run faster this season.</p>
          </div>
          <p className="text-blue-500 font-semibold">Get</p>
          <div>
            <p>আমি তাকে দিয়ে একটি চিঠি লিখালাম।</p>
            <p>I got him to write a letter.</p>
          </div>
          <div>
            <p>আমি তাকে দিয়ে বইটা কিনিয়েছি।</p>
            <p>I have got him to buy the book.</p>
          </div>
          <div>
            <p>সে তার ভাইকে দিয়ে কাজটি করাচ্ছে।</p>
            <p>He is getting his brother to do the work.</p>
          </div>
          <p className="text-blue-500 font-semibold">Have</p>
          <div>
            <p>আমি একজন মিস্ত্রি দিয়ে আমার গাড়িটা ঠিক করাই।</p>
            <p>I have a mechanic fix my car.</p>
          </div>
          <div>
            <p>আমি মালীকে দিয়ে আমার বাগান পরিষ্কার করাচ্ছি।</p>
            <p>I am having the gardener clean my garden.</p>
          </div>
          <div>
            <p>আমি আমার ছাত্রদের দিয়ে তাদের হোমওয়ার্ক করিয়েছি।</p>
            <p>I have had my students do their homework.</p>
          </div>
          <div>
            <p>আমি একজন ইঞ্জিনিয়ারকে দিয়ে ভবনটির নকশা করাবো।</p>
            <p>I will have an engineer design the building.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Make;
