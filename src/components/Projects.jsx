import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import peflowSS from "../assets/peflowSS.png";
// import { Button } from "./ui/button";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured online shopping platform with user authentication, product management, shopping cart, and payment integration.",
        image: peflowSS,
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Task Management App",
        description:
            "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        tech: ["React", "Express", "Socket.io", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Weather Dashboard",
        description:
            "Real-time weather monitoring dashboard with location-based forecasts, interactive maps, and weather alerts.",
        image:
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        tech: ["React", "OpenWeather API", "TailwindCSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-8 items-center`}
                        >
                            {/* Project Image */}
                            <motion.div whileHover={{ scale: 1.02 }} className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[300px] object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Overlay Buttons - Mobile Only */}
                                    <div className="lg:hidden absolute top-4 right-4 flex gap-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent transition-all duration-300 glow-orange"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-accent hover:bg-background transition-all duration-300 border border-accent/50"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.2 }}
                                    className="space-y-4 lg:space-y-6"
                                >
                                    <h3 className="text-2xl lg:text-3xl font-bold">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-sm font-medium glass"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons - Hidden on Mobile */}
                                    <div className="hidden lg:flex gap-4">
                                        <button className="bg-accent hover:bg-accent/90 text-white gap-2 glow-orange hover:glow-orange-lg transition-all duration-300">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        </button>
                                        <button
                                            variant="outline"
                                            className="gap-2 border-accent text-accent hover:bg-accent/10 hover:glow-orange transition-all duration-300"
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </a>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}