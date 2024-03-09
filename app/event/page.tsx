"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

function event() {
    return (
        <div>
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col justify-center items-center relative pt-20 pb-10">
                    <Image src="/nexverse.png" alt="event" width={270} height={270} className="flex justify-center"/>
                </div>

                <h1 className="uppercase text-center text-5xl text-white font-bold">The Nexverse Event</h1>

                <Link href="/documents/agenda.pdf"
                      className="uppercase font-bold text-white text-center rounded-xl p-3 bg-[#0d0d0d] border-2 border-[#ED1C24] content-cente lg:flex hover:bg-[#ED1C24] hover:duration-500">
                    download agenda
                </Link>
            </div>

            <div className="border border-white hidden my-8 mx-[400px] lg:flex md:hidden"/>

        </div>
    );
}

export default event;