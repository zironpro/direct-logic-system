import Image from "next/image";

interface BrandProps {
	children: React.ReactNode;
	logo?: string;
	image?: string;
	title: string;
}

export function Brand({ children, logo, image, title }: BrandProps) {
	return (
		<div className="not-prose mb-6 grid grid-cols-2 gap-4 md:gap-6">
			{image && <Image alt={title} className="rounded-md border" height={264} src={image} width={352} />}
			<div className="py-4">
				<div className="mb-3 flex items-center gap-3">
					{logo && (
						<div className="flex aspect-4/3 w-12 items-center justify-center gap-2 rounded-sm border bg-card md:w-16">
							<Image alt={title} className="h-auto w-[80%]" height={42} src={logo} width={42} />
						</div>
					)}
					<strong className="font-medium text-lg sm:text-xl md:text-2xl">{title}</strong>
				</div>
				<div className="text-sm md:text-xl">{children}</div>
			</div>
		</div>
	);
}
