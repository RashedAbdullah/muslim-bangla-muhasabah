import "./globals.css";

export const metadata = {
  title: "মুসলিম বাংলা - মুহাসাবা",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`bg-gray-100 scrollbar`}>{children}</body>
    </html>
  );
}
