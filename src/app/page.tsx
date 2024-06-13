"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo"
import { IconCloudDemo } from "@/components/IconCloudDemo";
import { SparklesPreview } from "@/components/SparklesPreview";

export default function Home() {
  const words = ["Frontend-Developer", "Backend-Developer", "MERN-Stack-Developer", "Competitive-Coder"];
  const projects = [
    {
      id: 1,
      source: "https://wallpapercave.com/wp/wp11230267.jpg",
      title: "Myster Message",
      description: "Mystery message is a web app for unknown messaging",
    },
    {
      id: 2,
      source: "https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png",
      title: "E-Commerce Site",
      description: "It is an e-commerce website for salling and buying",
    },
  ]
  return (
    <div>
      <div className="">
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
        <div className="">
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
        <div className="text-center font-bold text-6xl">
          <SparklesPreview />
        </div>
      </div>
    </div>
  );
}
