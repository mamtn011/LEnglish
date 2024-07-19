import React, { useState } from "react";

const UseOfThere = () => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="btn-lesson"
        onClick={() => setIsContentOpen(!isContentOpen)}
      >
        Use of There
      </button>
      <div
        className={`${isContentOpen ? "flex" : "hidden"}  flex-col gap-4 mb-6`}
      >
        <div>
          <p className="font-bold">Description:</p>
          <p>
            কোথাও কোনকিছু আছে বা ছিল বোঝালে There ব্যবহার করতে হয়। এই There এর
            কোন আর্থ নেই। এটাকে Introductory There বলা হয়।
          </p>
          <p>
            There + Be verb (am, is, are, was, were) + কি আছে/ছিল + কোথায়
            আছে/ছিল।
          </p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমাদের গ্রামে ৩টি স্কুল আছে।</p>
          <p>There are three schools in our village.</p>
        </div>
        <div>
          <p>আমাদের অনেক ভুল ছিল।</p>
          <p>We had many mistakes.</p>
        </div>
      </div>
    </div>
  );
};

export default UseOfThere;
