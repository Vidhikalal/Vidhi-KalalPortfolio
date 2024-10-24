import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function VidhiKalalPortfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Vidhi Kalal
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Computer Science Student | Software Engineer
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Summary
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Third-year Computer Science student with strong analytical and
                  critical thinking skills
                </li>
                <li>
                  Proficient in Cloud-based data storage, computing, and
                  security strategies
                </li>
                <li>
                  Skilled in Data Analysis & Visualization tools for insightful
                  reporting and interpretation
                </li>
                <li>
                  Understanding of the Software Development Life Cycle and Agile
                  Methodologies
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Promotion and Engagement Team Member",
                company: "Sheridan College",
                date: "Aug 2024 - Present",
                description: [
                  "Spearheaded strategic promotion of 25+ campus events, boosting student participation and interaction by 45%.",
                  "Drove a 60% increase in student engagement through targeted communication strategies.",
                ],
              },
              {
                title: "Peer Mentor Team Lead",
                company: "Sheridan College",
                date: "Aug 2024 - Present",
                description: [
                  "Led 20+ mentorship sessions on leadership, conducted 15+ classroom visits, and contributed to 30+ conferences and orientations.",
                  "Boosted student satisfaction by 55% through effective training of 20+ new peer mentors.",
                ],
              },
              {
                title: "Software Engineering Fellow",
                company: "Headstarter AI",
                date: "Jul 2024 - Sept 2024",
                description: [
                  "Developed and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints.",
                  "Incorporated CI/CD practices for iterative deployment.",
                ],
              },
              {
                title: "Peer Mentor",
                company: "Sheridan College",
                date: "Aug 2023 - Jul 2024",
                description: [
                  "Guided students through academic and personal challenges by offering advice, resources, and mentorship.",
                  "Cultivated a leadership acumen, capable of navigating complex challenges and fostering teamwork.",
                ],
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.company} | {job.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Projects
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Multimodal Complaint Analyzer",
                description:
                  "Developed 'Customer Complaint Analyzer' leveraging Google Cloud API, Next.js, Express, and Node.js for categorizing customer complaints, including text, video, audio, images. Improved complaint categorization by 6% compared to manual methods.",
                link: "https://github.com/Vidhikalal/multimodal-complaint-analyzer",
              },
              {
                title: "Sheridan Student Support",
                description:
                  "Developed Sheridan Student Support AI leveraging Shadcn, TypeScript, Upstash, Meta.LLaMA, and rag-chat to create an intelligent platform for addressing student inquiries and providing real-time support. Successfully integrated backend and frontend technologies to deliver a scalable and responsive solution for improved user experience.",
                link: "https://github.com/Vidhikalal/sheridan-student-support",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Button asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Technical Skills
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "JavaScript",
                  "TypeScript",
                  "React Native",
                  "Node.js",
                  "Linux",
                  "Spring",
                  "AWS",
                  "Google Cloud Platform",
                  "Figma",
                  "MongoDB",
                  "Firebase",
                  "JIRA",
                  "Azure",
                  "Django",
                  "Angular",
                  "Open AI",
                  "Vertex AI",
                ].map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Education
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Computer Science</CardTitle>
              <CardDescription>
                Sheridan College | Expected 2026
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Extra-Curricular Activities
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Vice President of Sheridan Swiftie Club
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Certifications
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Actively working on AWS Cloud Practitioner Certification
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:vidhikalal15@gmail.com"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+16478975185"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/vidhi-kalal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Vidhikalal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
