"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useOpenPanel } from "@openpanel/nextjs";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { careersSchema } from "../actions/careers-schema";

export const CareersForm = () => {
  const op = useOpenPanel();
  const form = useForm<z.infer<typeof careersSchema>>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      resume: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof careersSchema>) {
    op.track("careers_form_submitted", {
      has_resume: Boolean(values.resume),
      has_message: values.message.trim().length > 0,
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
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
                <Textarea
                  className="min-h-40 resize-none"
                  placeholder="Tell us about your experience and why you'd like to join our team"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>Resume</FormLabel>
              <FormControl>
                <Input
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  type="file"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button className="w-full md:w-auto" type="submit" variant="primary">
            Submit Application
          </Button>
        </div>
      </form>
    </Form>
  );
};
