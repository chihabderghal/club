import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type Member = {
    image_path: string;
    name: string;
    team: string;
    position: string;
    descritpion: string;
    system: IconProp;
    github: string;
    linkedin: string;
    instagram: string;
}


function MemeberCard(member: Member) {
    return (
        <div className="lg:mx-0 text-center content-end  text-white border-4 rounded-2xl">
            <div className="flex flex-col items-center">
                <div className="flex justify-center mt-10 ">
                    <Image src={member.image_path} alt="image" className="rounded-full border-2 border-white"
                           width={240} height={240}/>
                </div>
                <div className="py-5 flex flex-row justify-center items-center">
                    <h1 className="font-bold text-xl px-3 items-center justify-center text-center">{member.name}</h1>
                    <FontAwesomeIcon icon={member.system} width={35} height={35}/>
                </div>

                <div className="flex justify-center gap-2 pb-6">
                    <div
                        className="border-2 border-[#ED1C24] text-center text-red-600 relative p-2 rounded-3xl uppercase">
                        {member.team}
                    </div>
                    <div
                        className={`border-2  text-center  relative p-2 rounded-3xl uppercase 
                        ${member.position == "president" ? 'border-yellow-400 text-yellow-400' : 'text-green-600 border-green-600'}
                        ${member.position == "leader" ? 'border-sky-400 text-sky-400' : 'text-green-600 border-green-600'}
                        `}>
                        {member.position}
                    </div>
                </div>

                <div
                    className="py-auto mx-5 mb-5 text-center flex justify-center items-center lg:items-center h-[260px] lg:h-[210px] md:h-[150px] font-light">
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