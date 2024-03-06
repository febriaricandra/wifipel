import React, { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/boarding";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-red-500 h-screen flex items-center justify-center">
      <img src="src/assets/image/Logo.svg" alt="Logo" />
    </div>
  );
}
