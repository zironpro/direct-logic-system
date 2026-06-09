"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useOpenPanel } from "@openpanel/nextjs";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactSchema } from "../actions/contact-scema";

export const ContactForm = () => {
	const op = useOpenPanel();
	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			subject: "",
			message: "",
			email: "",
			phone: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof contactSchema>) {
		const subjectLen = values.subject.length;
		const subject_length_bucket = subjectLen < 20 ? "short" : subjectLen < 60 ? "medium" : "long";
		op.track("contact_form_submitted", {
			has_email: Boolean(values.email?.trim()),
			has_phone: Boolean(values.phone?.trim()),
			subject_length_bucket,
		});
		console.log(values);
	}

	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" type="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input placeholder="Enter your phone" type="tel" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<FormControl>
									<Input placeholder="Enter your subject" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea className="min-h-40 resize-none" placeholder="Enter your message" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-center">
					<Button className="w-full md:w-auto" type="submit" variant="primary">
						Send Message
					</Button>
				</div>
			</form>
		</Form>
	);
};
