import Image from "next/image";

import { Squircle } from "@/assets/squircle";

export const AboutFeatureGrid = () => {
	return (
		<div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
			<div className="min-h-0 rounded-2xl bg-card p-5 sm:p-6 lg:aspect-4/3">
				<span className="font-medium text-secondary text-sm sm:text-base">Reliable Security Solutions</span>
				<h3 className="mt-2 font-semibold text-secondary text-xl sm:text-2xl">Protect Your Business with Advanced Cybersecurity</h3>
				<p className="mt-3 text-muted-foreground text-sm sm:text-base">
					Stay secure with cutting-edge cybersecurity solutions. From firewalls to endpoint protection, we safeguard your business
					against threats, ensuring data integrity and peace of mind.
				</p>
			</div>

			<div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-card p-5 sm:min-h-[240px] sm:p-6 lg:aspect-4/3">
				<div className="relative flex h-20 w-48 items-center sm:h-24 sm:w-56">
					<Squircle className="absolute inset-0 size-full text-primary-foreground/30" />
					<span className="mx-auto block w-fit font-semibold text-4xl text-primary sm:text-5xl">24/7</span>
				</div>
				<h3 className="mt-4 mb-2 text-center font-semibold text-secondary text-xl sm:text-2xl">Dedicated Support Team</h3>
				<p className="text-balance text-center text-muted-foreground text-sm">
					Our certified IT experts are available 24/7, providing quick resolutions and ongoing guidance whenever you need it.
				</p>
			</div>

			<div className="relative overflow-hidden rounded-2xl bg-card p-5 pb-28 sm:p-6 sm:pb-32 md:col-span-2 lg:col-span-1 lg:aspect-4/3 lg:pb-6">
				<div className="relative z-10 flex flex-col gap-2">
					<h3 className="font-semibold text-secondary text-xl sm:text-2xl">Global Trading Solutions</h3>
					<p className="text-muted-foreground text-sm sm:text-base">
						Access a reliable network of global suppliers for electronics, IT equipment, and industrial solutions with quality
						assurance and competitive pricing.
					</p>
				</div>
				<div className="absolute inset-x-0 -bottom-3 px-2">
					<Image
						alt="Global Trading"
						className="h-auto w-full object-contain object-bottom"
						height={120}
						src="/images/global-trading.svg"
						width={360}
					/>
				</div>
			</div>
		</div>
	);
};
