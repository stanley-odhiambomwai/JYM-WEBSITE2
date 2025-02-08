import React, { useState } from "react";

export default function ProgressTracker() {
  const [progress] = useState([
    { date: "2025-02-01", exercise: "Running", duration: "30 mins" },
    { date: "2025-02-02", exercise: "Cycling", duration: "45 mins" }
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Your Exercise Progress</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Exercise</th>
            <th className="py-2 px-4 border-b">Duration</th>
          </tr>
        </thead>
        <tbody>
          {progress.map((entry, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{entry.date}</td>
              <td className="py-2 px-4 border-b">{entry.exercise}</td>
              <td className="py-2 px-4 border-b">{entry.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
