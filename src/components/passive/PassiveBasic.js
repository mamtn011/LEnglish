const PassiveBasic = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Basic</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-500">
            <p>
              সাধারণত কোন ব্যাকে কর্মের কর্তা উল্যেখ না থাকলে বাক্যটি passive
              হয়। যেমনঃ এখানে ক্রিকেট খেলা হয়েছে। এই ব্যাকে ক্রিকেট কে বা কারা
              খেলেছে তার উল্যেখ নেই, তাই এটি passive. মনে রাখতে হবে, passive
              ব্যাকে সর্বদা v3 (verb এর past participle form) হয়। Passive এর
              অনেকগুলো structure রয়েছে। নীচে সেগুলো উল্যেখ করা হলো।
            </p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Structures with examples:</p>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-blue-500">Present Indefinite:</span> Subject +
            am/is/are + v3 ... <br />
            <span className="text-blue-500">Past Indefinite:</span> Subject +
            was/ware + v3 ... <br />
            <span className="text-blue-500">Future Indefinite:</span> Subject +
            will be + v3
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা হয়।</p>
            <p>Cricket is played here.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হলো।</p>
            <p>Cricket was played here.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হবে।</p>
            <p>Cricket will be played here.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-blue-500">
            <span className="text-blue-500">All Continuous:</span> Subject +
            auxiliary + being + v3 ... <br />
            <strong className="text-red-500">NB: </strong>
            <span className="text-red-500">
              Perfect Continuous Tense is not normally used in passive voice.
            </span>
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা হচ্ছে।</p>
            <p>Cricket is being played here.</p>
          </div>
          <div>
            <p>এখানে তিন ঘণ্টা ধরে ক্রিকেট খেলা হচ্ছে।</p>
            <p>Cricket has been being played here for three hours.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হচ্ছিলো।</p>
            <p>Cricket was being played here.</p>
          </div>
          <div>
            <p>এখানে তিন ঘণ্টা ধরে ক্রিকেট খেলা হচ্ছিলো।</p>
            <p>Cricket had been being played here for three hours.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হতে থাকবে।</p>
            <p>Cricket will be being played here.</p>
          </div>
          <div>
            <p>এখানে তিন ঘণ্টা ধরে ক্রিকেট খেলা হতে থাকবে।</p>
            <p>Cricket will have been being played here for three hours.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-blue-500">All Perfect:</span> Subject + (
            auxiliary + been ) + v3 ...
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা হয়েছে।</p>
            <p>Cricket has been played here.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হয়েছিলো।</p>
            <p>Cricket had been played here.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা হয়ে থাকবে।</p>
            <p>Cricket will have been played here.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-blue-500">All Modals:</span> Subject + modals
            + be + v3 ...
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা উচিৎ।</p>
            <p>Cricket should be played here.</p>
          </div>
          <div>
            <p>এখন ক্রিকেট খেলা যেতে পারে।</p>
            <p>Cricket can be played now.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-blue-500">Perfect Modals:</span> Subject +
            modals + been + v3 ...
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা উচিৎ ছিল।</p>
            <p>Cricket should have been played here.</p>
          </div>
          <div>
            <p>এখানে ক্রিকেট খেলা যেতে পারতো।</p>
            <p>Cricket could have been played here.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-blue-500">Imperative:</span> Let + subject +
            be + v3 ...
          </p>
          <div>
            <p>এখানে ক্রিকেট খেলা হোক।</p>
            <p>Let cricket be played here.</p>
          </div>{" "}
          <div>
            <p>বিষয়টি আলোচনা করা হোক।</p>
            <p>Let the matter be discussed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassiveBasic;
