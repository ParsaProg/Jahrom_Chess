import ChessRefrences from "@/src/components/landing/ChessRefrences";
import GallerySection from "@/src/components/landing/GallerySection";
import HotestNews from "@/src/components/landing/HotestNews";
import NewsList from "@/src/components/landing/NewsList";
import NewsSlider from "@/src/components/landing/NewsSlider";
import TournamentLandingSection from "@/src/components/landing/TournamentSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-14 mx-auto w-[90%]">
      <div className="flex flex-col xl:flex-row flex-wrap items-start justify-center xl:justify-between w-full gap-5">
        <div className="flex items-start gap-5 w-full max-[777px]:flex-col xl:w-[750px]">
          <HotestNews />
          <NewsList />
        </div>
        <NewsSlider />
      </div>
      <ChessRefrences />
      <GallerySection />
      <TournamentLandingSection />
    </div>
  );
}
