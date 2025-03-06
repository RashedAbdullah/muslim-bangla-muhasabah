"use client";

import IlmSection from "@/components/ilm-section";
import DawahSection from "@/components/dawah-section";
import SalahSection from "@/components/salah-section";
import DailyWorks from "@/components/daily-works";
import SiyamSection from "@/components/siyam-section";
import OjifaSection from "@/components/ojifa-section";
import SadaqahSection from "@/components/sadaqah-section";
import CalendarSection from "@/components/calendar-section";
import MuamalahSection from "@/components/muamalah-section";
import MuhasabahTable from "@/components/muhasabah-table";

const HomePage = () => {
  return (
    <div className="container py-5 space-y-5">
      {/* ক্যালেন্ডার সেকশন */}
      <CalendarSection />

      {/* আইকন বক্স */}
      <DailyWorks />

      {/* নামায ট্র্যাকার */}
      <SalahSection />

      {/* সিয়াম সেকশন */}
      <SiyamSection />

      {/* অজিফা সেকশন */}
      <OjifaSection />

      {/* ইলম সেকশন */}
      <IlmSection />

      {/* দাওয়াহ সেকশন */}
      <DawahSection />

      {/* মুআমালাহ সেকশন */}
      <MuamalahSection />

      {/* সাদাকাহ সেকশন */}
      <SadaqahSection />

      {/* মুহাসাবাহ টেবিল সেকশন */}
      <MuhasabahTable />
    </div>
  );
};

export default HomePage;
