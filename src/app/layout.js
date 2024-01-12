import { Prompt } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ratiocinative Engineering Services LLC",
  description: "Rapid engineering services",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: "Arial",
  variable: "--font-prompt"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={prompt.variable}>
      <body>{children}</body>
    </html>
  );
}
