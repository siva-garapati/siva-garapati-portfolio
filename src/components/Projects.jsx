import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import peflow from '../assets/peflow.png'
import chatbox from '../assets/chatbox.png'
import flipmart from '../assets/flipmart.png'

const projects = [
    {
        title: "PeFlow – Transaction Analyzer",
        description: "Web app that extracts and analyzes PhonePe PDF statements to visualize spending patterns, income trends, and financial summaries.",
        image: peflow,
        tech: ["React", "Express.js", "Recharts", "pdf-parse", "Tailwind CSS"],
        liveUrl: "https://peflow.vercel.app/",
        githubUrl: "https://github.com/siva-garapati/PeFlow",
    },
    {
        title: "ChatBoX – Real-Time Chat App",
        description: "A real-time messaging platform with instant communication, message persistence, and responsive design for seamless chatting.",
        image: chatbox,
        tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
        liveUrl: "https://newchatbox.vercel.app/",
        githubUrl: "https://github.com/siva-garapati/chat-application",
    },
    {
        title: "FlipMart – E-Commerce Platform",
        description: "A full-featured e-commerce web app with product management, authentication and cart system for a complete shopping experience.",
        image: flipmart,
        tech: ["React.js", "Express.js", "MongoDB", "CSS"],
        // liveUrl: "#",
        githubUrl: "https://github.com/siva-garapati/Ecommerce", // Replace with your actual repo
    },
];

function ProjectCard({ project, index }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 lg:gap-12 items-center`}
        >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[200px] sm:h-[300px] object-cover"
                    />

                    {/* Overlay Buttons - Mobile Only */}
                    <div className="lg:hidden absolute top-4 right-4 flex gap-2">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent transition-all duration-300"
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
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="space-y-4 lg:space-y-6"
                >
                    <h3 className="text-2xl lg:text-3xl font-bold">{project.title}</h3>

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

                    {/* Action Buttons - Hidden on Mobile (overlay buttons used instead) */}
                    <div className="hidden lg:flex gap-4">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md text-sm font-medium bg-accent hover:bg-accent/90 text-white transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md text-sm font-medium border border-accent bg-background text-accent hover:bg-accent/10 transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}