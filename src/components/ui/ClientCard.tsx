interface ClientCardProps {
  name: string;
  isInverted?: boolean;
}

export default function ClientCard({
  name,
  isInverted = false,
}: ClientCardProps) {
  const cardOrder = isInverted ? "order-2" : "order-1";

  return (
    <div className="w-full flex flex-col">
      <div
        className={`bg-brand-white border-2 border-brand-black ${cardOrder}`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="font-bold text-xl">{name}</span>
          <span className="text-2xl">{isInverted ? "▲" : "▼"}</span>
        </div>
      </div>
      <div className="bg-brand-red border-2 border-brand-black min-h-[50vh] order-1" />
    </div>
  );
}
