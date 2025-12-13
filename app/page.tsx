import ChessRefrences from "@/src/components/landing/ChessRefrences";
import HotestNews from "@/src/components/landing/HotestNews";
import NewsList from "@/src/components/landing/NewsList";
import NewsSlider from "@/src/components/landing/NewsSlider";

export default function Home(){
  return <div className="flex flex-col gap-y-14 mx-auto w-[90%]">
    <div className="flex items-start w-full gap-x-5 ">
      <HotestNews />
      <NewsSlider />
      <NewsList />
    </div>
    <ChessRefrences />
    <div className="mt-100"></div>
  </div>
}