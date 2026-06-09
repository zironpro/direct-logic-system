import Image from "next/image";

import { SectionHeader } from "@/components/layout/section-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

import { FEATURED_PROJECTS } from "@/data/portfolio";

export const Portfolio = () => {
	return (
		<section aria-labelledby="portfolio-heading" className="py-16 md:py-24 lg:py-32">
			<div className="container max-w-7xl">
				<SectionHeader
					badge="Portfolio"
					description="From complex IT infrastructure to cutting-edge digital campaigns, see how we've helped clients achieve lasting success."
					title="Our Work Speaks for Itself"
				/>
			</div>
			<div aria-label="Portfolio projects" className="mt-8" role="list">
				<InfiniteSlider gap={12} speedOnHover={20}>
					{FEATURED_PROJECTS.map((project) => (
						<div className="relative aspect-4/3 h-72 overflow-hidden rounded-xl md:h-96" key={project.id}>
							<Image alt="Dean blunt - Black Metal 2" className="object-cover" fill src={project.image} />
						</div>
					))}
				</InfiniteSlider>
			</div>
		</section>
	);
};
