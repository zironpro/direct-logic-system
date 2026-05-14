import { SOLUTIONS } from "@/data/constant";
import { cn } from "@/lib/utils";

export const Solutions = () => {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="container max-w-7xl px-4 pb-16 md:px-6 md:pb-24 lg:px-8 lg:pb-32"
    >
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl" id="solutions-heading">
        Everything you'd <span className="text-primary">need</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
        Direct Logic Systems LLC, based in Dubai, empowers businesses with innovative IT, trading, and digital marketing
        services. Our mission is to seamlessly integrate technology that drives your growth and security.
      </p>
      <div
        aria-label="Technology solutions"
        className="mt-8 grid grid-cols-1 max-md:space-y-6 md:mt-12 md:grid-cols-2 md:-space-x-9 lg:grid-cols-3"
        role="list"
      >
        {SOLUTIONS.map(({ id, title, description, icon: Icon }, i) => (
          <div
            className={cn(
              "z-10 h-fit rounded-2xl border border-[#83B0FF] bg-card p-6 md:px-14 md:py-12",
              i === 0 && "z-0 md:mt-14 md:-rotate-6",
              i === 1
                ? "shadow-primary/10 shadow-xl md:shadow-2xl md:shadow-primary/30"
                : "shadow-primary/10 shadow-xl",
              i === 2 && "z-0 md:mt-14 md:rotate-6"
            )}
            key={id}
            role="listitem"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-b from-[#A981FF] to-[#653AFF]">
                <Icon />
              </div>
              <h3 className="font-medium text-lg md:text-4xl">{title}</h3>
            </div>
            <p className="mt-4 text-pretty text-muted-foreground leading-relaxed md:text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
