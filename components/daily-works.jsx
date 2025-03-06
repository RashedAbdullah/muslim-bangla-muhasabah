import { useEffect, useState } from "react";
import { LiaQuranSolid } from "react-icons/lia";
import { FaQuran, FaPray } from "react-icons/fa";
import { Amiri } from "next/font/google";

const amiri = Amiri({ weight: "400", subsets: ["arabic"] });

// ✅ লোকাল স্টোরেজ ব্যবস্থাপনা ফাংশন
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({ content: value, date: new Date().toDateString() })
  );
};

const getFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data?.date === new Date().toDateString() ? data.content : null;
};

// ✅ অ্যাসিনক্রোনাস ডাটা ফেচ ফাংশন
const fetchData = async (key, url, path) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const content =
      path.reduce((obj, key) => obj?.[key], data) || "ডাটা লোড করা যাচ্ছে না!";
    saveToLocalStorage(key, content);
    return content;
  } catch (error) {
    console.error(`Error fetching ${key}:`, error);
    return "ডাটা লোড করা যাচ্ছে না!";
  }
};

// ✅ সমস্ত ডাটা সংগ্রহ
const getDailyData = async (setters) => {
  const [setVerse, setHadith, setDua, setMasail] = setters;

  const verse =
    getFromLocalStorage("dailyVerse") ||
    (await fetchData(
      "dailyVerse",
      "https://api.muslimbangla.com/verse/random/",
      ["data", "verses", "modified_content"]
    ));

  const hadith =
    getFromLocalStorage("dailyHadith") ||
    (await fetchData(
      "dailyHadith",
      "https://api.topofstacksoftware.com/hadith/api/v2/hadith/random",
      ["data", 0, "description"]
    ));

  const dua =
    getFromLocalStorage("dailyDua") ||
    (await fetchData("dailyDua", "https://api.muslimbangla.com/dua/random", [
      "data",
      0,
      "dua",
    ]));

  const masail =
    getFromLocalStorage("dailyMasail") ||
    (await fetchData(
      "dailyMasail",
      "https://api.topofstacksoftware.com/quran-hadith/api/v2/single-question",
      ["data", "answer"]
    ));

  setVerse(verse);
  setHadith(hadith);
  setDua(dua);
  setMasail(masail);
};

// ✅ মূল কম্পোনেন্ট
const DailyWorks = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [verse, setVerse] = useState("লোড হচ্ছে...");
  const [hadith, setHadith] = useState("লোড হচ্ছে...");
  const [dua, setDua] = useState("লোড হচ্ছে...");
  const [masail, setMasail] = useState("লোড হচ্ছে...");

  useEffect(() => {
    getDailyData([setVerse, setHadith, setDua, setMasail]);

    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight - now;

    const timer = setTimeout(
      () => getDailyData([setVerse, setHadith, setDua, setMasail]),
      timeUntilMidnight
    );
    return () => clearTimeout(timer);
  }, []);

  const works = [
    {
      text: "আজকের আয়াত",
      icon: <FaQuran className="text-2xl mx-auto" />,
      content: (
        <p dir="rtl" className={`text-md ${amiri.className} leading-10`}>
          {verse}
        </p>
      ),
    },
    {
      text: "আজকের হাদিস",
      icon: <LiaQuranSolid className="text-2xl mx-auto" />,
      content: <p className="text-md">{hadith}</p>,
    },
    {
      text: "আজকের দু’আ",
      icon: <FaPray className="text-2xl mx-auto" />,
      content: (
        <p dir="rtl" className={`text-md ${amiri.className}`}>
          {dua}
        </p>
      ),
    },
    {
      text: "আজকের মাসায়েল",
      icon: <div className="text-xl mx-auto">📜</div>,
      content: (
        <p className="text-md leading-7 whitespace-pre-line">{masail}</p>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-center">
        {works.map((work, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow cursor-pointer ${
              selectedSection === index && "bg-green-500 text-white"
            }`}
            onClick={() => setSelectedSection(index)}
          >
            {work.icon}
            <p className="mt-3">{work.text}</p>
          </div>
        ))}
      </div>
      {selectedSection !== null && (
        <div className="bg-green-600 text-white px-2 rounded-xl mt-6 max-h-60 overflow-y-auto scrollbar">
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
