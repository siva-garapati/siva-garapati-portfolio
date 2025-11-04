import { useState } from "react";

export function Skills() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillsData = [
        { name: "React", description: "UI Library", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", description: "Backend Runtime", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", description: "Web Framework", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", description: "NoSQL Database", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "JavaScript", description: "Programming Language", category: "languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", description: "Programming Language", category: "languages", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TailwindCSS", description: "CSS Framework", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", description: "Version Control", category: "tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "HTML5", description: "Markup Language", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", description: "Styling", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ];

    const filters = [
        { label: "All", value: "all" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Languages", value: "languages" },
        { label: "Tools", value: "tools" },
    ];

    const filteredSkills = skillsData.filter(
        (skill) => activeFilter === "all" || skill.category === activeFilter
    );

    return (
        <section id="skills" className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Skills & <span className="text-gradient">Tools</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Technologies I work with to build scalable and performant applications
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mb-12 overflow-x-auto scrollbar-hide">
                    <div className="flex flex-nowrap lg:flex-wrap lg:justify-center gap-2 min-w-max lg:min-w-0 px-4 lg:px-0">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`px-3 py-1.5 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === filter.value
                                        ? "bg-accent text-white glow-orange"
                                        : "glass hover:bg-accent/10 hover:text-accent"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="relative glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-default hover:glow-orange hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img
                                    src={skill.iconUrl}
                                    alt={skill.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                            </div>
                            <div className="text-center min-h-[2.5rem] flex flex-col justify-center">
                                <p
                                    className={`text-sm font-semibold transition-all duration-300 ${hoveredSkill === skill.name ? "text-accent" : ""
                                        }`}
                                >
                                    {skill.name}
                                </p>
                                {hoveredSkill === skill.name && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {skill.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}