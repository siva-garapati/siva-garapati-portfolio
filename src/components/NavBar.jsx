import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    // { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.replace("#", ""));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="bg-orange-500 text-white p-1 rounded-[6px]">SG</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${activeSection === link.href.replace("#", "")
                                        ? "text-accent"
                                        : "text-foreground hover:text-accent"
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-1 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${activeSection === link.href.replace("#", "")
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Social Icons & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href="https://github.com/siva-garapati"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/siva-garapati/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://x.com/srk0804"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-border/50"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setTimeout(() => setIsOpen(false), 1000)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                            ? "bg-accent/10 text-accent"
                                            : "hover:bg-accent/10 hover:text-accent"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50">
                                <a
                                    href="https://github.com/siva-garapati"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/siva-garapati/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://x.com/srk0804"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}