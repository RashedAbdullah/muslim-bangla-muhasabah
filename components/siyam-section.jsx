import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const SiyamSection = () => {
  const [progress, setProgress] = useState(0);
  const [fastingDays, setFastingDays] = useState(0);

  // ✅ লোকাল স্টোরেজ থেকে রোযার ডাটা লোড করা
  useEffect(() => {
    const savedDays = JSON.parse(localStorage.getItem("fastingDays")) || 0;
    setFastingDays(savedDays);
    setProgress((savedDays / 30) * 100);
  }, []);

  // ✅ ইউজার রোযা রাখলে আপডেট করা
  const handleFastingCheck = (e) => {
    if (e.target.checked) {
      const newDays = Math.min(fastingDays + 1, 30); // সর্বোচ্চ ৩০ দিন
      setFastingDays(newDays);
      setProgress((newDays / 30) * 100);
      localStorage.setItem("fastingDays", JSON.stringify(newDays));
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">রোযা সেকশন</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2">
          <p className="text-lg text-gray-700">আজকে রোযা রেখেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            onChange={handleFastingCheck}
          />
        </div>

        {/* প্রগ্রেসবার */}
        <div className="flex justify-between items-center pb-2 gap-2">
          <Progress value={progress} className="w-full" />
          <div>
            <p>{fastingDays}/30</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-700">আইয়্যামুল বীযের রোযা</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            onChange={handleFastingCheck}
          />
        </div>

        <div className="flex justify-between items-center pb-2">
          <p className="text-gray-700">সোমবার ও বৃহস্পতিবারের রোযা</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
            onChange={handleFastingCheck}
          />
        </div>
      </div>
    </div>
  );
};

export default SiyamSection;
