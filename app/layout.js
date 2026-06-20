import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SystemProvider } from "@/components/SystemContext";
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
  title: "Sharmeen Rauf — Full-Stack Developer Portfolio",
  description: "Full-stack Developer & Prompt Engineer. Clean, modern portfolio showcase.",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.png',
  },
  themeColor: '#00f0ff',
  openGraph: {
    title: 'Sharmeen Rauf — Full-Stack Developer Portfolio',
    description: 'Full-stack Developer & Prompt Engineer. Clean, modern portfolio showcase.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: '#080810', overflowX: 'hidden' }}
      >
        <SystemProvider>
          {/* Cinematic BIOS boot sequence (runs once per session) */}
          <BootSequence />
          {/* Page content */}
          {children}
        </SystemProvider>
      </body>
    </html>
  );
}
