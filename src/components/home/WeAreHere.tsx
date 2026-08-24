import { H1 } from "@/components/ui/Typography";
import { Logo } from "../layout/Logo";

export const WeAreHere = () => {
  return (
    <section className="py-20 md:py-60 text-center bg-brand-white text-brand-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center">
          <Logo className="w-64 h-auto text-brand-black" />
          <H1>
            <span className="font-light">Est Lá</span> <br /> Pour Vous.
          </H1>
        </div>
      </div>
    </section>
  );
};
