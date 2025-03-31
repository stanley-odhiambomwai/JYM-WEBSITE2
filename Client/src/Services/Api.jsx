import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get("https://jym-website2.onrender.com/api/test");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to connect to the server"); 
      }
    };

    getMessage();
  }, []);

  return message; 
};
