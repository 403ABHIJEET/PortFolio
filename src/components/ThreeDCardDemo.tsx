"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image" 
import Link from "next/link";

interface myProps {
  png: string,
  title: string,
  description: string,
  view: string,
  source: string,
}

export function ThreeDCardDemo({ png, title, description, view, source }: myProps) {
  return (
    <CardContainer className="inter-var border-solid border-2 border-white rounded-lg">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={png}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" 
          />
        </CardItem>
        <div className="flex justify-evenly items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold border hover:border-none hover:bg-white hover:text-black"
          >
            <Link href={view} target="_blank">View</Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold border hover:border-none hover:bg-white hover:text-black"
          >
            <Link href={source} target="_blank">Source</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}