export default function LandingSectionsTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="bg-blue-600 h-9 w-2.5 rounded-sm"></div>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
}
