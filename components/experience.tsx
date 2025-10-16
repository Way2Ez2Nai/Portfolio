import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "TechCorp",
    position: "Senior Full-Stack Engineer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Lead development of accessibility-focused UI components and design systems. Collaborate with cross-functional teams to implement best practices in web accessibility and performance optimization.",
    achievements: [
      "Improved application accessibility score from 65% to 98%",
      "Reduced bundle size by 40% through code splitting and optimization",
      "Mentored 5 junior developers in React and TypeScript best practices",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Work Experience</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              My professional journey in software development, working with amazing teams to build impactful products.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:border-primary/50 transition-colors">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{exp.position}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm px-3 py-1 w-fit">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
