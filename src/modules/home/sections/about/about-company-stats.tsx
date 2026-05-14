import { NumberCounter } from "@/components/ui/number-counter";

export const AboutCompanyStats = () => {
  return (
    <div
      aria-label="Company statistics"
      className="container mt-12 grid max-w-7xl grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 lg:mt-24"
      role="list"
    >
      <div className="flex flex-col items-center justify-between text-center" role="listitem">
        <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
          <NumberCounter suffix="+" value={45} />
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm">Years of Experience</p>
      </div>
      <div className="flex flex-col items-center justify-between text-center" role="listitem">
        <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">On-Site</h3>
        <p className="text-muted-foreground text-xs md:text-sm">Support in 2 Hours</p>
      </div>
      <div className="flex flex-col items-center justify-between text-center" role="listitem">
        <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
          <NumberCounter suffix="+" value={200} />
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm">Satisfied Clients</p>
      </div>
      <div className="flex flex-col items-center justify-between text-center" role="listitem">
        <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">Global</h3>
        <p className="text-muted-foreground text-xs md:text-sm">Trading Partnerships</p>
      </div>
    </div>
  );
};
