import { Metadata } from "next";

const title = "هیات شطرنج جهرم | صفحه اخبار";
const description =
  "اخبار شطرنج شهرستان جهرم، روز، داغ ترین و مسابقات را در این صفحه دنبال کنید";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
