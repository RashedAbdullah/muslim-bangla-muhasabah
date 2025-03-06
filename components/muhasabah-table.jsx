import React from "react";
import QuranTableSection from "./table/quran-table";
import Siyamtable from "./table/siyam-table";
import SalahTable from "./table/salah-table";
import MorningEveningTable from "./table/morning-evening-table";
import JummahTable from "./table/jumma-table";
import Sleepingtable from "./table/sleeping-table";
import IlmTable from "./table/ilm-table";
import DawahTable from "./table/dawah-table";

const MuhasabahTable = () => {
  return (
    <div className="p-2 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
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
      <Sleepingtable />
      <IlmTable />
      <DawahTable />
    </div>
  );
};

export default MuhasabahTable;
