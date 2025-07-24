"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { suggestSkillsAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import { Badge } from '../ui/badge';

const formSchema = z.object({
  projectDescriptions: z.string().min(50, "Please provide more details about your projects (at least 50 characters)."),
});

export default function SkillSuggester() {
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescriptions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestedSkills([]);
    try {
      const result = await suggestSkillsAction({ projectDescriptions: values.projectDescriptions.split('\n') });
      if (result.suggestedSkills) {
        setSuggestedSkills(result.suggestedSkills);
      } else {
        setError("Could not generate skill suggestions. Please try again.");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 via-background to-background">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-2">
                    <Wand2 className="h-8 w-8" />
                </div>
              <CardTitle className="font-headline text-3xl">AI Skill Suggester</CardTitle>
              <CardDescription className="text-lg">
                Paste descriptions of your past projects, and our AI will suggest relevant skills to highlight in your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="projectDescriptions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Project Descriptions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Developed a full-stack e-commerce site using Next.js, Stripe, and Firebase..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="w-full font-bold">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Suggest Skills"
                )}
              </Button>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {suggestedSkills.length > 0 && (
                <div className="w-full space-y-2 pt-4">
                    <h4 className="font-bold text-center">Suggested Skills:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {suggestedSkills.map((skill, index) => (
                            <Badge key={index} variant="default" className="text-sm bg-primary/80">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
              )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
