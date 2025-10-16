import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Coming Soon"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code",],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technologies and tools I use to bring ideas to life. Always learning and exploring new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 space-y-6 hover:border-primary/50 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <div className="h-0.5 w-12 bg-primary rounded-full" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
