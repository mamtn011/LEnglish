import { useState } from "react";

const BeVerb = () => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="btn-lesson"
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        Be Verb
      </button>
      <div
        className={`${isContentOpen ? "flex" : "hidden"}  flex-col gap-4 mb-6`}
      >
        <div>
          <p className="font-bold">Description:</p>
          <p>
            Subject কোন কাজ না করে নিজেই কোনকিছু অথবা নিজেই কোথাও আছে বা ছিল
            বোঝালে Be Verb বসে।
          </p>
          <p>am / is / are = হয় / আছে</p>
          <p>was / ware = ছিল</p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমার বাবা একজন ডাক্তার।</p>
          <p>My father is a doctor.</p>
        </div>
        <div>
          <p>মোবারক এখন ঢাকাতে আছে।</p>
          <p>Mubarak is in Dhaka now.</p>
        </div>
        <div>
          <p>আব্দুল্লাহ গতকাল বাড়িতে (গ্রামে) ছিল।</p>
          <p>Abdullah was in village yesterday.</p>
        </div>
        <div>
          <p>বাংলাদেশ একটি নদীমাতৃক দেশ।</p>
          <p>Bangladesh is a riverine country.</p>
        </div>
        <div>
          <p>কম্পিউটার আধুনিক বিজ্ঞানের এক বিস্ময়কর আবিষ্কার।</p>
          <p>Computer is a wonderful invention of modern science.</p>
        </div>
        <div>
          <p>পানি আমাদের পরিবেশের একটি গুরুত্বপূর্ণ উপাদান।</p>
          <p>Water is an important element of our environment.</p>
        </div>
        <div>
          <p>ড. ইউনুস আমাদের দেশের জন্য আশীর্বাদ স্বরূপ।</p>
          <p>Dr. Yunus is a blessing for our country.</p>
        </div>
        <div>
          <p>লোডশেডিং আমাদের দেশের জন্য একটি অভিষাপ।</p>
          <p>Load-shedding is a curse for our country.</p>
        </div>
        <div>
          <p>একুশে ফেব্রুয়ারি বাংলাদেশের ইতিহাসে একটি স্মরণীয় দিন।</p>
          <p>
            Twenty first February is a red-letter day in the history of
            Bangladesh.
          </p>
        </div>
        <div>
          <p>বাকস্বাধীনতা একটি গনতান্ত্রিক দেশের লোকজনের মৌলিক অধিকার।</p>
          <p>
            Freedom of speech is a fundamental right for the people of a
            democratic country.
          </p>
        </div>
        <div>
          <p>বাংলাদেশ থেকে দুর্নিতি দূর করা সরকারের জন্য একটি বড় চ্যালেঞ্জ।</p>
          <p>
            Removing corruption from Bangladesh is a big challenge for the
            government.
          </p>
        </div>
        <div>
          <p>আমার সপ্ন হলো একজন বিলিয়নিয়ার হওয়া।</p>
          <p>
            My dream is being a billioneer. Or, Being a billioneer is my dream.
          </p>
        </div>
        <div>
          <p>বিদ্যুৎ একটি দেশের প্রধান চালিকাশক্তি।</p>
          <p>Electricity is the main driving force of a country.</p>
        </div>
        <div>
          <p>বিশ্বকাপ জয় মেসির জন্য ছিল একটি অগ্নি পরীক্ষা।</p>
          <p>Wining the world cup was an acid test for Mesi.</p>
        </div>
        <div>
          <p>
            দক্ষিন এশিয়ার দেশগুলোর মধ্যে সবচেয়ে জনপ্রিয় ও উত্তেজনাকর খেলা হলো
            ক্রিকেট।
          </p>
          <p>
            Cricket is the most popular and exciting game in the countries of
            South Asia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeVerb;
