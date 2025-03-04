const PassivePresent = () => {
  return (
    <div className="w-full">
      <button className="btn-lesson p-1">Present Tense</button>
      <div className={`flex flex-col gap-4 mb-6`}>
        <div>
          <p className="font-bold py-2">Description:</p>
          <div className="py-2">
            <p></p>
          </div>
          <p></p>
        </div>
        <p className="font-bold">Examples:</p>
        <div className="flex flex-col gap-4">
          <div>
            <p>।</p>
            <p>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassivePresent;
