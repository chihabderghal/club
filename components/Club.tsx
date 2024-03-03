import Image from "next/image";

function Club() {
    return (
        <section
            className="grid grid-cols-1 py-20 px-3 gap-8 md:grid-cols-1 lg:grid-cols-2 bg-[#ED1C24] my-28 text-white content-center lg:justify-around lg:pl-16">
            <div className="flex flex-col justify-center text-center items-center uppercase py-5 lg:py-20">
                <h1 className="text-4xl font-bold pb-10 text-center underline">About Our Club</h1>
                <p className="font-bold text-2xl">
                    Nextech, our scientific club located in NTIC Faculty, pushes boundaries ever further.
                    It is a dynamic ship propelling us into a realm where learning exceeds traditional constraints,
                    sailing through an ocean of creativity to collect knowledge in everything related to technology.
                    You can join us regardless of the field of study and age. Moreover, it offers you the opportunity
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    theory. You can join us regardless of the field of study and age. Moreover, it offers you the
                    opportunity
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    to step onto the cockpit and put the learned skills into action, rather than just sticking to
                    theory.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col items-center relative">
                    <Image src="/nexfoot2.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                    <Image src="/nexfoot2.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                    <Image src="/nexfoot2.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                    <Image src="/nexfoot2.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/nexfoot2.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                    <Image src="/nexfoot.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                    <Image src="/nextfoot3.jpg" alt="image" width="400" height="100"
                           className=" border-2 border-white"/>
                </div>
            </div>
        </section>
    )
}

export default Club;