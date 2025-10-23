"use client";

import { useEffect, useState } from "react";

export function useTime({
  timeZone = "Asia/Karachi",
}: { timeZone?: string } = {}) {
  const [currentTime, setCurrentTime] = useState<string>("");

  const currentTimeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
    hour12: false,
  };

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", currentTimeOptions);
      const formattedTime = formatter.format(new Date());
      setCurrentTime(formattedTime);
    };
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return {
    currentTime,
  };
}
