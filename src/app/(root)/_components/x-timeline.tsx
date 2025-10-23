"use client";

import { useEffect } from "react";

export function XTimeline() {
  useEffect(() => {
    const loadTwitterWidget = () => {
      if (window.twttr) {
        // Create the timeline dynamically using `createTimeline`
        window.twttr.widgets
          .createTimeline(
            {
              sourceType: "profile",
              screenName: "TwitterDev", // replace with your username
            },
            document.getElementById("timeline-container") // Target container element
          )
          .then(() => {
            console.log("Twitter timeline rendered");
          })
          .catch((err: unknown) => {
            console.error("Error loading Twitter timeline:", err);
          });
      } else {
        // Fallback to loading the script if it's not available yet
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => {
          window.twttr?.widgets
            .createTimeline(
              {
                sourceType: "profile",
                screenName: "TwitterDev", // replace with your username
              },
              document.getElementById("timeline-container") // Target container element
            )
            .then(() => {
              console.log("Twitter timeline rendered after script load");
            })
            .catch((err: unknown) => {
              console.error("Error loading Twitter timeline:", err);
            });
        };
        script.onerror = () => {
          console.error("Failed to load Twitter widgets script");
        };
        document.body.appendChild(script);
      }
    };

    loadTwitterWidget();

    // Cleanup function (optional if you want to remove the script later)
    return () => {
      const script = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div id="timeline-container" className="h-full w-full">
      {/* The timeline will be inserted here */}
    </div>
  );
}
