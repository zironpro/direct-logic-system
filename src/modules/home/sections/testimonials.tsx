import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@/assets/icons/arrows";
import { IconStar } from "@/assets/icons/star";

import { FEEDBACKS } from "@/data/constant";

export const Testimonials = () => {
	return (
		<section aria-labelledby="testimonials-heading" className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
			<SectionHeader
				badge="Clients & Testimonials"
				description="We're proud to partner with diverse clients across industries, delivering tailored solutions and exceptional service."
				title="Trusted by 200+ Leading Businesses"
			/>
			<div
				aria-label="Client testimonials"
				className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
				role="list"
			>
				{FEEDBACKS.map((feedback) => (
					<Card key={feedback.id} role="listitem">
						<CardContent className="h-full">
							<CardHeader aria-label="5 out of 5 stars rating" className="flex items-center gap-2" role="img">
								{Array.from({ length: 5 }).map((_, index) => (
									<IconStar aria-hidden="true" className="size-4 shrink-0 text-yellow-500 md:size-5" key={index} />
								))}
							</CardHeader>
							<blockquote className="mt-3">
								<p className="text-sm md:text-base">{feedback.content}</p>
							</blockquote>
						</CardContent>
						<CardFooter>
							<cite className="not-italic">
								<h3 className="font-medium text-sm md:text-base">{feedback.author}</h3>
								<p className="text-muted-foreground text-xs md:text-sm">{feedback.authorTitle}</p>
							</cite>
							<Button size="icon" variant="secondary">
								<IconArrowUpRight aria-hidden="true" />
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<div aria-label="Testimonial navigation" className="mt-6 flex justify-center space-x-3" role="group">
				<Button aria-label="Previous testimonial" size="icon" variant="outline">
					<IconArrowLeft aria-hidden="true" />
				</Button>
				<Button aria-label="Next testimonial" size="icon" variant="outline">
					<IconArrowRight aria-hidden="true" />
				</Button>
			</div>
		</section>
	);
};
