import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {
    return (
        <section className="grid gap-8 md:grid-cols-2 bg-[#0d0d0d] text-white py-72 px-28">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center items-center text-center uppercase py-20">
                <div className="text-4xl font-bold pb-6">
                    <h1>nextech</h1>
                    <h1>your hub for tech</h1>
                    <h1>exellence</h1>
                </div>

                <Link href="#"
                      className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex">
                    event
                </Link>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center items-center relative py-20">
                <Image src="/nextech.png" alt="event" width={250} height={250} className="flex justify-center"/>
            </div>
        </section>
    )
}

export default Hero;