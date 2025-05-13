import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 p-4">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold text-sm">Monthly Plan</div>
          <div className="text-xs text-gray-500">WORKM8</div>
          <div className="text-xs text-gray-400">DMartinez48@gmail.com</div>
        </div>
      </div>
      {/* Search */}
      <input
        className="mb-4 px-3 py-2 rounded bg-gray-100 text-sm outline-none"
        placeholder="Search"
      />
      {/* Tools */}
      <div className="mb-6">
        <div className="font-semibold text-xs mb-2">+ Tools</div>
        <div className="flex gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">📧</div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">📄</div>
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">📊</div>
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">📑</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center mb-2">🗓️</div>
      </div>
      {/* Saved Tasks */}
      <div>
        <div className="font-semibold text-xs mb-2">Saved Tasks</div>
        <div className="space-y-2">
          <div className="bg-gray-100 rounded p-2 text-xs flex items-center gap-2">
            <span className="text-blue-500">📅</span> 4:17 pm Website design project
          </div>
          <div className="bg-gray-100 rounded p-2 text-xs flex items-center gap-2">
            <span className="text-blue-500">比萨</span> 3:30 pm Common Japanese Phrases
          </div>
          <div className="bg-gray-100 rounded p-2 text-xs flex items-center gap-2">
            <span className="text-blue-500">🖼️</span> 3:30 pm AI generated images
          </div>
          <div className="bg-gray-100 rounded p-2 text-xs flex items-center gap-2">
            <span className="text-red-500">JAN 30</span> 3:30 pm New event was scheduled
          </div>
        </div>
      </div>
    </aside>
  );
} 