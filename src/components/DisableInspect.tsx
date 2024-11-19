"use client";

import { useEffect } from "react";

export default function DisableInspect({ children }: any) {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e:any) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
    const handleKeyDown = (e:any) => {
      if (
        e.key === "F12" || // F12
        (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key)) || // Ctrl+U
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>{children}</>;
}
