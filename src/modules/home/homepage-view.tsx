import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";

import { About, Hero, Portfolio, Services, Solutions, Testimonials } from "@/modules/home/sections";

export const HomepageView = () => {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
};
