import "./globals.css";
import { Tiro_Bangla } from "next/font/google";

export const metadata = {
  title: "মুসলিম বাংলা - মুহাসাবা",
  description: "",
};

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${tiroBangla.className} bg-gray-100 scrollbar`}>
        {children}
      </body>
    </html>
  );
}
