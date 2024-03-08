import {faDebian, faUbuntu, faWindows} from "@fortawesome/free-brands-svg-icons";

enum Team {
    MEDIA = "Media&Marketing",
    PROJECT = "Project",
    HUMAN_RECOURSES_AND_LOGISTICS = "HR&L",
    DESIGN = "DESIGN",
}

enum Position {
    MEMBER = "member",
    LEADER = "leader",
    PRESIDENT = "president",
    JOCKER = "Jocker"
}

export const MEMEBRS = [
    {
        image_path: "/images/bahi_image.JPG",
        name: "Brahim Mahboub",
        team: Position.JOCKER,
        position: Position.PRESIDENT,
        description: "سيّد السّادة العُظَمَاء.\n" +
            "إمبراطور الإمبراطوريات الجليلة.\n" +
            "حاكم الحُكّام الجَلِيل.\n" +
            "سلطان السلاطين العَظَم.\n" +
            "أسد الأسود العَزِيز.\n" +
            "ذو القُوَّة القَدِيمَة.\n" +
            "السّيد السّامي الجَليل.\n" +
            "قائد القادة الأعْظَم",
        system: faUbuntu,
        github: "https://github.com/Bahimb\n",
        linkedin: "https://www.linkedin.com/in/bahi-mahboub-a22490266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app\n",
        instagram: "https://www.instagram.com/bahi.mb?igsh=djJvMzA4c3Z0bjQ3\n",
    },
    {
        image_path: "/images/abdou_image.jpg",
        name: "Abdou Ouchen",
        team: Team.DESIGN,
        position: Position.LEADER,
        description: "A creative coder who effortlessly blends graphic design with technical expertise. With a love for both creating visually stunning designs and diving deep into lines of code, they find balance in embracing moments of relaxation and leisure.",
        system: faWindows,
        github: "https://github.com/abdoou-exe",
        linkedin: "https://www.linkedin.com/in/ouchen-abdelillah-28ba092a4/",
        instagram: "https://www.instagram.com/abdoou.exe?igsh=b2w4aDJnNDd0cG1r",
    },
    {
        image_path: "/images/ayoub_image.jpg",
        name: "Ayoub Abdelmoumen",
        team: Team.PROJECT,
        position: Position.MEMBER,
        description: "An enthusiastic programmer, fascinated by game development.I traverse the realms of syntax trees and color palettes. I am both architect and artist, sculpting pixels into dreams. For in this fusion lies the magic—the pixels breathe, and the code sings.",
        system: faWindows,
        github: "",
        linkedin: "",
        instagram: "https://www.instagram.com/ayoub_slh_90?igsh=c29md2NtZ3ViMmtt\n",
    },
    {
        image_path: "/images/rimah_image.jpg",
        name: "Rimah Boursas",
        team: Team.MEDIA,
        position: Position.MEMBER,
        description: "I'm all about design and social media fun. As a club member, I handle our videos and brochures, crafting captivating content to keep our audience engaged QUERY OK.",
        system: faUbuntu,
        github: "",
        linkedin: "linkedin.com/in/hafiza-rimah-boursas-4514aa2b9",
        instagram: "https://www.instagram.com/rimah_boursas?igsh=OHJmeHRvaDlwZTA=",
    },
    {
        image_path: "/images/nada_image.jpg",
        name: "Nada Boulkroune",
        team: Team.DESIGN,
        position: Position.MEMBER,
        description: "I am a creative individual with a passion for design, showcasing a keen eye for aesthetics and a desire to bring ideas to life visually. My love for designing spans various forms, and I likely stay updated on current trends to continually enhance my skills and produce innovative work.",
        system: faWindows,
        github: "https://github.com/nadablk",
        linkedin: "https://www.facebook.com/nadablk005/",
        instagram: "https://www.instagram.com/nadab.lk/",
    },
    {
        image_path: "/images/readouane_image.jpg",
        name: "Redouane Lebad",
        team: Team.HUMAN_RECOURSES_AND_LOGISTICS,
        position: Position.MEMBER,
        description: "Passionate and still-in-progress.\n",
        system: faWindows,
        github: "https://github.com/redouane731\n",
        linkedin: "https://www.linkedin.com/in/brahim-redouane-lebad-0ba6562b4/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3Bf1ad8ce0-209e-4a8d-87dd-5a3ca2236407",
        instagram: "https://instagram.com/redyeboi\n",
    },
    {
        image_path: "/images/rahma_image.jpg",
        name: "Rahma Boumaza",
        team: Team.MEDIA,
        position: Position.MEMBER,
        description: "As a marketing team member i bring a unique blend of creativity and analytical thinking, i thrive on brainstorming innovative strategies to promote our club's activities and engage our target audience. ",
        system: faWindows,
        github: "",
        linkedin: "",
        instagram: "",
    },
    {
        image_path: "/images/chihab_image.jpg",
        name: "Chihab Derghal",
        team: Team.PROJECT,
        position: Position.LEADER,
        description: "Are you familiar with Linux, i3, and prefer working on the backend? Do you use Nvim? If so, you are trully a legend mate. #RTFM",
        system: faDebian,
        github: "https://github.com/chihabderghal",
        linkedin: "https://www.linkedin.com/in/chihab-eddine-derghal-223145249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/chihab._dgl?igsh=azM1ZHJpMWUybGky",
    },
]