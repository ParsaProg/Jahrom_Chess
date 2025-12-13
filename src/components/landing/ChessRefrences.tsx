import { ChessRefrencesData } from "@/src/data/chess-refrences";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { ExternalLink } from "lucide-react";

const ChessRefrences = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <LandingSectionsTitle title={"منابع رسمی"} />
      <div className="p-5 grid lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:grid-cols-2 border border-neutral-300 grid-cols-1 rounded-xl shadow-[0px_0px_20px_5px] shadow-[#017efc37] w-full py-8">
        {ChessRefrencesData.map((ref, _i) => {
          return (
            <a
              target="_blank"
              href={ref.link}
              className="rounded-lg border border-neutral-300 p-5 flex items-center justify-between w-full"
              key={_i}
            >
              <div className="flex items-center gap-x-2">
                <div className="rounded-full bg-neutral-300 overflow-hidden w-14 h-14 flex items-center justify-center">
                  {ref.icon}
                </div>
                <div className="flex flex-col items-start gap-y-1">
                  <h1 className="font-bold text-md">{ref.title}</h1>
                  <h3 dir="ltr" className="font-thin text-sm">{ref.linkTag}</h3>
                </div>
              </div>
              <ExternalLink size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ChessRefrences;
