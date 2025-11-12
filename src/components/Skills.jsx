import { useState } from "react";
import { motion } from "framer-motion";

export function Skills() {
    const [activeFilter, setActiveFilter] = useState("backend");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillsData = [
        { name: "React.js", hoverText: "Component-based frontend library", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML", hoverText: "Markup language for structuring web content", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", hoverText: "Stylesheet language for designing web pages", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", hoverText: "Core programming language for the web", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", hoverText: "Utility-first CSS framework for fast UI design", category: "frontend", iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Material UI", hoverText: "React UI framework based on Material Design", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Recharts", hoverText: "Charting library for React", category: "frontend", iconUrl: "https://raw.githubusercontent.com/recharts/recharts.org/master/public/favicon.ico" },

        { name: "Node.js", hoverText: "JavaScript runtime built on Chrome's V8 engine", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", hoverText: "Web framework for Node.js", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Flask", hoverText: "Lightweight Python web framework", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "REST APIs", hoverText: "Design and implement RESTful APIs", category: "backend", iconUrl: "h" },
        { name: "WebSockets", hoverText: "Protocol for real-time communication", category: "backend", iconUrl: "h" },
        { name: "Socket.io", hoverText: "Library for real-time bidirectional communication", category: "backend", iconUrl: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
        // { name: "OpenAI", hoverText: "AI API integration for intelligent features", category: "backend", iconUrl: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" },

        { name: "Python", hoverText: "High-level general-purpose programming language", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", hoverText: "Relational database management system", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", hoverText: "NoSQL database for scalable apps", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "GitHub", hoverText: "Platform for hosting and collaborating on code", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Git", hoverText: "Version control system for tracking code changes", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Vercel", hoverText: "Platform for deploying frontend and full-stack apps", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Render", hoverText: "Cloud platform for deploying web services", category: "tools", iconUrl: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
    ];

    const filters = [
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Tools & Others", value: "tools" },
    ];

    const filteredSkills = skillsData.filter(
        (skill) => skill.category === activeFilter
    );

    const blackIcons = ['express.js', 'flask', 'vercel', 'render', 'socket.io', 'github']

    return (
        <section id="skills" className="pt-20 sm:py-10 lg:py-14">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold mb-3"
                    >
                        Skills & <span className="text-gradient">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        Technologies I use to craft modern, efficient, and scalable apps.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12">
                    <div
                        className="flex gap-2 overflow-x-auto no-scrollbar bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10 rounded-full p-2 sm:p-1.5 shadow-inner max-w-full"
                        style={{ scrollSnapType: "x mandatory" }}
                    >
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 scroll-snap-align-start transition-all duration-300 ${activeFilter === filter.value
                                    ? "bg-accent text-accent-foreground shadow-lg"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                                    }`}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            className="group relative glass rounded-2xl p-5 hover:border-accent/60  transition-all duration-500 cursor-default overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center">
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">                                    <img
                                    src={skill.iconUrl}
                                    alt={skill.name}
                                    className={`w-full h-full object-contain drop-shadow-lg ${blackIcons.includes(skill.name.toLowerCase()) ? "dark:invert dark:brightness-200" : ""
                                        }`}
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                                </div>

                                {/* Text */}
                                <div className="relative w-full text-center h-12 flex items-center justify-center">
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredSkill === skill.name
                                            ? "opacity-0 -translate-y-3 scale-95"
                                            : "opacity-100 translate-y-0 scale-100"
                                            }`}
                                    >
                                        <span className="text-sm font-bold tracking-tight">
                                            {skill.name}
                                        </span>
                                    </div>

                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredSkill === skill.name
                                            ? "opacity-100 translate-y-0 scale-100"
                                            : "opacity-0 translate-y-3 scale-95"
                                            }`}
                                    >
                                        <p className="text-xs text-muted-foreground leading-tight px-2 font-medium">
                                            {skill.hoverText}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl border border-accent/30 animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};