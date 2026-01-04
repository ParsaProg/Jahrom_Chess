import Header from "@/src/components/Header/Header";
import type { Metadata } from "next";
import "./globals.css";
import MenuHeader from "@/src/components/Header/MenuHeader";
import Footer from "@/src/components/Footer/Footer";

const title = "وبسایت رسمی شطرنج شهرستان جهرم";
const desc = "وبسایت رسمی شطرنج شهرستان جهرم، اخبار | گالری | مسابقات و ...";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`antialiased mx-auto`}>
        <Header />
        <MenuHeader />
        <div className="h-[120px]"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
