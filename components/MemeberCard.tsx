import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faWindows,} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type Member = {
    image_path: string;
    name: string;
    team: string;
    position: string;
    descritpion: string;
    github: string;
    linkedin: string;
    instagram: string;
}


function MemeberCard(member: Member) {
    return (
        <div className="lg:mx-0 text-center content-end  text-white border-4 rounded-2xl">
            <div>
                <div className="flex justify-center mt-10">
                    <Image src={member.image_path} alt="image" className="rounded-full " width={240} height={240}/>
                </div>
                <div className="py-5 flex flex-row justify-center items-center">
                    <h1 className="font-bold text-xl px-3 items-center justify-center text-center">{member.name}</h1>
                    <FontAwesomeIcon icon={faWindows} width={35} height={35}/>
                </div>

                <div className="flex justify-center gap-2 pb-6">
                    <div
                        className="border-2 border-[#ED1C24] text-center text-red-600 relative p-2 rounded-3xl uppercase">
                        {member.team}
                    </div>
                    <div
                        className="border-2 border-green-600 text-center text-green-600 relative p-2 rounded-3xl uppercase">
                        {member.position}
                    </div>
                </div>

                <div className="py-auto mx-5 mb-5 text-center flex justify-center items-start h-[200px] lg:h-[210px] md:h-[150px] font-light">
                    {member.descritpion}
                </div>
            </div>
                <div className="flex flex-row justify-center py-5 gap-10 ">
                    <Link href={member.github} className="hover:scale-125 hover:duration-300">
                        <FontAwesomeIcon icon={faGithub} width={30} height={30}/>
                    </Link>
                    <Link href={member.linkedin} className="hover:scale-125 hover:duration-300">
                        <FontAwesomeIcon icon={faLinkedin} width={30} height={30}/>
                    </Link>
                    <Link href={member.instagram} className="hover:scale-125 hover:duration-300">
                        <FontAwesomeIcon icon={faInstagram} width={30} height={30}/>
                    </Link>
                </div>
            </div>
    );
}

export default MemeberCard;