export type Service = {
	metadata: ServiceMetadata;
	content: string;
};

export type ServiceMetadata = {
	id: number;
	title: string;
	slug: string;
	category: string;
	image: string;
	meta: {
		title: string;
		description: string;
	};
};
