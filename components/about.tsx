import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an aspiring front-end developer passionate about building intuitive, accessible, and visually engaging user interfaces.
                I love working at the crossroads of design and development—bringing creative concepts to life with clean, efficient, and responsive code.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Right now, I'm focused on sharpening my skills in modern front-end technologies like HTML, CSS, JavaScript, and React,
                while learning how to craft seamless user experiences that are both beautiful and performant.
                I care deeply about writing code that’s not only functional but also scalable and maintainable.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal is to contribute to meaningful projects where I can collaborate with designers and developers to build products that make a real impact.
                I’m excited to grow, learn from experienced teams, and continuously push the boundaries of what I can create on the web.
              </p>
            </div>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Pampanga, Philippines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-sm text-muted-foreground">Still learning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Focus</p>
                      <p className="text-sm text-muted-foreground">To be a full-stack developer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interests</p>
                      <p className="text-sm text-muted-foreground">Open source, UI/UX, Web standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
