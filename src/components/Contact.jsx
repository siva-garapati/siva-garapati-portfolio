import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const socials = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/siva-garapati",
        color: "hover:text-[#333] dark:hover:text-white",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/siva-garapati/",
        color: "hover:text-[#0077b5]",
    },
    {
        name: "Twitter",
        icon: Twitter,
        url: "https://x.com/srk0804",
        color: "hover:text-[#1DA1F2]",
    },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="py-24 border-t border-border/50 relative overflow-hidden"
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Let’s connect and create something meaningful together.
                        Whether it’s a collaboration, opportunity, or just a tech chat —
                        I’d love to hear from you!
                    </p>
                </motion.div>

                {/* Email Button */}
                <motion.a
                    href="mailto:sivagarapati999@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group inline-flex items-center justify-center bg-orange-500 text-white px-7 py-3 rounded-md font-medium transition-all duration-300 hover:bg-orange-600"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12"
                >
                    <p className="text-sm text-muted-foreground mb-5">
                        Connect with me on
                    </p>
                    <div className="flex justify-center gap-6">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.1 }}
                                className={`p-3 rounded-xl border border-border/50 transition-all duration-300 hover:border-orange-500 ${social.color}`}
                            >
                                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 flex items-center justify-center gap-4"
                >
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
                    <span className="text-sm text-muted-foreground">
                        Open to new opportunities
                    </span>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
                </motion.div>
            </div>
        </section>
    );
}
