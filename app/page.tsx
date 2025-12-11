import HotestNews from "@/src/components/landing/HotestNews";

export default function Home(){
  return <div className="mx-auto sm:w-[80%] w-[90%]">
    <div className="flex items-start gap-x-10 ">
      <HotestNews />
    </div>
  </div>
}