import { Instagram, Linkedin, LucideLinkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "../hooks/use-toast";

export const Contact = () => {

    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thanks for the message!"
            })
        })
    }

    return (
        <section id="contact"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                This is a paragraph so im just gonna write it manually and i need to put something here also i love your moter
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <a href="mailto:mtariq27@amherst.edu"><Mail className="h-6 w-6 text-primary hover:text-white transition-colors"/></a>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:mtariq27@amherst.edu" className="text-muted-foreground hover:text-primary transition-colors">mtariq27@amherst.edu</a>
                            </div>
                        </div>


                    
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <a href="https://www.linkedin.com/in/tariq-bilal/"><LucideLinkedin className="h-6 w-6 text-primary hover:text-white transition-colors"/></a>
                            </div>
                            <div>
                                <h4 className="font-medium"> LinkedIn </h4>
                                <a href="https://www.linkedin.com/in/tariq-bilal/" className="text-muted-foreground hover:text-primary transition-colors">Bilal Tariq</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"> Amherst, MA </a>
                            </div>
                        </div>  
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>

                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.instagram.com/mbtoshq/" target="_blank">
                                <Instagram></Instagram>
                            </a>
                            <a href="https://www.instagram.com/mbtoshq/" target="_blank">
                                <Linkedin></Linkedin>
                            </a>
                            <a href="https://www.instagram.com/mbtoshq/" target="_blank">
                                <Instagram></Instagram>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={toast}>
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Bilal Tariq..."></input>
                        </div>

                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Email </label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="cowinmariokart@gmail.com"></input>
                        </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                            <textarea  id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="You're such a cool guy"/>
                        </div>

                        <button type="submit" className={cn("cosmic-button",
                            "w-full flex items-center justify-center gap-2",

                        )}>

                            <Send size={16}></Send>
                        </button>

                    </form> 
                </div>
            </div>
        </div>
        </section>
    )
}