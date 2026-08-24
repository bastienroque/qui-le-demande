import { H2, P } from "@/components/ui/Typography";

interface ServiceDetailProps {
  title: string;
  description: string;
  className?: string;
}

export const ServiceDetail = ({
  title,
  description,
  className = "",
}: ServiceDetailProps) => {
  return (
    <section
      className={`w-full min-h-[80vh] flex flex-col justify-center px-4 md:px-8 ${className}`}
    >
      <div className="container mx-auto">
        <H2>{title}</H2>
        <P className="mt-6 max-w-2xl">{description}</P>
      </div>
    </section>
  );
};
