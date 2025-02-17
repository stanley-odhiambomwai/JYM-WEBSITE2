import React from "react";

const activities = [
  {
    id: 1,
    title: "Full Body Workout",
    videoUrl: "https://www.youtube.com/embed/dP3N8Kx3GE4",
    description: "A complete workout routine for all major muscle groups.",
  },
  {
    id: 2,
    title: "Cardio Routine",
    videoUrl: "https://www.youtube.com/embed/xZbtwD4X8co",
    description: "Boost your endurance with this intense cardio session.",
  },
  {
    id: 3,
    title: "Yoga for Flexibility",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
    description: "Improve flexibility and reduce stress with this yoga routine.",
  },
  {
    id: 4,
    title: "Abs Workouts",
    videoUrl: "https://youtube.com/shorts/dNJG3e71JKY?si=VeHhnp4zwP6utS8J",
    description: "Improve the strenthening of the stomach."
  }, 
  {
    id: 5,
    title: "CrossFit Training",
    videoUrl: "https://youtu.be/v9G47ToFltY?si=G5WjpreKi4Z-URfi",
    description: "Improve the transformation of crossbody fit"
  },
];

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Activity Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
            <iframe
              className="w-full h-48 rounded-lg"
              src={activity.videoUrl}
              title={activity.title}
              allowFullScreen
            ></iframe>
            <p className="text-gray-700 mt-2">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
