import { Github, Link } from "lucide-react";
import GAT from "../assets/GAT.png";
import noonFS from "../assets/noonFS.png"
import Crevasse from "../assets/Crevasse.png"
import goldilocks from "../assets/goldilocks.png"
import layout from "../assets/layout.png"
import nn from "../assets/nn.jpg"

const projects = [
    {
        id: 1,
        img: GAT,
        title: "CAD 2 Sketch",
        descriptor: "AI/ML",
        description: "An implementation of Graph Attention Networks that selects mesh lines from CAD models transforming them into sketches",
        tags: ["Python", "PyTorch", "NumPy"],
        githubURL: "https://github.com/bilaltiq/Sketch_Nerual_Rendering/tree/Bilal/GAN"
    },
    {
        id: 2,
        img: Crevasse,
        descriptor: "AI/ML",
        title: "UNet Antarctic Crevasse Identification",
        description: "A machine learning project using a UNet architecture to automatically identify and segment crevasses in Antarctic satellite imagery, aiding glaciological research and safety",
        tags: ["Python", "TensorFlow", "Keras", "Jupyter", "Matplotlib", "NumPy"],
        githubURL: "https://github.com/bilaltiq/UNet-Crevasse-Identifier"
    
    },
    {
        id: 3,
        img: noonFS,
        descriptor: "",
        title: "Low-level Noon File System",
        description: "A file system built from the ground up through a custom Kernel, BIOS and Memory Management system",
        tags: ["Assembly (RISC-V)", "C"],
        githubURL: "https://github.com/bilaltiq/NoonFS"
  
    },
    {
        id: 4,
        img: layout,
        descriptor: "3D Web Development",
        title: "Layout",
        description: "A website helping customers design their apartment with furniture before they buy",
        tags: ["React", "Typescript", "Babylon", "NextJS", "TailwindCSS", "Firebase"],
        githubURL: "https://layout--layout-58451.us-central1.hosted.app/design/1qX1j05ZFqYuvUol8uCI"

    },
    {
        id: 5,
        img: nn,
        descriptor: "ML",
        title: "MNIST Custom Neural Network",
        description: "A fully functional Neural Network built from the ground up with no external libraries; detects MNIST digits",
        tags: ["Java"],
        githubURL: "https://github.com/bilaltiq/JavaNeuralNetwork"
     
    },
    {
        id: 6,
        img: goldilocks,
        descriptor: "Game Design",
        title: "Goldilocks",
        description: "Explore an infinite procedurally generated universe as try to find the mythical planet of Goldilocks",
        tags: ["Java"],
        githubURL: "https://github.com/sergleonov/goldilocksgame"

    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Feautured Projects
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    From Visual Computing to Game Design, delve deeper into my realm of projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-all duration-300
                            hover:backdrop-blur-md hover:bg-white/5 hover:border hover:border-white/60 hover:ring-1 hover:ring-white/80 hover:shadow-lg">
                            <div className="h-48 overflow-hidden relative">
                                <img src={project.img} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <span className="absolute bottom-2 right-2 bg-primary/60 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
                                    {project.descriptor} </span>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Link size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/bilaltiq">
                        GitHub <Github />
                    </a>

                </div>

            </div>

        </section>
    )
}