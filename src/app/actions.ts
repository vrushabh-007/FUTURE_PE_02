"use server";

import { z } from "zod";
import { suggestSkills, type SuggestSkillsInput } from "@/ai/flows/suggest-skills";
import { answerQuestion, type AnswerQuestionInput } from "@/ai/flows/answer-question-flow";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  // Simulate sending an email
  console.log("Sending contact message:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}

export async function suggestSkillsAction(input: SuggestSkillsInput) {
    try {
        const result = await suggestSkills(input);
        return result;
    } catch (error) {
        console.error("Error in suggestSkillsAction:", error);
        return { suggestedSkills: null, error: "Failed to get suggestions from AI." };
    }
}

export async function answerQuestionAction(input: AnswerQuestionInput) {
    try {
        const result = await answerQuestion(input);
        return result;
    } catch (error) {
        console.error("Error in answerQuestionAction:", error);
        return { answer: null, error: "Failed to get an answer from the AI." };
    }
}
