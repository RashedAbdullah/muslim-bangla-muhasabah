import { useEffect, useState } from "react";
import { LiaQuranSolid } from "react-icons/lia";
import { FaQuran, FaPray } from "react-icons/fa";
import { Amiri } from "next/font/google";

const amiri = Amiri({ weight: "400", subsets: ["arabic"] });

const fetchVerse = async () => {
  try {
    const response = await fetch("https://api.muslimbangla.com/verse/random/");
    const data = await response.json();
    console.log(data?.data?.verses?.modified_content);
    if (data?.data?.verses?.modified_content) {
      const newVerse = {
        content: data?.data?.verses?.modified_content,
        date: new Date().toDateString(),
      };
      localStorage.setItem("dailyVerse", JSON.stringify(newVerse));
      return newVerse.content;
    }
  } catch (error) {
    console.error("Error fetching verse:", error);
    return "আয়াত লোড করা যাচ্ছে না!";
  }
};

const getVerse = async (setVerse) => {
  const storedVerse = JSON.parse(localStorage.getItem("dailyVerse"));
  const today = new Date().toDateString();

  if (!storedVerse || storedVerse.date !== today) {
    const newVerse = await fetchVerse();
    setVerse(newVerse);
  } else {
    setVerse(storedVerse.content);
  }
};

const DailyWorks = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [verse, setVerse] = useState("লোড হচ্ছে...");

  useEffect(() => {
    getVerse(setVerse);

    // ১২ টার সময় আপডেট করার জন্য টাইমার
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight - now;

    const timer = setTimeout(() => getVerse(setVerse), timeUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  const works = [
    {
      text: "আজকের আয়াত",
      icon: <FaQuran className="text-2xl mx-auto" />,
      content: (
        <p dir="rtl" className={`text-xl ${amiri.className} leading-10`}>
          {verse}
        </p>
      ),
    },
    {
      text: "আজকের হাদিস",
      icon: <LiaQuranSolid className="text-2xl mx-auto" />,
      content: (
        <p dir="rtl" className={`text-xl ${amiri.className}`}>
          الحديث الشريف
        </p>
      ),
    },
    {
      text: "আজকের দু’আ",
      icon: <FaPray className="text-2xl mx-auto" />,
      content: (
        <p dir="rtl" className={`text-xl ${amiri.className}`}>
          دعاء هذا اليوم
        </p>
      ),
    },
    {
      text: "আজকের মাসায়েল",
      icon: <div className="text-2xl mx-auto">📜</div>,
      content: (
        <p dir="rtl" className={`text-xl ${amiri.className}`}>
          مسائل هذا اليوم
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Section Selection */}
      <div className="grid grid-cols-2 gap-4 text-center">
        {works.map((work, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow cursor-pointer ${
              selectedSection === index && "bg-green-500 text-white"
            }`}
            onClick={() => setSelectedSection(index)}
          >
            {work.icon}
            <p className="mt-3">{work.text}</p>
          </div>
        ))}
      </div>

      {/* Display selected section content */}
      {selectedSection !== null && (
        <div className="bg-gray-800 text-white px-2 rounded-lg mt-6">
          <div className="py-3 border-b text-xl">
            <h3>{works[selectedSection].text}</h3>
          </div>
          <div className="py-5">{works[selectedSection].content}</div>
        </div>
      )}
    </div>
  );
};

export default DailyWorks;
