const Need = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Need</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-600">
            <p>
              <span className="font-semibold">NB: </span>Need শুধু মাত্র না-বোধক
              ও প্রশ্নবোধকে Modal হিসেবে ব্যবহার করা যায়।
            </p>
            <p>Need = কোনকিছু প্রয়োজন/দরকার।</p>
            <p>Needed = কোনকিছু প্রয়োজন/দরকার ছিল।</p>
            <p>Need to + be = কোনকিছু হওয়া প্রয়োজন/দরকার।</p>
            <p>Needed to + be = কোনকিছু হওয়া প্রয়োজন/দরকার ছিল। (informal)</p>
            <p>
              Need to + have been = কোনকিছু হওয়া প্রয়োজন/দরকার ছিল। (formal-less
              used in modern English)
            </p>
            <p>Need to + have = কোনকিছু থাকা প্রয়োজন/দরকার।</p>
            <p>Needed to + have = কোনকিছু থাকা প্রয়োজন/দরকার ছিল।</p>
            <p>Need to + v1 = কোনকিছু করা প্রয়োজন/দরকার।</p>
            <p>Needed to + v1 = কোনকিছু করা প্রয়োজন/দরকার ছিল। (informal)</p>
            <p>
              Need to have + v3 = কোনকিছু করা প্রয়োজন/দরকার ছিল। (formal-less
              used in modern English)
            </p>
            <p>Need + v+ing = কোনকিছুকে কিছু করা প্রয়োজন/দরকার।</p>
            <p>If need be = প্রয়োজন হলে / যদি প্রয়োজন হয়। (If necessary)</p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমার একটি ল্যাপটপ দরকার।</p>
          <p>I need a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ দরকার ছিল।</p>
          <p>I needed a laptop.</p>
        </div>
        <div>
          <p>তার আরও সৎ হওয়া প্রয়োজন।</p>
          <p>He needs to be more honest.</p>
        </div>
        <div>
          <p>তার আরও সত্যবাদী হওয়া প্রয়োজন ছিল।</p>
          <p>He needed to be more truthful.</p>
          <p>He needs to have been truthful.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ থাকা দরকার।</p>
          <p>I need to have a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ থাকা দরকার ছিল।</p>
          <p>I needed to have a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ কেনা দরকার।</p>
          <p>I need to buy a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ কেনা দরকার ছিল।</p>
          <p>I needed to buy a laptop.</p>
          <p>I need to have bought a laptop.</p>
        </div>

        <div>
          <p>আমার ল্যাপটপটি পরিষ্কার করা দরকার।</p>
          <p>My laptop needs cleaning.</p>
        </div>
        <div>
          <p>তোমার বাবার আমাদের দেশের উন্নতির জন্য কিছু করা দরকার।</p>
          <p>
            Your father needs to do something for the development of our
            country.
          </p>
        </div>
        <div>
          <p>
            আমাদের সরকারের ২০২৪ সালের মধ্যে আমাদের দেশ থেকে সন্ত্রাসবাদ নির্মূল
            করা দরকার।
          </p>
          <p>
            Our government needs to root out terrorism from our country within
            2024.
          </p>
        </div>
        <div>
          <p>১৯৭১ সালে আমেরিকার আমাদের দেশকে সমর্থন করা দরকার ছিল।</p>
          <p>America needed to support our country in 1971.</p>
        </div>
        <div>
          <p>তোমার এসএসসি পরীক্ষায় আরও ভালো ফলাফল করা দরকার ছিল।</p>
          <p>You needed to make a better result in the SSC exam.</p>
        </div>
        <div>
          <p>প্রয়োজন হলে, আমি দেশের জন্য মরতে প্রস্তুত।</p>
          <p>If need be, I am ready to die for the country.</p>
        </div>
        <div>
          <p>যদি প্রয়োজন হয়, আমি তোমাকে ফোন করবো।</p>
          <p>If need be, I will phone you.</p>
        </div>
        <div>
          <p>প্রয়োজন হলে, তিনি আমাকে অনেক টাকা দেবেন।</p>
          <p>He will give me a lot of money if need be.</p>
        </div>

        {/* need + v+ing  */}
        <div>
          <p>গাড়িটি ধোয়া দরকার।</p>
          <p>The car needs washing.</p>
        </div>
        <div>
          <p>ডকুমেন্টগুলো সই করা দরকার।</p>
          <p>The documents need signing.</p>
        </div>
        <div>
          <p>বাড়িটি রং করা দরকার।</p>
          <p>The house needs painting.</p>
        </div>
        <div>
          <p>বাগানটি আগাছা পরিষ্কার করা দরকার।</p>
          <p>The garden needs weeding (নিড়ানি).</p>
        </div>
        <div>
          <p>তোমার জুতাগুলো পালিশ করা দরকার।</p>
          <p>Your shoes need polishing.</p>
        </div>
        <div>
          <p>প্রিন্টারটিতে কালি ভরা দরকার।</p>
          <p>The printer needs refilling with ink.</p>
        </div>
        <div>
          <p>বেড়াটি মেরামত করা দরকার।</p>
          <p>The fence needs repairing.</p>
        </div>
        <div>
          <p>মেঝেটি মুছে ফেলা দরকার।</p>
          <p>The floor needs mopping.</p>
        </div>
        <div>
          <p>কাপড়গুলো ইস্ত্রি করা দরকার।</p>
          <p>The clothes need ironing.</p>
        </div>
        <div>
          <p>চুলগুলো কাটা দরকার।</p>
          <p>The hair needs cutting.</p>
        </div>
      </div>
    </div>
  );
};

export default Need;
