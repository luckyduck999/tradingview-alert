export const metadata = {
  title: "TradingView Alerts Dashboard",
  description: "Receive push notifications from TradingView alerts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
