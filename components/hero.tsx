"use client"

import { ArrowDown, Shuffle as ShuffleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlurText from "@/components/ui/BlurText";
import Image from "next/image";
import ShuffleText from "@/components/ui/shuffle";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                <BlurText text="Ian Gonzales" className="inline-block whitespace-nowrap" />
              </h1>
              <p className="text-md sm:text-md md:text-md text-primary font-medium flex items-baseline gap-2">
                <ShuffleText
                  text="Front End Developer"
                  tag="span"
                  shuffleDirection="right"
                  animationMode="evenodd"
                  duration={0.6}
                  stagger={0.04}
                  className="inline-block whitespace-nowrap normal-case text-xl sm:text-2xl md:text-3xl"
                />
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm still figuring things out, but I love creating beautiful and functional web experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={() => window.open("https://github.com/Way2Ez2Nai", "_blank")}>
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
              <Image
                src="/profile.png"
                alt="Profile picture"
                fill
                sizes="(max-width: 640px) 20rem, (max-width: 768px) 24rem, (max-width: 1024px) 28rem, 32rem"
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      
    </section>
  )
}
