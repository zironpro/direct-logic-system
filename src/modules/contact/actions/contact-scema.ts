import { z } from "zod/v4";

export const contactSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.email().optional(),
	phone: z.string().min(10).max(15).optional(),
	subject: z.string().min(2).max(100),
	message: z.string().min(6),
});

export type ContactSchema = z.infer<typeof contactSchema>;
