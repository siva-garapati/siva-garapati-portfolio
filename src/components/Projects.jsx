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
                } gap-6 sm:gap-8 lg:gap-12 items-center lg:p-0 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:backdrop-blur-none`}
        >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[180px] border-b-2 lg:border-b-0 sm:h-[340px] lg:h-[300px] object-cover"
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
            <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6 px-3 pb-3 lg:px-0 lg:pb-0">
                <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="space-y-3 sm:space-y-4 lg:space-y-6"
                >
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold">{project.title}</h3>

                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium glass"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons - Hidden on Mobile (overlay buttons used instead) */}
                    <div className="hidden lg:flex gap-3 lg:gap-4">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 lg:h-10 px-3 lg:px-4 py-2 rounded-md text-sm font-medium bg-accent hover:bg-accent/90 text-white transition-all duration-300"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-9 lg:h-10 px-3 lg:px-4 py-2 rounded-md text-sm font-medium border border-accent bg-background text-accent hover:bg-accent/10 transition-all duration-300"
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
        <section id="projects" className="pt-20 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-xs sm:text-lg max-w-2xl mx-auto px-1">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-8 sm:space-y-12 lg:space-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}