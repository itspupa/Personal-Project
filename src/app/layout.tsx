import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Project",
  description: "Next.js project with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
