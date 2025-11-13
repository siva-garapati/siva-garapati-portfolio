import { Download, Handshake, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumeFile from "../assets/siva_garapati.pdf";

const skills = [
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
]

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10"
        >
            {/* === Animated Grid Background === */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.6, duration: 1.2 }}
                className="absolute inset-0 -z-20"
            >
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_2px,transparent_2px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_2px,transparent_2px)] [background-size:40px_40px] md:[background-size:80px_80px]" />

                {/* Fade to edges */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" /> */}
            </motion.div>

            {/* === Floating Accent Blurs === */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-500/20 dark:bg-orange-400/15 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-500/15 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
                {/* Gentle gradient overlay for better depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
            </motion.div>

            {/* === Main Content === */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Greeting */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl font-medium text-muted-foreground mb-2"
                    >
                        Hi, I'm
                    </motion.h2>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
                    >
                        Siva Garapati
                    </motion.h1>

                    {/* Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative inline-block mb-6"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                            Full Stack Developer
                        </h2>
                        <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent glow-orange" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8"
                    >
                        Bringing ideas to life through intelligent, interactive web experiences
                    </motion.p>

                    {/* Skill Logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8 md:mb-10"
                    >
                        {skills.map((skill) => (
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                key={skill.name}
                                className="w-14 h-14 p-2 bg-white/10 dark:bg-white/5 backdrop-blur rounded-full 
                       flex items-center justify-center border border-white/10 
                       hover:shadow-lg hover:shadow-orange-400/30 transition-all duration-300"
                                title={skill.name}
                            >
                                <img
                                    src={skill.url}
                                    alt={skill.name}
                                    className={`w-full h-full object-contain ${skill.name.toLowerCase() === "express" ? "dark:invert dark:brightness-200" : ""
                                        }`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Buttons Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4 mb-10 sm:mb-12 md:mb-16"
                    >
                        {/* Download Resume */}
                        <a
                            href={resumeFile}
                            download="siva-garapati-resume.pdf"
                            className="flex items-center gap-2 px-6 py-2 rounded-md font-medium
             bg-black text-white dark:bg-white dark:text-black
             hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>

                        {/* Let's Work Together */}
                        <button
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="flex items-center gap-2 px-6 py-2 rounded-md font-medium
               border border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400
               hover:bg-orange-500/20 hover:backdrop-blur-md transition-all duration-300"
                        >
                            <Handshake className="w-5 h-5" />
                            Let's Work Together
                        </button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onClick={scrollToProjects}
                        className="inline-flex flex-col items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                    >
                        <span className="text-sm font-medium">Discover My Work</span>
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ repeat: Infinity, duration: 1.0 }}
                            className="p-2 rounded-full glass group-hover:glow-orange"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
