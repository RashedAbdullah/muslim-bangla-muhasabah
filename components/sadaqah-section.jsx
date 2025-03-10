const SadaqahSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">দৈনিক সাদাকাহ</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label htmlFor="sadaqah" className="text-lg text-gray-700">
            আজকে সাদাকাহ আদায় করেছেন?
          </label>
          <input
            id="sadaqah"
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-lg text-gray-700" htmlFor="amount">
            সাদাকাহর পরিমাণ
          </label>
          <input
            id="amount"
            type="number"
            className="max-w-[120px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="পরিমাণ ৳"
          />
        </div>
        <div className="flex justify-end items-center border-b pb-4">
          <a
            href="https://muslimbangla.com/donation"
            target="_blank"
            className="text-lg bg-white text-green-600 shadow-md border py-2 px-6 rounded-xl"
          >
            ডোনেশন দিন
          </a>
        </div>
      </div>
    </div>
  );
};

export default SadaqahSection;
