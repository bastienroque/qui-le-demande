import Link from "next/link";
import { H1 } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <main className="w-full min-h-[80vh] bg-brand-white text-brand-black flex items-center justify-center py-16 px-4 border-b-4 border-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="container mx-auto max-w-2xl text-center space-y-8 relative z-10">
        <div className="inline-block bg-brand-red text-brand-white text-6xl md:text-8xl font-black p-6 border-4 border-brand-black">
          404
        </div>

        <div className="space-y-4">
          <H1 className="text-3xl md:text-5xl font-black">
            Page introuvable !
          </H1>
          <p className="text-base md:text-xl font-medium text-brand-black/80 max-w-md mx-auto">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-brand-black text-brand-white font-black text-lg px-8 py-4 border-2 border-brand-black  hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
