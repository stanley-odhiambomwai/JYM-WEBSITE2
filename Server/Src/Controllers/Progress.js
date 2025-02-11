export const getProgress = (req, res) => {
    const progress = [
      { date: "2025-02-01", exercise: "Running", duration: "30 mins" },
      { date: "2025-02-02", exercise: "Cycling", duration: "45 mins" }
    ];
    res.json(progress);
  };
  