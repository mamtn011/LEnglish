const Need = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson">Need</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2 text-blue-600">
            <p>Need + noun/pronoun = কোনকিছু প্রয়োজন/দরকার।</p>
            <p>Need to + v1 = কোনকিছু করা প্রয়োজন/দরকার।</p>
            <p>Need have + v3 = কোনকিছু করা প্রয়োজন/দরকার ছিল</p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div>
          <p>আমার একটি ল্যাপটপ দরকার।</p>
          <p>I need a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ কেনা দরকার।</p>
          <p>I need to buy a laptop.</p>
        </div>
        <div>
          <p>আমার একটি ল্যাপটপ কেনা দরকার ছিল।</p>
          <p>I need have bought a laptop.</p>
        </div>
      </div>
    </div>
  );
};

export default Need;
