import React from "react";
import { Pi } from "lucide-react";

import { TechStack } from "./stacks";

const Skills = () => {
    const skills = ["React", "Next.js", "Typescript", "Tailwind CSS", "Rust", "Docker", "SQL", "MongoDB", "NodeJS", "Redux", "Socket.io", "Python", "GIT", "GO"];
    return (
        <div className="mt-4 flex w-full md:justify-center md:items-center md:text-center flex-col">
            <h1 className="text-4xl flex gap-2 items-center tracking-wide lg:text-7xl font-bold  md:border-b-2 ">
                Skills
            </h1>
            <p className=" mt-2 lg:mt-7 text-sm md:text-lg opacity-70 font-medium uppercase tracking-widest ">Crafting full stack web apps using M.E.R.N stack</p>
            <div className="md:hidden mt-4 flex gap-2 flex-wrap">
                {skills.map((skill, index) => (
                    <span key={index} className={`text-sm font-medium tracking-wide dark:text-white text-black/70 border-2 border-black/30 dark:bg-neutral-700 dark:border-white/10 dark:shadow-lg p-2 rounded-lg mt-2 mr-2 ${index % 2 === 1 ? " rotate-3" : " -rotate-3"}`}>
                        {skill}
                    </span>
                ))}
            </div>
            {/* desktop skills animated */}
            <TechStack />
        </div>
    );
};

export default Skills;