import { ChessNews, ChessNewsModelInterface } from "@/src/model/chess-news";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsData: ChessNewsModelInterface[] = ChessNews;
  const mainNewsDataWithSlug = newsData.find(
    (news) => news.id === Number(slug),
  );

  return {
    title: mainNewsDataWithSlug?.title || "خبر شطرنج",
    description: mainNewsDataWithSlug?.description || "مقاله‌ای درباره شطرنج",
    openGraph: {
      title: mainNewsDataWithSlug?.title || "خبر شطرنج",
      description: mainNewsDataWithSlug?.description || "مقاله‌ای درباره شطرنج",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  return <>{children}</>;
}
