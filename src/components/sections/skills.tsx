"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { SkillCategory } from "@/lib/types";
import { Code, Server, PenTool, GitMerge, MonitorSmartphone, Database, Palette, TerminalSquare, Component, BotMessageSquare } from 'lucide-react';

const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React & Next.js", icon: Code, description: "Building interactive UIs and server-rendered applications." },
      { name: "TypeScript", icon: Code, description: "Enhancing code quality with static typing." },
      { name: "Tailwind CSS", icon: Palette, description: "Rapidly building custom designs with a utility-first framework." },
      { name: "Framer Motion", icon: Component, description: "Creating fluid animations and micro-interactions." },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js & Express", icon: Server, description: "Developing fast and scalable server-side applications." },
      { name: "Firebase", icon: Database, description: "Leveraging Google's platform for auth, databases, and hosting." },
      { name: "PostgreSQL", icon: Database, description: "Utilizing powerful and reliable open-source relational databases." },
      { name: "REST & GraphQL", icon: GitMerge, description: "Designing and consuming robust APIs for data communication." },
    ]
  },
  {
    title: "UX/UI",
    skills: [
      { name: "Figma", icon: PenTool, description: "Designing high-fidelity mockups and interactive prototypes." },
      { name: "User Research", icon: MonitorSmartphone, description: "Understanding user needs to inform design decisions." },
      { name: "Wireframing", icon: Component, description: "Creating structural blueprints for web and mobile interfaces." },
      { name: "Accessibility", icon: BotMessageSquare, description: "Ensuring applications are usable by everyone." },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: GitMerge, description: "Managing code versions and collaborating with teams." },
      { name: "Vercel & Netlify", icon: TerminalSquare, description: "Deploying and hosting modern web applications." },
      { name: "Docker", icon: Server, description: "Containerizing applications for consistent environments." },
      { name: "Genkit AI", icon: BotMessageSquare, description: "Integrating AI flows for intelligent features." },
    ]
  }
];

export default function Skills() {
  return (
    <div className="text-center">
      <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Services &amp; Skills</h2>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
        Our expertise spans the full stack of web development, ensuring high-quality, robust, and scalable solutions.
      </p>

      <Tabs defaultValue="Frontend" className="w-full">
        <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 md:grid-cols-4 h-auto">
          {skillData.map(category => (
            <TabsTrigger key={category.title} value={category.title}>{category.title}</TabsTrigger>
          ))}
        </TabsList>
        {skillData.map(category => (
          <TabsContent key={category.title} value={category.title}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {category.skills.map((skill) => (
                <Card key={skill.name} className="text-left hover:border-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <skill.icon className="w-8 h-8 text-primary" />
                      <CardTitle className="font-bold text-lg">{skill.name}</CardTitle>
                    </div>
                    <CardDescription className="pt-2">{skill.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
