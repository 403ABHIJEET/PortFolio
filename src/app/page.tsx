"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
import { IconCloudDemo } from "@/components/IconCloudDemo";
import { SparklesPreview } from "@/components/SparklesPreview";
import Skills from "@/components/skill/Skill";
import { DockDemo } from "@/components/DockDemo";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  const words = ["Frontend-Developer", "Backend-Developer", "MERN-Stack-Developer", "Competitive-Coder"];
  const projects = [
    {
      id: 1,
      source: "",
      title: "Myster Message",
      description: "Mystery message is a web app for unknown messaging",
    },
    {
      id: 2,
      source: "",
      title: "E-Commerce Site",
      description: "It is an e-commerce website for salling and buying",
    },
  ]
  return (
    <div className="m-0">
      <div className="flex justify-evenly">
        <div className="flex items-center justify-center text-6xl flex-col my-96">
          <h1 className="font-black"><span className="text-purple-700">ABHIJEET</span> KUMAR</h1>
          <div className="flex items-center justify-center flex-row pt-12">
            <div className="text-slate-50 font-black">
              <FlipWords words={words} />
            </div>
            <BackgroundBeams />
          </div>
        </div>
        <div className="">
          <IconCloudDemo />
        </div>
      </div>
      <div className="flex justify-center">
        <Skills />
      </div>
      <div className="pt-40">
        <h1 className="text-center font-bold text-6xl">
          Projects
        </h1>
        <div className="flex justify-evenly bg-transparent">
          {
            projects.map((item, idx) => (
              <ThreeDCardDemo key={item.id} source={item.source} title={item.title} description={item.description} />
            ))
          }
        </div>
      </div>
      <footer className="flex justify-evenly items-center bg-gray-800 h-16">
        <a href="https://drive.google.com/file/d/10BputS-uL_t8AzTkrHwVkl0SA3FfZtio/view" target="_blank">
          <ShimmerButton>Download CV</ShimmerButton>
        </a>
        <div>
          Abhijeet Kumar
        </div>
        <div>
          <DockDemo />
        </div>
      </footer>
    </div>
  );
}
