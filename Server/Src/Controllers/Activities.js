export const getActivities = (req, res) => {
    const activities = [
      { id: 1, title: "Morning Yoga", time: "6:00 AM" },
      { id: 2, title: "Workout Session", time: "5:00 PM" }
    ];
    res.json(activities);
  };
  