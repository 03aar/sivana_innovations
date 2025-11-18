import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SELF by Sivana Innovations | Redefining Human Readiness for Aviation",
  description: "SELF is an AI-powered readiness system that treats the mental state of pilots and crew with the same seriousness as any critical system on the aircraft.",
  keywords: ["aviation safety", "pilot readiness", "cognitive assessment", "human factors", "flight safety", "AI", "deeptech"],
  authors: [{ name: "Sivana Innovations" }],
  openGraph: {
    title: "SELF by Sivana Innovations",
    description: "Redefining human readiness for aviation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
