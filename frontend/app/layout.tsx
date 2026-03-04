import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Врачебно-физкультурный диспансер Республики Карелия",
  description: "Официальный сайт ГБУЗ РК ВФД",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="site-wrapper">
          <Header />
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}