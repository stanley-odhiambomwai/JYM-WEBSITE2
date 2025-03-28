import React from "react";

const activities = [
  {
    id: 1,
    title: "Full Body Workout",
    videoUrl: "https://www.youtube.com/embed/B12MXF0bSFo?si=OlpY0-ISIrtmWPpj",
    description: "A complete workout routine for all major muscle groups.",
  },
  {
    id: 2,
    title: "Cardio Routine",
    videoUrl: "https://www.youtube.com/embed/crPb62o-z_E?si=4jLtimJShCGcYzOX",
    description: "Boost your endurance with this intense cardio session.",
  },
  {
    id: 3,
    title: "Yoga for Flexibility",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
    description:
      "Improve flexibility and reduce stress with this yoga routine.",
  },
  {
    id: 4,
    title: "Abs Workouts",
    videoUrl: "https://www.youtube.com/embed/Tn-XvYG9x7w?si=oX8WWaNad8GI9Yn6",
    description: "Improve the strenthening of the stomach and of good shape too.",
  },
  {
    id: 5,
    title: "CrossFit Training",
    videoUrl: "https://www.youtube.com/embed/no3YXyM67Gk?si=v8lEfdJRlD-DZA7F",
    description: "Improve the transformation of crossbody fit and strong.",
  },
  {
    id: 6,
    title: "Mobility Training",
    videoUrl: "https://www.youtube.com/embed/3TlJM9sOQGM?si=Gkj1HngTTKrrzbDs",
    description: "Improve body strenth all the way from neck to toes."
  },
  {
    id: 7,
    title: "Sports Training",
    videoUrl: "https://www.youtube.com/embed/R30JGe23A24?si=y1VzaAEwBw0rsaiG",
    description: "Improve the level of speed training and all sorts of sport activities."
  },
  {
    id:8,
    title: "Lower Body Fitness",
    videoUrl: "https://www.youtube.com/embed/H6mRkx1x77k?si=-nP_T-3ltpz7hlsB",
    description: "It strenthens the lower body part and ensures it's flexibility."
  },
  {
    id: 9,
    title: "Upper Body Workout",
    videoUrl: "https://www.youtube.com/embed/acp77RhVzMM?si=oQXCgp5dhV-JtyGL",
    description: "It gives bold body appearence with full of fitness and with a lot of strenth"
  },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-20  bg-opacity-50  group-hover:opacity-100 transition duration-300 ">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Activity Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-400 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
            <iframe
              className="w-full h-48 rounded-lg  transition-all duration-300"
              src={activity.videoUrl}
              title={activity.title}
              allowFullScreen
            ></iframe>
            <p className="text-white mt-2  bg-gray-900">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
