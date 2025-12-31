import Link from "next/link";

export default function LandingSectionsTitle({
  title,
  isBetween,
  openLink
}: {
  isBetween?: boolean;
  title: string;
  openLink?: string
}) {
  return (
    <div
      className={`flex items-center ${isBetween && "w-full justify-between"}`}
    >
      <div className="flex items-center  gap-x-3">
        <div className="bg-blue-600 h-9 w-2.5 rounded-sm"></div>
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      {isBetween && <Link href={openLink!} className="text-blue-600 font-bold text-md cursor-pointer">مشاهدۀ همه</Link>}
    </div>
  );
}
