import React from "react";

export default function RightSidebar() {
  return (
    <aside className="w-72 bg-white h-screen border-l border-gray-200 p-4 flex flex-col">
      <div className="font-bold text-2xl mb-8 text-center">Reoccurring Tasks</div>
      <ul className="space-y-8 mt-8">
        <li className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#3b82f6" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-5.16 3.22 1.64-5.81-4.48-3.89 5.88-.5L12 4.5l2.12 5.77 5.88.5-4.48 3.89 1.64 5.81z" />
            </svg>
          </span>
          <span className="font-bold text-xl">Scrape Leads For CRM</span>
        </li>
        <li className="flex items-center gap-4 opacity-70">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#22c55e" className="w-6 h-6">
              <circle cx="12" cy="12" r="9" stroke="#22c55e" strokeWidth="2" fill="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
            </svg>
          </span>
        </li>
        <li className="flex items-center gap-4 opacity-70">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#eab308" className="w-6 h-6">
              <circle cx="12" cy="12" r="9" stroke="#eab308" strokeWidth="2" fill="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
            </svg>
          </span>
        </li>
      </ul>
    </aside>
  );
} 