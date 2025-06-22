import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 inline-block animate-fade-in">Hi, I'm </span>
                    <span className="text-glow inline-block opacity-0 ml-2 animate-fade-in-delay-1"> Bilal </span>
                    <span className="text-glow inline-block ml-2 opacity-0 animate-fade-in-delay-2"> Tariq</span>
                </h1>
                    <p className="text-md md:text-lg text-muted-foreground max-2-2xl mx-auto">Visual Computing. Machine Learning. Driven by Design.</p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects"  className="cosmic-button animate-float">
                            View My Work
                        </a>
                    </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary" />

        </div>

    </section>
    )
}