// components/ui/ActivityHeatmap.tsx
"use client";

import React, { useEffect, useState } from 'react';

interface HeatmapProps {
  storageKey: string; // Unique key for each language (e.g., "cpp-activity")
}

const ActivityHeatmap = ({ storageKey }: HeatmapProps) => {
  const [activity, setActivity] = useState<Record<string, boolean>>({});
  const year = new Date().getFullYear();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setActivity(JSON.parse(saved));
  }, [storageKey]);

  const markToday = () => {
    const today = new Date().toISOString().split("T")[0];
    const newActivity = { ...activity, [today]: true };
    setActivity(newActivity);
    localStorage.setItem(storageKey, JSON.stringify(newActivity));
  };

  return (
    <div className="bg-[#0f0f0f] border border-neutral-800 p-8 rounded-3xl w-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
          {year} Activity
        </h3>
        <button 
          onClick={markToday}
          className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)]"
        >
          Mark Today Done
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {months.map((monthName, monthIdx) => {
          const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
          
          return (
            <div key={monthName} className="flex flex-col items-center">
              {/* Month Grid */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateKey = `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const isActive = activity[dateKey];

                  return (
                    <div
                      key={dateKey}
                      title={dateKey}
                      className={`w-3 h-3 rounded-[2px] transition-all duration-500 ${
                        isActive 
                        ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]' 
                        : 'bg-neutral-800 hover:bg-neutral-700'
                      }`}
                    />
                  );
                })}
              </div>
              {/* Label */}
              <span className="mt-3 text-[10px] font-bold uppercase text-neutral-500 tracking-tighter">
                {monthName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityHeatmap;