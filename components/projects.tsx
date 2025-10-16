import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Thesis",
    description:
      "A online job finder website solution with real-time job matching. Built with Laravel, HTML, Tailwind CSS, JavaScript, PHP, and MySQL.",
    image: "/hanapbuhay.png",
    tags: ["Laravel", "MySQL", "JavaScript", "Tailwind CSS", "PHP", "HTML"],
    github: "https://github.com/Way2Ez2Nai",
    demo: "https://hanapbuhay.org/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects I've worked on, showcasing my skills in full-stack development, UI/UX design, and
              modern web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
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
