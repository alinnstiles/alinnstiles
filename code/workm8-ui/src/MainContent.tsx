import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainContent() {
  const navigate = useNavigate();
  const actions = [
    { label: "Research", path: "/research" },
    { label: "Find", path: "/find" },
    { label: "Write", path: "/write" },
    { label: "Organize", path: "/organize" },
    { label: "Create", path: "/create" },
    { label: "Schedule", path: "/schedule" },
    { label: "More", path: "/more" },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">How can I help make your life easier today?</h1>
      {/* Prompt Box */}
      <div className="w-full max-w-2xl bg-gray-100 rounded-2xl shadow p-8 mb-8 flex flex-col items-start relative">
        <input
          className="w-full bg-transparent outline-none text-lg placeholder-gray-400 mb-4"
          placeholder="Type here..."
        />
        <div className="flex gap-3 mt-2">
          <button className="text-gray-500 text-xl">🌐</button>
          <button className="text-gray-500 text-xl">📎</button>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-end">
          <button className="bg-white rounded-full px-3 py-1 shadow text-xs font-medium mb-2">Use voice mode</button>
          <div className="bg-black text-white rounded-full p-2 flex items-center justify-center">
            <span className="material-icons">keyboard_voice</span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {actions.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="bg-gray-100 rounded-full px-6 py-2 flex items-center gap-2 text-sm font-medium shadow-sm hover:bg-gray-200 transition"
          >
            {label}
            {/* Placeholder for icons */}
            <span className="text-xs">🔹</span>
          </button>
        ))}
      </div>
    </section>
  );
} 