import Hero from "@/components/Hero";
import Club from "@/components/Club";
import Newbie from "@/components/Newbie";
import Card from "@/components/Card";
import Image from "next/image";
import {CONTACT_MESSAGE, EMAIL} from "@/data/constant";
import React from "react";
import {QUESTIONS} from "@/data/questions";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>
            <Club/>

            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>

            <div className="mb-20">
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">faqs</h1>

                <div
                    className="mt-10 mx-10 px-10 lg:mx-22 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
                    {QUESTIONS.map((question) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="border border-white rounded-xl hover:scale-110 transition hover:duration-200">
                            <Card question={question.question} answer={question.answer}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>
            <Newbie/>
            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>

            <div>
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">our partners</h1>
                <div
                    className="mt-24 mx-5 px-24 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px] place-items-center mb-20">
                    <Image src="/univ2.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/dasc.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/ntic2.png" alt="image" width={185} height={185}
                           className="hover:scale-110 transition hover:duration-400"/>
                </div>
            </div>

            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>

            <div>
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">Contact us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                    <div className="my-20 mx-3 md:px-10 lg:px-10">
                        <form>
                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Name:</label>
                                <input type="text"
                                       placeholder="John Doe"
                                       className="font-light bg-[#0d0d0d] border border-white rounded-xl py-3 px-4"/>
                            </div>

                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Email:</label>
                                <input type="email"
                                       placeholder="exemple123@gmail.com"
                                       className="font-light bg-[#0d0d0d] border border-white rounded-xl py-3 px-4"/>
                            </div>

                            <div className="flex flex-col justify-center text-white py-3">
                                <label className="font-bold px-4 py-1">Message:</label>
                                <textarea cols={25} rows={10} placeholder="Write Your Message"
                                          className="font-light bg-[#0d0d0d] border border-white rounded-xl py-4 px-4"></textarea>
                            </div>

                            <div className="flex justify-center my-5">
                                <button
                                    className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="lg:flex lg:flex-col md:flex md:flex-col md:justify-center md:my-20 md:border-l-2  md:border-l-white lg:justify-center lg:my-20 lg:border-l-2 lg:border-l-white">
                        <h1 className="text-white text text-center text-xl font-light px-5 lg:px-20">
                                {CONTACT_MESSAGE}
                        </h1>
                        <div className="l">
                            <div
                                className="flex flex-col items-center my-10 justify-center md:felx md:flex-col lg:flex-row">
                                <Image src="/gmail.png" alt="gmail" width={45} height={45} className="mx-4"/>
                                <h2 className="font-light text-white text-2xl text-center">
                                    <Link href="mailto:nextechsquad@gmail.com">
                                        {EMAIL}
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
