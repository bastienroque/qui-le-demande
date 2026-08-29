import Link from "next/link";
import Button from "@/components/ui/Button";
import { OneShotService } from "@/types";

export const OneShotCard = ({ service }: { service: OneShotService }) => {
  const redirectParams = new URLSearchParams({
    offerType: "one-shot",
    serviceType: service.title,
  }).toString();

  return (
    <div className="bg-brand-white text-brand-black border-2 border-brand-black  p-4 flex flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center gap-2">
          <span className="inline-block bg-brand-black text-brand-white text-[10px] font-black uppercase px-2.5 py-1 border border-brand-black">
            {service.badge}
          </span>
          <span className="text-xs font-black text-brand-red bg-brand-red/10 border border-brand-red px-2 py-0.5">
            ⚡ {service.delay}
          </span>
        </div>

        <h4 className="text-xl font-black leading-snug">{service.title}</h4>
        <p className="text-xs md:text-sm font-medium text-brand-black/80">
          {service.description}
        </p>

        <ul className="space-y-2 text-xs md:text-sm font-bold pt-2">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-brand-blue font-black">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href={`/contact?${redirectParams}`} className="block">
        <Button
          id={service.id}
          variant="secondary"
          tail="none"
          className="w-full font-black text-xs uppercase border-2 border-brand-black"
        >
          Commander cette prestation &rarr;
        </Button>
      </Link>
    </div>
  );
};
