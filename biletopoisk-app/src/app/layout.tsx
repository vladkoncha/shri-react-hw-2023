import "@/styles/globals.scss";
import { Roboto } from "next/font/google";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Билетопоиск",
  description: "Сервис поĸупĸи билетов в ĸино",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className={"wrapper"}>
          <Header />
          <div className={"App"}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
