let alerts = [];

export async function POST(request) {
  const data = await request.json();
  const alert = { ...data, time: new Date().toISOString() };

  // Send push notification to OneSignal
  const ONE_SIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID;
  const ONE_SIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY;

  await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${ONE_SIGNAL_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      app_id: ONE_SIGNAL_APP_ID,
      included_segments: ["All"],
      headings: { en: "TradingView Alert" },
      contents: { en: `${alert.ticker}: ${alert.alert_message}` }
    })
  });

  alerts.unshift(alert); // latest first
  return Response.json({ success: true });
}

export async function GET() {
  return Response.json(alerts);
}
