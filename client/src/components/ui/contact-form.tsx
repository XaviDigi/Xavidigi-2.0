import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query"; // Removed
// import { apiRequest } from "@/lib/queryClient"; // Removed
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/languageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for loading state

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Removed contactMutation hook

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("apikey", "e0b7487e-a955-4097-a44b-36f91f93b5a8"); // Added API Key
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", `Contact Form: ${data.subject}`); // Use form subject
    formData.append("message", data.message);
    formData.append("from_name", "Your Portfolio Site"); // Customize sender name if desired
    // formData.append("redirect", "https://web3forms.com/success"); // Optional success redirect

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t.contact.form.success,
          description: t.contact.form.successMessage, // Or use result.message
        });
        form.reset();
      } else {
        console.error("Web3Forms Error:", result);
        toast({
          title: t.contact.form.error,
          description: result.message || t.contact.form.errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: t.contact.form.error,
        description: t.contact.form.errorMessage, // Generic error
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.form.name}</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
              <FormLabel>{t.contact.form.email}</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
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
              <FormLabel>{t.contact.form.subject}</FormLabel>
              <FormControl>
                <Input placeholder="Project Inquiry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.form.message}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting} // Use local state for disabling
        >
          {isSubmitting ? ( // Use local state for loading indicator
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              {t.contact.form.sending}
            </>
          ) : (
            t.contact.form.submit
          )}
        </Button>
      </form>
    </Form>
  );
}
