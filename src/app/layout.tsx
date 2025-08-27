 

import { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";


import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Best Dentist in Gurgaon - Dr. Vineet Vinayak",
    template: "%s | Luminix",
  },
  description: "Smilessence - The Specialist Dental Centre is a renowned dental clinic with cutting-edge technology led by Dr. Vineet Vinayak, who is known as one of the best family dentists in Gurgaon.",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
