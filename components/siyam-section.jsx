import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const SiyamSection = () => {
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-bold text-gray-800">রোযা সেকশন</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2">
          <p className="text-lg text-gray-700">আজকে রোযা রেখেছেন?</p>
          <input
            type="checkbox"
            className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* কতজনকে দিয়েছেন? */}
        <div className="flex justify-between items-center pb-2 gap-2">
          <Progress value={progress} className="w-full" />
          <div>
            <p>৩/৩০</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiyamSection;
