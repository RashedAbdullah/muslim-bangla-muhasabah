"use client";

import { useState } from "react";
import { FaCopy, FaShareAlt, FaFilePdf } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import muhasabahIcon from "@/public/muhasabah_icon.png";
import muslimBanglaIcon from "@/public/MuslimBangla.png";
import DawahTable from "@/components/table/dawah-table";
import IlmTable from "@/components/table/ilm-table";
import JummahTable from "@/components/table/jumma-table";
import MorningEveningTable from "@/components/table/morning-evening-table";
import QuranTableSection from "@/components/table/quran-table";
import SadaqahTable from "@/components/table/sadaqah-table";
import SalahTable from "@/components/table/salah-table";
import SiyamTable from "@/components/table/siyam-table";
import SleepingTable from "@/components/table/sleeping-table";
import Image from "next/image";

const TrackingHistory = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  // লিংক কপি
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("📋 লিংক কপি হয়েছে!");
  };

  // শেয়ার ফাংশন
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "📊 মাসিক মুহাসাবা রিপোর্ট",
          url: window.location.href,
        });
        toast.success("✅ শেয়ার সম্পন্ন হয়েছে!");
      } catch (error) {
        toast.error("❌ শেয়ার করা সম্ভব হয়নি!");
      }
    } else {
      handleCopyLink();
      toast("⚠️ আপনার ব্রাউজার শেয়ার সাপোর্ট করে না, লিংক কপি করা হলো!");
    }
  };

  // PDF তৈরি
  const handleGeneratePDF = () => {
    setIsGenerating(true);

    const input = document.getElementById("pdf-report");
    input.style.display = "block"; // পিডিএফ তৈরি করার জন্য এলিমেন্ট দেখানো

    const scale = window.innerWidth <= 768 ? 3 : 2;

    html2canvas(input, { scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 পেজের প্রস্থ (মিলিমিটারে)
      const pageHeight = 297; // A4 পেজের উচ্চতা (মিলিমিটারে)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // প্রথম পৃষ্ঠার ছবি যোগ করা
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // যদি অতিরিক্ত কন্টেন্ট থাকে, নতুন পৃষ্ঠা তৈরি করা
      while (heightLeft > 0) {
        position -= pageHeight; // পরবর্তী পৃষ্ঠার জন্য অবস্থান আপডেট
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("tracking-history.pdf");
      setIsGenerating(false);
      toast.success("📄 PDF ডাউনলোড হয়েছে!");

      input.style.display = "none"; // পুনরায় হাইড করা
    });
  };

  return (
    <div className="p-4 md:p-6 bg-white shadow-2xl border border-gray-300">
      <div className="px-4 md:px-32 mx-auto">
        {/* শিরোনাম */}
        <div className="mb-8">
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
            মাসিক মুহাসাবা রিপোর্ট
          </h1>
          <div className="flex flex-col md:flex-row justify-between text-lg text-gray-800 border-b-2 pb-4 font-semibold">
            <h3 className="text-center md:text-left">
              👤 নাম: রাশেদ আব্দুল্লাহ
            </h3>
            <p className="text-center md:text-right">📅 মাস: মার্চ</p>
          </div>
        </div>

        {/* ট্র্যাকিং রিপোর্ট */}
        <div className="space-y-6">
          <SalahTable />
          <SiyamTable />
          <QuranTableSection />
          <MorningEveningTable />
          <JummahTable />
          <SleepingTable />
          <IlmTable />
          <DawahTable />
          <SadaqahTable />
        </div>
      </div>
      <Toaster />
      {/* PDF-এর জন্য আলাদা ডিজাইন, ডিফল্টভাবে Hidden */}
      <div id="pdf-report" className="hidden p-10 mx-auto bg-white text-black">
        <div className="mb-4">
          <div className="flex items-center justify-between align-middle">
            <img
              src="/muhasabah_icon.png"
              alt="Muhasabah icon"
              className="w-16 h-16"
            />
            <h1 className="text-center text-3xl font-bold text-gray-900 mb-6 tracking-wide">
              মাসিক মুহাসাবা রিপোর্ট
            </h1>
            <img
              src="/MuslimBangla.png"
              alt="Muslim Bangla icon"
              className="w-16 h-16"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between text-lg text-gray-800 border-b-2 pb-4 font-semibold">
            <h3 className="text-center md:text-left">
              👤 নাম: রাশেদ আব্দুল্লাহ
            </h3>
            <p className="text-center md:text-right">📅 মাস: মার্চ</p>
          </div>
        </div>
        <SalahTable />
        <SiyamTable />
        <QuranTableSection />
        <MorningEveningTable />
        <JummahTable />
        <SleepingTable />
        <IlmTable />
        <DawahTable />
        <SadaqahTable />
        <p className="text-center text-sm mt-5">
          Generated by muslimbangla.com
        </p>
      </div>

      {/* কপি, শেয়ার ও PDF বাটন */}
      <div className="mt-8 flex justify-center items-center gap-3">
        {/* মোবাইলে আইকন, ডেস্কটপে টেক্সট */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition relative group"
        >
          <FaCopy />
          <span className="hidden md:inline">লিংক কপি</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            কপি করুন
          </span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition relative group"
        >
          <FaShareAlt />
          <span className="hidden md:inline">শেয়ার করুন</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            শেয়ার করুন
          </span>
        </button>

        <button
          onClick={handleGeneratePDF}
          disabled={isGenerating}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-md text-white transition relative group ${
            isGenerating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          <FaFilePdf />
          <span className="hidden md:inline">
            {isGenerating ? "জেনারেট হচ্ছে..." : "PDF তৈরি করুন"}
          </span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            PDF ডাউনলোড
          </span>
        </button>
      </div>
    </div>
  );
};

export default TrackingHistory;
