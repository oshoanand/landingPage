"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const subscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>;

const SubscriptionForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: SubscriptionFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Subscription data:", data);
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing! We'll keep you updated.",
      variant: "default",
    });
    form.reset();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Stay Updated</h3>
      <p className="text-muted-foreground mb-6 text-center text-sm">
        Be the first to know when we launch. No spam, we promise!
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      {...field} 
                      className="pl-10 h-12 text-base"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold" 
            disabled={form.formState.isSubmitting}
            size="lg"
          >
            {form.formState.isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SubscriptionForm;
