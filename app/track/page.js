"use client";

import DawahTable from "@/components/table/dawah-table";
import IlmTable from "@/components/table/ilm-table";
import JummahTable from "@/components/table/jumma-table";
import MorningEveningTable from "@/components/table/morning-evening-table";
import QuranTableSection from "@/components/table/quran-table";
import SadaqahTable from "@/components/table/sadaqah-table";
import SalahTable from "@/components/table/salah-table";
import SiyamTable from "@/components/table/siyam-table";
import SleepingTable from "@/components/table/sleeping-table";

const TrackingHistory = () => {
  return (
    <div className="p-4 md:p-6 bg-white shadow-2xl rounded-2xl mt-10 border border-gray-300">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
          📊 মাসিক মুহাসাবা রিপোর্ট
        </h1>
        <div className="flex flex-col md:flex-row justify-between text-lg text-gray-800 border-b-2 pb-4 font-semibold">
          <h3 className="text-center md:text-left">👤 নাম: রাশেদ আব্দুল্লাহ</h3>
          <p className="text-center md:text-right">📅 মাস: মার্চ</p>
        </div>
      </div>

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
  );
};

export default TrackingHistory;
