import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 sm:py-24 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-none"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
                            About <span className="text-gradient">Me</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                            <p>
                                I'm a passionate{" "}
                                <span className="text-accent font-semibold">
                                    Full Stack Developer
                                </span>{" "}
                                specializing in the{" "}
                                <span className="text-accent font-semibold">MERN stack</span>. I
                                enjoy building web applications that solve real-world problems
                                through clean, efficient, and scalable code.
                            </p>

                            <p>
                                My web development journey began with curiosity about how
                                websites work, which soon turned into a deep passion for creating
                                seamless digital experiences. I’m particularly interested in{" "}
                                <span className="text-accent font-semibold">JavaScript</span>,{" "}
                                <span className="text-accent font-semibold">React</span>, and{" "}
                                <span className="text-accent font-semibold">
                                    backend development
                                </span>{" "}
                                using Node.js and Express.
                            </p>

                            <p>
                                Outside of coding, I enjoy exploring new technologies,
                                contributing to open-source projects, and keeping up with the
                                latest trends in web development. I believe in continuous
                                learning and writing code that makes an impact.
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full glass mt-5 sm:mt-6">
                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            <span className="text-sm sm:text-base font-medium">
                                Currently Learning:{" "}
                                <span className="text-accent">TypeScript</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 order-2 lg:order-none"
                    >
                        {[
                            {
                                icon: Code2,
                                title: "Clean Code",
                                description: "Writing maintainable and scalable solutions",
                            },
                            {
                                icon: Zap,
                                title: "Fast Learner",
                                description: "Quick to adapt to new technologies",
                            },
                            {
                                icon: Users,
                                title: "Team Player",
                                description: "Collaborative and communicative",
                            },
                            {
                                icon: Rocket,
                                title: "Problem Solver",
                                description: "Finding creative solutions to challenges",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="glass rounded-2xl p-4 sm:p-5 lg:p-6 transition-all hover:border-2 hover:border-accent/40 duration-300 group hover:shadow-lg"
                            >
                                <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-accent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};