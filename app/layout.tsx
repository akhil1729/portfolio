// app/layout.tsx
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import type { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll"; // <--- IMPORT THIS

export const metadata = {
  title: "Akhil Kanukula | Space Portfolio",
  description: "Space-themed portfolio...",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black relative min-h-screen antialiased">
        <SmoothScroll>
           {/* We removed the old CSS 'stars' div here because we will use 3D stars instead */}
           {children}
        </SmoothScroll>
      </body>
    </html>
  );
}