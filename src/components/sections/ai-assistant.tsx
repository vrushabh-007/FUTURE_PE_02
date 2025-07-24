'use client';

import { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, useInView } from 'framer-motion';

import { answerQuestionAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, BotMessageSquare } from "lucide-react";

const formSchema = z.object({
  question: z.string().min(10, "Please ask a more detailed question (at least 10 characters)."),
});

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AIAssistant() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const result = await answerQuestionAction({ question: values.question });
      if (result.answer) {
        setAnswer(result.answer);
      } else {
        setError(result.error || "Could not get an answer. Please try again.");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.section
      id="ai-assistant"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-8 md:p-16 border-t border-border"
    >
      <div className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="text-center space-y-4">
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                <BotMessageSquare className="h-8 w-8" />
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase">AI Assistant</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a question about web development, our process, or how we can help? Ask our AI assistant.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Your Question</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., What's the difference between a static site and a dynamic web app?"
                      className="min-h-[120px] bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col items-center gap-4">
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto px-10 font-bold">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Thinking...
                  </>
                ) : (
                  "Ask Question"
                )}
              </Button>
            </div>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            
            {answer && (
              <div className="w-full space-y-4 pt-6 text-left">
                <h4 className="font-headline text-xl uppercase font-bold text-center">Answer:</h4>
                <div className="p-6 rounded-lg bg-secondary/50 text-secondary-foreground">
                  <p className="whitespace-pre-wrap">{answer}</p>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </motion.section>
  );
}
