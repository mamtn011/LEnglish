const Must = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Must</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <p>জোড়ালভাবে নিশ্চয়তা প্রদানের জন্য Must ব্যবহার হয়ে থাকে।</p>
          <p className="text-rose-600">
            Must is very confusing, please read and practice it carefully!
          </p>
          <div className="py-2 text-blue-600">
            <p>
              Must + be = অবশ্যই কোন কিছু হবে/হতে হবে, বা অবশ্যই কোথাও
              থাকবে/থাকতে হবে।
            </p>
            <p>
              Must + have been = অবশ্যই কোন কিছু ছিল/হতে হয়েছিল, বা অবশ্যই
              কোথাও ছিল/থাকতে হয়েছিল।
            </p>
            <p>Must + have = অবশ্যই কোন কিছু (অধীনে) থাকবে/থাকতে হবে।</p>
            <p>Must + have had = অবশ্যই কোন কিছু (অধীনে) ছিল/থাকতে হয়েছিল।</p>
            <p>Must + v1 = অবশ্যই কোন কিছু করবো/করতে হবে।</p>
            <p>
              Must + have + v3 = অবশ্যই (অতীতে) কোন কিছু করে থাকবো/করতে হয়েছিলো।
            </p>
            <p>Must + be + v+ing = অবশ্যই কোন কিছু করতে থাকবো।</p>
            <p>is/are + a must = অত্যাবশ্যক/অত্যাবশ্যকীয়।</p>

            <p>
              Must + be + v3 = অবশ্যই কাউকে কোন কিছু করা হবে/করতে হবে। (passive)
            </p>
            <p>
              Must + have been + v3 = অবশ্যই কাউকে কোন কিছু করা হয়েছে/করতে
              হয়েছে।(passive)
            </p>
          </div>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <div className="py-2 text-blue-600">
            <p>
              Must + be = অবশ্যই কোন কিছু হবে/হতে হবে, বা অবশ্যই কোথাও
              থাকবে/থাকতে হবে।
            </p>
            <p>
              Must + have been = অবশ্যই কোন কিছু ছিল/হতে হয়েছিল, বা অবশ্যই
              কোথাও ছিল/থাকতে হয়েছিল।
            </p>
          </div>
          <div>
            <p>অবশ্যই তিনি একজন ডাক্তার হবেন।</p>
            <p>অবশ্যই তাকে একজন ডাক্তার হতে হবে।</p>
            <p>He must be a doctor.</p>
          </div>
          <div>
            <p>অবশ্যই কালকে আমি ঢাকা থাকবো।</p>
            <p>অবশ্যই কালকে আমার ঢাকা থাকতে হবে।</p>
            <p>I must be in Dhaka tomorrow.</p>
          </div>
          <div>
            <p>অবশ্যই সে খুবই বুদ্ধিমান হবে।</p>
            <p>He must be very intelligent.</p>
          </div>
          <div>
            <p>অবশ্যই তারা এখন বাসায় থাকবে।</p>
            <p>They must be at home now.</p>
          </div>
          <div>
            <p>অবশ্যই এটা খুবই গুরুত্বপূর্ণ হবে।</p>
            <p>It must be very important.</p>
          </div>
          <div>
            <p>
              অবশ্যই এই বিশাল পরিমাণ তথ্য দেখার পর সে একজন বিশেষজ্ঞের মতোই
              জ্ঞানী হবে।
            </p>
            <p>
              He must be very knowledgeable after reviewing all this vast amount
              of information.
            </p>
          </div>
          <div>
            <p>
              অবশ্যই তার দীর্ঘ অভিজ্ঞতা এবং প্রচেষ্টার কারণে সে একজন সফল
              ব্যবসায়ী হবে।
            </p>
            <p>
              He must be a successful businessman due to his extensive
              experience and efforts.
            </p>
          </div>
          <div>
            <p>অবশ্যই তিনি একজন শিল্পি ছিলেন।</p>
            <p>অবশ্যই তাকে একজন শিল্পি হতে হয়েছিল।</p>
            <p>He must have been a singer.</p>
          </div>
          <div>
            <p>অবশ্যই তিনি একজন সৎ মানুষ ছিলেন।</p>
            <p>He must have been an honest man.</p>
          </div>
          <div>
            <p>অবশ্যই তিনি গতবছর বিদেশে ছিলেন।</p>
            <p>অবশ্যই তাকে গতবছর বিদেশে থাকতে হয়েছিল।</p>
            <p>He must have been abroad last year.</p>
          </div>
          <div>
            <p>আবহাওয়া নিশ্চয়ই খুব খারাপ ছিল।</p>
            <p>The weather must have been terrible.</p>
          </div>
          <div>
            <p>এত দীর্ঘ যাত্রার পর তুমি নিশ্চয়ই খুব ক্লান্ত ছিলে।</p>
            <p>You must have been tired after such a long journey.</p>
          </div>
          <div>
            <p>ভালো খবরটি শুনে তারা নিশ্চয়ই খুব খুশি ছিল।</p>
            <p>They must have been very happy to hear the good news.</p>
          </div>
          <div>
            <p>
              তিনি নিশ্চয়ই একজন মহান নেতা ছিলেন, যিনি অনেক মানুষকে অনুপ্রাণিত
              করেছেন।
            </p>
            <p>He must have been a great leader to inspire so many people.</p>
          </div>
          <div>
            <p>
              তিনি নিশ্চয়ই একজন চমৎকার ছাত্র ছিলেন, যিনি এত ভালো গ্রেড
              পেয়েছেন।
            </p>
            <p>
              She must have been an excellent student to achieve such high
              grades.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="py-2 text-blue-600">
            <p>Must + have = অবশ্যই কোন কিছু (অধীনে) থাকবে/থাকতে হবে।</p>
            <p>Must + have had = অবশ্যই কোন কিছু (অধীনে) ছিল/থাকতে হয়েছিল।</p>
          </div>
          <div>
            <p>অবশ্যই তার একটি বড় বাড়ি থাকবে।</p>
            <p>অবশ্যই তার একটি বড় বাড়ি থাকতে হবে।</p>
            <p>He must have a big house.</p>
          </div>
          <div>
            <p>অবশ্যই তোমার একটি পরিকল্পনা থাকবে।</p>
            <p>অবশ্যই তোমার একটি পরিকল্পনা থাকতে হবে।</p>
            <p>You must have a plan.</p>
          </div>
          <div>
            <p>অবশ্যই তার একটি ব্যস্ত সময়সূচি থাকবে।</p>
            <p>She must have a busy schedule.</p>
          </div>
          <div>
            <p>
              অবশ্যই তার একটি বড় লাইব্রেরি থাকবে, যেখানে সে তার সমস্ত প্রিয়
              বইগুলো রেখেছে।
            </p>
            <p>
              He must have a large library where he/she keeps all of his
              favorite books.
            </p>
          </div>
          <div>
            <p>
              অবশ্যই তার কাছে একটি নির্দিষ্ট পরিকল্পনা থাকবে, কারণ সে এই ধরনের
              পরিস্থিতি মোকাবিলায় সবসময় প্রস্তুত থাকে।
            </p>
            <p>
              He must have a specific plan, as he is always prepared to handle
              such situations.
            </p>
          </div>
          <div>
            <p>
              অবশ্যই তোমার একটি ভালো ধারণা থাকবে, কারণ তুমি সবসময় সৃজনশীল
              সমাধান নিয়ে আস।
            </p>
            <p>
              You must have a good idea, as you always come up with creative
              solutions.
            </p>
          </div>
          <div>
            <p>
              অবশ্যই তার কাছে একটি মূল্যবান বস্তু থাকবে, যেহেতু সে এটিকে এত
              যত্নের সাথে দেখাশোনা করে।
            </p>
            <p>
              She must have a valuable possession, as she takes such good care
              of it.
            </p>
          </div>
          <div>
            <p>তার অবশ্যই আগে চলে যাওয়ার একটি ভালো কারণ ছিল।</p>
            <p>He must have had a good reason for leaving early.</p>
          </div>
          <div>
            <p>ঝড়ের সময় অবশ্যই তাদের কঠিন সময় ছিল/কেটেছে।</p>
            <p>They must have had a tough time during the storm.</p>
          </div>
          <div>
            <p>তোমার অবশ্যই পরিকল্পনা নিয়ে কিছু সন্দেহ ছিল।</p>
            <p>You must have had some doubts about the plan.</p>
          </div>
          <div>
            <p>আমাদের নিশ্চয়ই বৈঠকের সময় নিয়ে ভুল বোঝাবুঝি ছিল/হয়েছে।</p>
            <p>We must have had a misunderstanding about the meeting time.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="py-2 text-blue-600">
            <p>Must + v1 = অবশ্যই কোন কিছু করবো/করতে হবে।</p>
            <p>Must + have + v3 = অবশ্যই (অতীতে) কোন কিছু করে থাকবে/করেছে।</p>
          </div>
          <div>
            <p>আমি অবশ্যই আজকের মধ্যে এই কাজ শেষ করবো।</p>
            <p>আমাকে অবশ্যই আজকের মধ্যে এই কাজ শেষ করতে হবে।</p>
            <p>I must finish this work today.</p>
          </div>
          <div>
            <p>পরীক্ষায় পাশ করতে হলে তাকে অবশ্যই কঠোর পরিশ্রম করতে হবে।</p>
            <p>She must study hard to pass the exam.</p>
          </div>
          <div>
            <p>তোমাকে অবশ্যই তোমার বাবা-মায়ের কথা শুনতে হবে।</p>
            <p>You must listen to your parents.</p>
          </div>
          <div>
            <p>তাদেরকে অবশ্যই বৈঠকের জন্য সময়মতো আসতে হবে।</p>
            <p>They must arrive on time for the meeting.</p>
          </div>
          <div>
            <p>অবশ্যই আমাদের পরিবেশ রক্ষা করতে হবে।</p>
            <p>We must protect the environment.</p>
          </div>
          <div>
            <p>তুমি অবশ্যই পরীক্ষার আগে তোমার পাঠ সম্পূর্ণ করবে।</p>
            <p>You must complete your lesson before the exam.</p>
          </div>
          <div>
            <p>তুমি অবশ্যই এই বইটা পড়বে কারণ এটি খুব মজার।</p>
            <p>You must read this book because it is very interesting.</p>
          </div>
          <div>
            <p>তোমার বন্ধু একজন ফাঁকিবাজ। সে অবশ্যই পরীক্ষায় ফেল করবে।</p>
            <p>Your friend is a slacker. He must fail in the exam.</p>
          </div>
          <div>
            <p>আমরা নিশ্চয়ই বাসটি মিস করেছি।</p>
            <p>We must have missed the bus.</p>
          </div>
          <div>
            <p>তিনি নিশ্চয়ই বৈঠকের সময় ভুলে গেছেন।</p>
            <p>He must have forgotten the meeting time.</p>
          </div>
          <div>
            <p>তিনি নিশ্চয়ই তার চাবি হারিয়েছেন।</p>
            <p>She must have lost her keys.</p>
          </div>
          <div>
            <p>তারা নিশ্চয়ই সিনেমাটি ইতিমধ্যেই দেখে ফেলেছে।</p>
            <p>They must have seen the movie already.</p>
          </div>
          <div>
            <p>তিনি নিশ্চয়ই সময়মতো অ্যাসাইনমেন্টটি সম্পন্ন করেছেন।</p>
            <p>He must have completed the assignment on time.</p>
          </div>
          <div>
            <p>অবশ্যই আপনি জেনে থাকবেন যে আমার একটি মেয়ে আছে।</p>
            <p>You must have known that I have a daughter.</p>
          </div>
          <div>
            <p>
              তোমরা অবশ্যই কাজী নজরুল এর নাম শুনে থাকবে। তিনি একজন বিখ্যাত কবি
              ছিলেন।
            </p>
            <p>
              You must have heard the name of Kazi Nazrul. He was a great poet.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="py-2 text-blue-600">
            <p>Must + be + v+ing = অবশ্যই কোন কিছু করতে থাকবে/করছে।</p>
            <p>is/are + a must = অত্যাবশ্যক/অত্যাবশ্যকীয়।</p>
          </div>
          <div>
            <p>তিনি অবশ্যই একটি গুরুত্বপূর্ণ প্রকল্পে কাজ করছেন।</p>
            <p>She must be working on an important project.</p>
          </div>
          <div>
            <p>তারা অবশ্যই স্টেশনে বাসের জন্য অপেক্ষা করছে।</p>
            <p>They must be waiting for the bus at the station.</p>
          </div>
          <div>
            <p>তিনি নিশ্চয়ই তার চূড়ান্ত পরীক্ষার জন্য পড়ছেন।</p>
            <p>He must be studying for his final exams.</p>
          </div>
          <div>
            <p>এত দীর্ঘ যাত্রার পর তুমি নিশ্চয়ই ক্লান্ত বোধ করছো।</p>
            <p>You must be feeling tired after such a long journey.</p>
          </div>
          <div>
            <p>তিনি নিশ্চয়ই পরিবারের জন্য রাতের খাবার রান্না করছেন।</p>
            <p>She must be cooking dinner for the family.</p>
          </div>
          <div>
            <p>তুমি নিশ্চয়ই পার্টিটি উপভোগ করছো।</p>
            <p>You must be enjoying the party.</p>
          </div>
          <div>
            <p>আমরা নিশ্চয়ই গ্রামীণ এলাকা দিয়ে ভ্রমণ করছি।</p>
            <p>We must be traveling through the countryside.</p>
          </div>
          <div>
            <p>বাকস্বাধীনতা একটি গণতান্ত্রিক দেশের জন্য অত্যাবশ্যকীয় বিষয়।</p>
            <p>Freedom of speech is a must issue for a democratic country.</p>
          </div>
          <div>
            <p>সম্পর্কে বিশ্বাস গড়ে তোলার জন্য সততা থাকা অত্যাবশ্যক।</p>
            <p>Honesty is a must for building trust in relationships.</p>
          </div>
          <div>
            <p>ব্যক্তিগত উন্নয়নের জন্য শিক্ষার সুযোগ থাকা অত্যাবশ্যক।</p>
            <p>Access to education is a must for personal development.</p>
          </div>
          <div>
            <p>ভালো স্বাস্থ্যের জন্য একটি সুস্থ খাদ্যাভ্যাস থাকা অত্যাবশ্যক।</p>
            <p>A healthy diet is a must for maintaining good health.</p>
          </div>
          <div>
            <p>
              কর্মস্থলে নিরাপত্তা নিশ্চিত করার জন্য নিরাপত্তা ব্যবস্থা থাকা
              অত্যাবশ্যক।
            </p>
            <p>Safety measures are a must for workplace security.</p>
          </div>
          <div>
            <p>টেকসই উন্নয়নের জন্য পরিবেশ সংরক্ষণ করা অত্যাবশ্যক।</p>
            <p>
              Environmental conservation is a must for sustainable development.
            </p>
          </div>
          <div>
            <p>প্রকল্পের সফলতার জন্য সঠিক পরিকল্পনা করা অত্যাবশ্যক।</p>
            <p>Proper planning is a must for project success.</p>
          </div>
          <div>
            <p>ব্যবসার উন্নয়নের জন্য ভালো গ্রাহক সেবা থাকা অত্যাবশ্যক।</p>
            <p>Good customer service is a must for business growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Must;
