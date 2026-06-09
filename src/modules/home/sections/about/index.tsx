import { SectionHeader } from "@/components/layout/section-header";

import { AboutCompanyStats } from "./about-company-stats";
import { AboutFeatureGrid } from "./about-feature-grid";
import { AboutShowcaseRow } from "./about-showcase-row";

export const About = () => {
	return (
		<section aria-labelledby="about-heading" className="py-24 lg:py-32" id="main-content">
			<div className="container max-w-7xl">
				<SectionHeader
					badge="About Direct LS"
					description=" Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT services,
          trading, and digital marketing - integrating the latest technology to help you stay ahead."
					title="Your Trusted Technology Partner Since 1978"
				/>
			</div>
			<div className="container mt-12 max-w-7xl">
				<div className="grid gap-1 rounded-[calc(var(--radius-2xl)+var(--spacing)*1)] bg-accent p-1">
					<AboutFeatureGrid />
					<AboutShowcaseRow />
				</div>
			</div>
			<AboutCompanyStats />
		</section>
	);
};
