import Hero from "@/components/Hero";
import Club from "@/components/Club";
import Newbie from "@/components/Newbie";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero/>
            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>
            <Club/>

            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>

            <div className="mb-20">
                <h1 className="uppercase text-center text-5xl pt-3 text-white font-bold">faqs</h1>

                <div className="mt-10 mx-10 px-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
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
                    <Image src="/univ2.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/dasc.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/ntic2.png" alt="image" width={185} height={185}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/univ2.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/dasc.png" alt="image" width={200} height={200}
                           className="hover:scale-110 transition hover:duration-400"/>
                    <Image src="/ntic2.png" alt="image" width={185} height={185}
                           className="hover:scale-110 transition hover:duration-400"/>
                </div>
            </div>

            <div className="border border-white hidden my-6 mx-[400px] lg:flex md:hidden"/>

        </div>
    );
}
