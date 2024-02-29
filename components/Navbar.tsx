import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <nav className="py-3 px-10 flex justify-between lg:justify-around items-center bg-[#0d0d0d] text-white">

            <Link href="/">
                <Image src="/nextech.png" alt="logo" width={58} height={30}/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex items-center uppercase">
                <Link href="#">members</Link>
                <Link href="#">newbie</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">about us</Link>
                <Link href="#">contact us</Link>
            </ul>

            <Link href="#"
                  className="uppercase border-red-600 text-white text-center rounded-full p-2 bg-red-600 content-center hidden lg:flex">
                <Image src="/img.png" alt="event" width={40} height={40}/>
                event
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

export default Navbar