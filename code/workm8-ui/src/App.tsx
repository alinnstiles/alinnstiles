import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <MainContent />
      </main>
      {/* Right Sidebar */}
      <aside className="w-72 bg-white h-screen border-l border-gray-200 p-4 flex flex-col">
        <div className="font-semibold text-sm mb-2">Reoccurring Tasks</div>
        <div className="text-xs text-gray-500">Scrape Leads For CRM</div>
      </aside>
    </div>
  );
}
