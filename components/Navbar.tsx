import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {LINKS} from "@/data/constant";

function Navbar() {
    return (
        <nav
            className="py-4 md:py-2 lg:py-2  px-10 flex pt- justify-between lg:justify-around items-center bg-[#0d0d0d] text-white sticky top-0 z-10">
            <Link href="/">
                <Image src="/nextech.png" alt="logo" width={58} height={30}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex items-center">
                {LINKS.map((navbar) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link
                        href={navbar.link}
                        className="cursor-pointer transition hover:scale-125"
                    >
                        {navbar.title}
                    </Link>
                ))}
            </ul>

            <Link href="#"
                  className="uppercase border-2 text-white text-center rounded-2xl p-2 bg-[#0d0d0d] border-[#ED1C24] content-center hidden lg:flex hover:bg-[#ED1C24] hover:duration-500">
                <Image src="/img.png" alt="event" width={38} height={38}
                       className="flex justify-center items-center px-1 pb-[3px]"/>
                <div className="flex justify-center items-center py-1 pt-2">
                    event
                </div>
            </Link>

            <Image
                src="/main-menu.png"
                alt="menu"
                width={32}
                height={32}
                className={"inline-block cursor-pointer lg:hidden"}
            />

        </nav>
    )
}

export default Navbar;