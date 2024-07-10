"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
import { IconCloudDemo } from "@/components/IconCloudDemo";
import Skills from "@/components/skill/Skill";
import { DockDemo } from "@/components/DockDemo";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  const words = ["Frontend-Developer", "Backend-Developer", "MERN-Stack-Developer", "Competitive-Coder"];
  const projects = [
    {
      png: "/project/mystery-message.png",
      title: "Myster Message",
      description: "Mystery message is a web app for unknown messaging and recieving",
      view: "https://mystery-messages-jet.vercel.app/",
      source: "https://github.com/403ABHIJEET/mystery-messages"
    },
    {
      png: "/project/e-commerce.png",
      title: "E-Commerce Site",
      description: "It is an e-commerce website for salling and buying required things",
      view: "#",
      source: "#"
    },
  ]
  return (
    <div className="m-0">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="flex items-center justify-center text-2xl md:text-5xl lg:text-6xl flex-col my-40 md:my-96 lg:my-96">
          <h1 className="font-black text-4xl md:text-6xl"><span className="text-purple-700">ABHIJEET</span> KUMAR</h1>
          <div className="flex items-center justify-center my-12 text-slate-50 font-black flex-row">
            <FlipWords words={words} />
          </div>
          <BackgroundBeams />
        </div>
        <div className="flex justify-center">
          <IconCloudDemo />
        </div>
      </div>
      <div className="hidden lg:flex justify-center px-20 pr-24">
        <Skills />
      </div>
      <div className="pt-20">
        <h1 className="text-center font-bold text-6xl">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center bg-transparent p-4 md:p-0 lg:p-0">
          {
            projects.map((item, idx) => (
              <ThreeDCardDemo key={idx} png={item.png} title={item.title} description={item.description} view={item.view} source={item.source} />
            ))
          }
        </div>
      </div>
      <footer className="flex flex-col md:flex-row lg:flex-row justify-evenly items-center bg-gray-800 h-40 md:h-auto lg:h-auto">
        <a href="https://drive.google.com/file/d/10BputS-uL_t8AzTkrHwVkl0SA3FfZtio/view?usp=sharing" target="_blank">
          <ShimmerButton>Download CV</ShimmerButton>
        </a>
        <div className="hidden lg:block">
          Copyright &copy; 2024 ABHIJEET KUMAR
        </div>
        <div>
          <DockDemo />
        </div>
      </footer>
    </div>
  );
}
