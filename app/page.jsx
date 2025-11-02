"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.OneSignal = window.OneSignal || [];
      OneSignal.push(function () {
        OneSignal.init({
          appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
          notifyButton: {
            enable: true,
          },
        });
      });
    }
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>TradingView Alerts Dashboard</h1>
      <p>✅ Push notifications are active!</p>
    </main>
  );
}
