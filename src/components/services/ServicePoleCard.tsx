import Link from "next/link";
import Button from "@/components/ui/Button";
import { ServicePole } from "@/types";

export const ServicePoleCard = ({ pole }: { pole: ServicePole }) => {
  return (
    <div className="scroll-mt-38 bg-brand-white text-brand-black border-2 border-brand-black  p-4 md:p-10 flex flex-col justify-between gap-8">
      <div className="space-y-6">
        <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
          {pole.badge}
        </span>

        <div>
          <h2 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
            {pole.title}
          </h2>
          <p className="text-base md:text-lg font-bold text-brand-red">
            {pole.tagline}
          </p>
        </div>

        <p className="text-sm md:text-base font-medium text-brand-black/80 leading-relaxed">
          {pole.description}
        </p>

        <hr className="border-t-2 border-brand-black" />

        <ul className="space-y-3 font-bold text-sm md:text-base">
          {pole.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="font-black text-brand-red">&rarr;</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/offres#abonnement" className="block mb-2">
        <Button
          id={pole.id}
          variant="primary"
          tail="bottom-left"
          className="w-full font-black uppercase py-4 border-2 border-brand-black "
        >
          {pole.ctaText}
        </Button>
      </Link>
    </div>
  );
};
