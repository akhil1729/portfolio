// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Akhil Kanukula | Space Portfolio",
  description:
    "Space-themed portfolio of Akhil Kanukula: Data Science, NASA research, LLMs, and diffusion models.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="space-bg relative min-h-screen">
        {/* Static starfield */}
        <div className="stars" />

        {/* Subtle vignette overlay */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.4),_transparent_60%)] mix-blend-screen opacity-70" />

        {children}
      </body>
    </html>
  );
}
