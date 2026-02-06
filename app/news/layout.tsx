import { Metadata } from "next";

export const metadata: Metadata = {
  title: "هیات شطرنج جهرم | صفحه اخبار",
  description:
    "اخبار شطرنج شهرستان جهرم، روز، داغ ترین و مسابقات را در این صفحه دنبال کنید",
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
