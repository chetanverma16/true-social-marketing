import React from "react";

import { useForm } from "react-hook-form";
import { Form as FormType } from "@/types/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  function onSubmit(values: FormType) {
    if (values.name.length < 2) {
      form.setError("name", {
        type: "manual",
        message: "Name must be at least 2 characters long",
      });
      toast.error("Name must be at least 2 characters long");
    }
    if (!values.email.includes("@")) {
      form.setError("email", {
        type: "manual",
        message: "Please enter a valid email address",
      });
      toast.error("Please enter a valid email address");
    }

    if (values.name.length >= 2 && values.email.includes("@")) {
      toast.success("Form submitted successfully");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-6 w-full max-w-md border rounded-xl bg-gray-950 p-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" type="text" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormDescription>
                This is where we will contact you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
