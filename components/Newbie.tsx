import Link from "next/link";
import Image from "next/image";
import React from "react";

function Newbie() {
    return(
        <div className="py-28">
            <div className="bg-[#ED1C24] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 px-44 lg: justify-center">
                <div className="flex text-center uppercase text-white text-4xl py-10 lg:justify-start">
                    jois us, and become an active memeber in our future events
                </div>

               <div className="flex items-center content-center justify-center px-20">
                   <Link href="#"
                         className="uppercase text-white text-center rounded-2xl p-2 bg-[#0d0d0d] lg:flex">
                       <div className="flex justify-center items-center py-1 pt-2 uppercase px-4 font-bold">
                           fill the form
                       </div>
                   </Link>
               </div>
            </div>
        </div>
    )
}

export default Newbie;