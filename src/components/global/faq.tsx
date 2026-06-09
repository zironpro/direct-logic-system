import Link from "next/link";

import { Accordion as AccordionPrimitive } from "radix-ui";

import { SectionHeader } from "@/components/layout/section-header";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";

import { IconPlus } from "@/assets/icons/plus";

import { FAQ_ITEMS } from "@/data/constant";

import { Button } from "../ui/button";

export const Faq = () => {
	return (
		<section aria-labelledby="faq-heading" className="mx-4 rounded-t-4xl bg-white pt-12 md:mx-6 md:pt-16 lg:pt-20">
			<div className="container max-w-7xl px-4 md:px-6 lg:px-8">
				<SectionHeader
					badge="Frequently Asked Question"
					description="We know choosing the right technology partner is a big decision. Here's everything you need to know about working with Direct Logic Systems."
					title="Your Questions, Answered"
					variant="secondary"
				/>
				<Accordion aria-labelledby="faq-heading" className="mt-9 w-full space-y-2" collapsible defaultValue="1" type="single">
					{FAQ_ITEMS.map((item) => (
						<AccordionItem
							className="rounded-md border bg-background px-3 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 md:px-4"
							key={item.id}
							value={item.id}
						>
							<AccordionPrimitive.Header className="flex">
								<AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2.5 text-left font-medium leading-6 outline-none transition-all focus-visible:ring-0 md:text-lg [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
									{item.title}
									<IconPlus
										aria-hidden="true"
										className="pointer-events-none size-3 shrink-0 opacity-60 transition-transform duration-200"
									/>
								</AccordionPrimitive.Trigger>
							</AccordionPrimitive.Header>
							<AccordionContent className="pb-2 text-base text-muted-foreground md:text-lg">{item.content}</AccordionContent>
						</AccordionItem>
					))}
					<div className="flex flex-1 items-center justify-between gap-2 rounded-md border bg-background px-3 py-2.5 text-left font-medium leading-6 outline-none transition-all last:border-b focus-visible:ring-0 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 md:px-4 md:text-lg">
						<p>Let's talk about your challenges and goals.</p>
						<Button asChild>
							<Link href="/contact">Get in touch</Link>
						</Button>
					</div>
				</Accordion>
			</div>
		</section>
	);
};
