import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SystemProvider } from "@/components/SystemContext";
import CrtOverlay from "@/components/CrtOverlay";
import NeuralBackground from "@/components/NeuralBackground";
import BootSequence from "@/components/BootSequence";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sharmeen Rauf — AI Neural Portfolio",
  description: "Full-stack Developer & DevOps Engineer. Cinematic portfolio powered by the SR Neural Broadcast Core.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: '#000', overflowX: 'hidden' }}
      >
        <SystemProvider>
          {/* Atmospheric canvas particle background */}
          <NeuralBackground />
          {/* CRT scanline aesthetic overlays */}
          <CrtOverlay />
          {/* Cinematic BIOS boot sequence */}
          <BootSequence />
          {/* Page content */}
          {children}
        </SystemProvider>
      </body>
    </html>
  );
}
