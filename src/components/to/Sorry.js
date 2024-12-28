const Sorry = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Sorry, Happy, Shocked</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>Sorry to : কোনকিছু করে দুঃখিত বা দুঃখের সাথে করা।</p>
            <p>Happy/Glad/Pleased to : কোনকিছু করে খুশি/আনন্দিত হওয়া।</p>
            <p>Delighted to : কোনকিছু করে খুব খুশি/আনন্দিত হওয়া।</p>
            <p>Shocked to : কোনকিছু করে হতবাক/মর্মাহত হওয়া।</p>
            <p>
              Surprised/Amazed/Astonished to : কোনকিছু করে অবাক/বিস্মিত হওয়া।
            </p>
            <p>
              Excited/Eager/Keen to to : কোনকিছু করতে ভিশন/প্রচন্ড আগ্রহী হওয়া।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু দুঃখের সাথে করা বোঝাতে be(am, is, are...) + sorry to + v1
            ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি দুঃখের সাথে বলছি তুমি পরীক্ষায় ফেল করেছ।</p>
            <p>I am sorry to say that you have failed the exam.</p>
          </div>
          <div>
            <p>আমি দুঃখের সাথে জানাচ্ছি যে তোমার বাবা এখন হাস্পাতালে।</p>
            <p>
              I am sorry to inform you that your father is in the hospital now.
            </p>
          </div>
          <div>
            <p>আমি তোমাকে বিরক্ত করে দুঃখিত।</p>
            <p>I am sorry to disturb you.</p>
          </div>
          <div>
            <p>আমি তোমাকে বিরক্ত করছি বলে দুঃখিত।</p>
            <p>I am sorry to be disturbing you.</p>
          </div>
          <div>
            <p>আমি তোমাকে বিরক্ত করেছি বলে দুঃখিত।</p>
            <p>I am sorry to have disturbed you.</p>
          </div>
          <div>
            <p>আমি তোমাকে ১ মাস যাবত বিরক্ত করছি বলে দুঃখিত।</p>
            <p>I am sorry to have been disturbing you for one month.</p>
          </div>
          <p className="text-blue-400">
            কোনকিছুর জন্য বা কোনকিছু করার জন্য দুঃখিত হওয়া বোঝাতে sorry for
            something / v+ing ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি আমার অবহেলার জন্য দুঃখিত।</p>
            <p>I am sorry for my negligence.</p>
          </div>
          <div>
            <p>তোমাকে বিরক্ত করার জন্য আমি দুঃখিত।</p>
            <p>I am sorry for bothering you.</p>
          </div>
          <p className="text-blue-400">
            কারও জন্য দুঃখ/করুণা অনুভব করা বোঝাতে feel sorry for something
            ব্যবহৃত হয়।
          </p>
          <div>
            <p>লোকটি এই আসহায় শিশুদের জন্য করুণা অনুভব করলো।</p>
            <p>The man felt sorry for these helpless children.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করে খুশি/আনন্দিত হওয়া বোঝাতে Happy/Glad/Pleased to + v1
            ব্যবহৃত হয়। এখানে happy to - informal, glad to - formal আর pleased
            to - more formal অর্থ বহন করে।
          </p>
          <div>
            <p>আমি ইংরেজি শিখে খুশি/আনন্দিত।</p>
            <p>I am happy/glad to learn English.</p>
          </div>
          <div>
            <p>আমি তোমার সাথে কথা বলে খুশী হয়েছি।</p>
            <p>I am pleased to have talked to you.</p>
            <p>I have been happy to talk to you.</p>
          </div>
          <div>
            <p>তুমি জেনে খুশী হবে যে আমি পরীক্ষায় প্রথম হয়েছি।</p>
            <p>
              You will be happy to know that I came/have stood first in the
              exam.
            </p>
          </div>
          <div>
            <p>আমি এখানে আসতে পেরে খুশি/আনন্দিত।</p>
            <p>I am happy/glad to be here.</p>
          </div>
          <div>
            <p>
              তোমার এটা শুনে খুশী হওয়া উচিৎ যে তোমার বাবা তোমার জন্য একটি
              স্মার্টফোন কিনেছেন।
            </p>
            <p>
              You should be happy to hear that your father has bought a
              smartphone for you.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করে খুব খুশি/আনন্দিত হওয়া বোঝাতে Delighted to + v1 ব্যবহৃত
            হয়।
          </p>
          <div>
            <p>আমি জানি তুমি এই চাকরীটা পেয়ে খুব খুশী হয়েছ।</p>
            <p>I know you have been delighted to get this job.</p>
          </div>
          <div>
            <p>আমার বাবা সেখানে যেতে পেরে খুব খুশী হয়েছিলো।</p>
            <p>My father was delighted to go there.</p>
          </div>
          <div>
            <p>তুমি কি আমাকে ঠকিয়ে খুব খুশী হয়েছ?</p>
            <p>Have you been delighted to cheat me?</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করে হতবাক/মর্মাহত হওয়া বোঝাতে Shocked to + v1 ব্যবহৃত হয়।
          </p>
          <div>
            <p>এই কাজটি করে আমি মর্মাহত।</p>
            <p>I am shocked to do this work.</p>
          </div>
          <div>
            <p>
              তোমার বাবার হঠাত মৃত্যুর কথা শুনে আমি গভিরভাবে মর্মাহত হয়েছিলাম।
            </p>
            <p>
              I was deeply shocked to hear about your father&apos;s sudden death
            </p>
          </div>
          <div>
            <p>তুমি জেনে হতবাক/মর্মাহত হবে যে তোমার ভাই পরীক্ষায় ফেল করেছে।</p>
            <p>
              You will be shocked to know that your brother has faild the exam.
            </p>
          </div>
          <div>
            <p>তোমার ব্যর্থতার কথা শুনে আমি হতবাক/মর্মাহত না হয়ে পারলাম না।</p>
            <p>I couldn&apos;t but be shocked to hear about your failure.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করে অবাক/বিস্মিত হওয়া বোঝাতে Surprised/Amazed/Astonished to
            + v1 ব্যবহৃত হয়। <br />
            amazed or astonished express a strong sense and surprsed is neutral.
          </p>
          <div>
            <p>আমি তোমার সাহসিকতা দেখে অবাক/বিস্মিত।</p>
            <p>I am surprised to see your bravery.</p>
            <p>I am astonished by your bravery.</p>
            <p>I am amazed by your courage.</p>
          </div>
          <div>
            <p>আমি জেনে অবাক হয়েছিলাম যে ব্রাজিল পরাজিত হয়েছিলো।</p>
            <p>I was surrprised to know that Brazil was defeated.</p>
          </div>
          <div>
            <p>তুমি জেনে বিস্মিত হবে যে তোমার ভাই এই কাজটি করেছে।</p>
            <p>
              You will be surprised to know that your brother has done this
              work.
            </p>
          </div>
          <div>
            <p>তুমি ফুটবল পছন্দ করনা শুনে সবাই অবাক হয়ে যেতে পারে।</p>
            <p>
              Everyone might be surprised to hear that you don&apos;t like
              football.
            </p>
          </div>
          <div>
            <p>আমি তোমার অবহেলা দেখে অবাক হয়েছি।</p>
            <p>I have been surprised to see your negligence.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            কোনকিছু করতে ভিশন/প্রচন্ড আগ্রহী হওয়া বোঝাতে Excited/Eager/Keen to +
            v1 ব্যবহৃত হয়। <br />
            শুধু আগ্রহী বোঝাতে interested to/in ব্যবহৃত হয়।
          </p>
          <div>
            <p>আমি তোমার সাথে কথা বলতে ভীষণ আগ্রহী ছিলাম।</p>
            <p>I was excited/eager/keen to talk to you.</p>
          </div>
          <div>
            <p>সে এই কাজটি করতে প্রচন্ড আগ্রহী হবে।</p>
            <p>He will be egar to do this work.</p>
          </div>
          <div>
            <p>
              আসন্ন পরীক্ষায় একটা ভালো রেজাল্ট করার জন্য তোমার প্রচন্ড আগ্রহী
              হওয়া উচিৎ।
            </p>
            <p>
              You should be eager to get a good result in the upcoming exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorry;
