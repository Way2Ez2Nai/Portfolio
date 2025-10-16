import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Ian Gonzales
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-medium">Front End Developer</p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I still figuring things out, but I love creating beautiful and functional web experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-base">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
