"use client";

export function ContactSuccessState() {
  return (
    <div className="p-6 sm:p-10 text-center space-y-4 text-brand-black bg-brand-white border-2 border-brand-black">
      <span className="inline-block bg-brand-black text-brand-white text-xs font-black px-3 py-1 uppercase tracking-widest border border-brand-black">
        Demande Envoyée
      </span>
      <h3 className="text-2xl sm:text-3xl font-black">C'est bien reçu ! 🚀</h3>
      <p className="font-medium text-sm sm:text-base opacity-90 max-w-md mx-auto">
        Nous étudions vos besoins et revenons vers vous sur votre créneau
        préférentiel en moins de 24h.
      </p>
    </div>
  );
}
