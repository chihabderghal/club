"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {QUESTION_EVENT} from "@/data/accordion";
import {EVENT_NAME} from "@/data/constants";
import {Card, CardFooter} from "@nextui-org/card";

function event() {
    const isDisabeld: boolean = true;
    const itemClasses = {
        title: "flex justify-center items-center text-center font-bold px-3",
        content: "flex justify-center items-center text-center font-light text-xl",
        indicator: "text-2xl",
    }
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <div>
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col justify-center items-center relative pt-20 pb-10">
                    <Image src="/nexverse.png" alt="event" width={270} height={270} className="flex justify-center"/>
                </div>

                <h1 className="uppercase text-center text-5xl text-white font-bold">The Nexverse Event</h1>

                <Link href="/documents/agenda.pdf" target={"_blank"}
                      className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500">
                    download agenda
                </Link>
            </div>

            <div className="border border-white hidden my-8 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-5xl py-10 text-white font-bold">{EVENT_NAME}</h1>

            {
                QUESTION_EVENT.map((question) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="flex justify-center items-center text-white align-middle mx-3 lg:mx-40">
                        <Accordion
                            className="max-w-4xl flex justify-center items-center bg-[#ED1C24] rounded-xl my-3"
                            itemClasses={itemClasses}
                        >
                            <AccordionItem key="1"
                                           aria-label="Accordion 1"
                                           title={question.question.toUpperCase()}
                                           className="flex flex-col justify-center items-center lg:max-w-3xl py-3"
                            >
                                {question.answer}
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))
            }

            <div className="border border-white hidden my-16 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-4xl text-white my-10 font-bold">workshops & conferences</h1>

            <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-center my-20">
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none mx-5 hover:scale-105 hover:duration-200"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={500}
                        src="/Workshop.jpg"
                        width={500}
                    />
                    <CardFooter
                        className="justify-center bg-white py-1 shadow-small">
                        <p className="text-black/80 font-bold">Available soon.</p>
                    </CardFooter>
                </Card>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none mx-5 hover:scale-105 hover:duration-200"
                >
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={500}
                        src="/Conference.jpg"
                        width={500}
                    />
                    <CardFooter
                        className="justify-center bg-white py-1 shadow-small">
                        <p className="text-black/80 font-bold">Available soon.</p>
                    </CardFooter>
                </Card>
            </div>

            <div className="border border-white hidden my-16 mx-[400px] lg:flex md:hidden"/>

            <h1 className="uppercase text-center text-4xl text-white my-10 font-bold">Competitions</h1>

            <div className="grid grid-cols-1 place-items-center relative">
                <Link href={"/"}>
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none mx-4 hover:scale-105 hover:duration-200"
                    >
                        <Image
                            alt="Woman listing to music"
                            className="object-cover"
                            height={600}
                            src="/draw.png"
                            width={600}
                        />
                        <CardFooter
                            className="justify-center bg-white py-1 shadow-small">
                            <p className="text-black/80 font-bold">Available soon.</p>
                        </CardFooter>
                    </Card>
                </Link>
            </div>

        </div>

    );
}

export default event;