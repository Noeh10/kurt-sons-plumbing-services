import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kurt & Sons Plumbing Services | Oak Lawn Plumbing",
  description:
    "Premium plumbing services in Oak Lawn and surrounding areas. Emergency repairs, drain cleaning, water heaters, pipe services, bathroom remodels, and new construction.",
  keywords: [
    "Kurt & Sons Plumbing Services",
    "Oak Lawn plumber",
    "plumber near me",
    "emergency plumber Oak Lawn",
    "drain cleaning Oak Lawn",
    "water heater repair Oak Lawn",
    "bathroom remodel plumbing",
    "pipe repair Oak Lawn",
    "24 hour plumber Oak Lawn",
  ],
  authors: [{ name: "Kurt & Sons Plumbing Services" }],
  creator: "Kurt & Sons Plumbing Services",
  publisher: "Kurt & Sons Plumbing Services",
  applicationName: "Kurt & Sons Plumbing Services",
  metadataBase: new URL("https://kurt-sons-plumbing-services-ldzx209gc.vercel.app"),
  openGraph: {
    title: "Kurt & Sons Plumbing Services | Oak Lawn Plumbing",
    description:
      "Premium plumbing services in Oak Lawn and surrounding areas. Fast, clean, and reliable service for homeowners and businesses.",
    url: "https://kurt-sons-plumbing-services-ldzx209gc.vercel.app",
    siteName: "Kurt & Sons Plumbing Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurt & Sons Plumbing Services | Oak Lawn Plumbing",
    description:
      "Premium plumbing services in Oak Lawn and surrounding areas. Fast, clean, and reliable service.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}