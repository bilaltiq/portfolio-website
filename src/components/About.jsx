import { Code, GraduationCap, LucideBriefcase } from "lucide-react"

export const About = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span>About Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="flex justify-center space-x-4">
                    <GraduationCap size={35} className="text-primary" />
                    </span>
                    <h3 className="text-2xl font-semibold flex justify-center mb-0.5">  
                        <span>Amherst College</span>   
                    </h3>
                    <p className="text-center italic text-muted-foreground mb-3">
                        Expected Graduation - May 2027
                    </p>

                    <p className="text-muted-foreground siz"> 
                        Computer Science & Math Double Major
                    </p>

                    <p className="text-muted foreground">
                        I'm a machine learning and visual computing enthusiast with a passion for building software that bridges technology and creativity. From AI-driven 3D modelling to customer-centric web applications, this site showcases some of my projects, experiments and thoughts as I continue to work at the intersection of code, design and ML.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>

                </div>
                
            

                <div className="grid grid-cols-1 gap-6">

                    

                    

                   <span className="flex justify-center space-x-4">
                    <LucideBriefcase size={35} className="text-primary" />
                    </span>
                    <div className="gradient-border p-6 card-hover">
                        
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}