import React from "react";

export default function Activities() {
  const activities = [
    "Morning Yoga Session - 6:00 AM",
    "Team Meeting - 9:00 AM",
    "Workout Session - 5:00 PM",
    "Evening Meditation - 8:00 PM"
  ];
  
  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <h2 className="text-3xl font-bold mb-4">JYM Activities</h2>
      <ul className="list-disc list-inside space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-lg">{activity}</li>
        ))}
      </ul>
    </div>
  );
}
