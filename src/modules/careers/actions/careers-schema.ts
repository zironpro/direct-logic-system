import { z } from "zod/v4";

export const careersSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	phone: z.string().min(10).max(15),
	city: z.string().min(2).max(50),
	message: z.string().min(10),
	resume: z.instanceof(File).optional(),
});

export type CareersSchema = z.infer<typeof careersSchema>;
