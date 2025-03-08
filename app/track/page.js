"use client";

import DawahTable from "@/components/table/dawah-table";
import IlmTable from "@/components/table/ilm-table";
import JummahTable from "@/components/table/jumma-table";
import MorningEveningTable from "@/components/table/morning-evening-table";
import QuranTableSection from "@/components/table/quran-table";
import SalahTable from "@/components/table/salah-table";
import Siyamtable from "@/components/table/siyam-table";
import SleepingTable from "@/components/table/sleeping-table";

const TrackingHistory = () => {
  return (
    <div className="p-2 shadow-lg rounded-xl mt-10 border-gray-200">
      <div className="mb-6">
        <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-4">
          মাসিক মুহাসাবা রিপোর্ট
        </h1>
        <div className="flex justify-between text-lg font-medium text-gray-700 border-b pb-3">
          <h3>নাম: রাশেদ আব্দুল্লাহ</h3>
          <p>মাস: মার্চ</p>
        </div>
      </div>

      <SalahTable />
      <Siyamtable />
      <QuranTableSection />
      <MorningEveningTable />
      <JummahTable />
      <SleepingTable />
      <IlmTable />
      <DawahTable />
    </div>
  );
};

export default TrackingHistory;
