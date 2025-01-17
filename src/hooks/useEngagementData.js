import { useEffect, useState } from "react";

export const useEngagementData = () => {
  const [data, setData] = useState({
    physical: 50,
    emotional: 50,
    mental: 50,
    spiritual: 50,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        physical: Math.floor(Math.random() * 100),
        emotional: Math.floor(Math.random() * 100),
        mental: Math.floor(Math.random() * 100),
        spiritual: Math.floor(Math.random() * 100),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return data;
};
