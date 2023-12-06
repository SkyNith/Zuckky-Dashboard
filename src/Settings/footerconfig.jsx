import { AiFillFacebook, AiFillInstagram, AiFillLinktree } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const FooterSocials = [
    {
        link: "https://www.facebook.com/profile.php?id=100004998287221",
        icon: <AiFillFacebook />,
    },
    {
        link: "https://www.instagram.com/skyznithh",
        icon: <AiFillInstagram />,
    },
    {
        link: "https://linktr.ee/skyz_nithh",
        icon: <AiFillLinktree />,
    },
    {
        link: "https://discord.gg/NRCSSW8aMW",
        icon: <FaDiscord />,
    },
];

const FooterLinks = [
    {
        name: `AboutUS`,
        url: `/about`,
    },
    {
        name: `ContactUS`,
        url: `/contact`,
    },
];

export { FooterLinks, FooterSocials };