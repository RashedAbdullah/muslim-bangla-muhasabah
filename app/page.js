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

const HomePage = () => {
  return (
    <div className="container py-5 space-y-5">
      <CalendarSection />

      <DailyWorks />

      <SalahSection />

      <SiyamSection />

      <OjifaSection />

      <IlmSection />

      <DawahSection />

      <MuamalahSection />

      <SadaqahSection />
    </div>
  );
};

export default HomePage;
