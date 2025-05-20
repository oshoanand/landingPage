"use client";

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { generateTagline, GenerateTaglineInput } from '@/ai/flows/generate-tagline';
import { Wand2, Loader2 } from 'lucide-react';

const taglineSchema = z.object({
  projectDescription: z.string().min(10, { message: "Please describe your project in at least 10 characters." }).max(500, { message: "Description must be 500 characters or less." }),
});

type TaglineFormValues = z.infer<typeof taglineSchema>;

const TaglineGenerator: React.FC = () => {
  const { toast } = useToast();
  const [generatedTagline, setGeneratedTagline] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<TaglineFormValues>({
    resolver: zodResolver(taglineSchema),
    defaultValues: {
      projectDescription: "",
    },
  });

  const onSubmit = async (data: TaglineFormValues) => {
    startTransition(async () => {
      try {
        const input: GenerateTaglineInput = { projectDescription: data.projectDescription };
        const result = await generateTagline(input);
        if (result.tagline) {
          setGeneratedTagline(result.tagline);
          toast({
            title: "Tagline Generated!",
            description: "A new tagline has been successfully generated.",
          });
        } else {
          throw new Error("Failed to generate tagline.");
        }
      } catch (error) {
        console.error("Tagline generation error:", error);
        toast({
          title: "Error",
          description: "Could not generate tagline. Please try again.",
          variant: "destructive",
        });
        setGeneratedTagline(null);
      }
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-background/70 dark:bg-secondary/30 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wand2 className="h-6 w-6 text-primary" />
          AI Tagline Generator
        </CardTitle>
        <CardDescription>Need a catchy tagline? Describe your project, and let AI inspire you!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., A platform connecting local artists with buyers."
                      {...field}
                      rows={3}
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Tagline
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {generatedTagline && (
        <CardFooter className="mt-4">
          <div className="w-full p-4 bg-primary/10 border border-primary/20 rounded-md">
            <p className="text-sm font-semibold text-primary mb-1">Suggested Tagline:</p>
            <p className="text-lg italic text-foreground">"{generatedTagline}"</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default TaglineGenerator;
