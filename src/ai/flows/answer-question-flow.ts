'use server';
/**
 * @fileOverview An AI agent that answers questions about web development.
 *
 * - answerQuestion - A function that answers a user's question.
 * - AnswerQuestionInput - The input type for the answerQuestion function.
 * - AnswerQuestionOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about web development.'),
});
export type AnswerQuestionInput = z.infer<typeof AnswerQuestionInputSchema>;

const AnswerQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AnswerQuestionOutput = z.infer<typeof AnswerQuestionOutputSchema>;

export async function answerQuestion(input: AnswerQuestionInput): Promise<AnswerQuestionOutput> {
  return answerQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionPrompt',
  input: {schema: AnswerQuestionInputSchema},
  output: {schema: AnswerQuestionOutputSchema},
  prompt: `You are an expert web developer and consultant for 'Forge Revamped', a digital agency. Your persona is helpful, insightful, and professional.

  A user has a question. Your task is to provide a clear, concise, and helpful answer.

  When answering, refer to the agency's process (Briefing, Analytics, Prototyping, Design, Development, The Final) and skills (Frontend, Backend, UI/UX, etc.) where relevant to give context and showcase the agency's expertise.

  User's Question:
  "{{{question}}}"

  Provide a direct answer to their question.
  `,
});

const answerQuestionFlow = ai.defineFlow(
  {
    name: 'answerQuestionFlow',
    inputSchema: AnswerQuestionInputSchema,
    outputSchema: AnswerQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
