import React from "react";
import Link from "next/link";

interface SocialProps {
    href: string;
    icon: React.ReactNode;
}

const Socials: React.FC<SocialProps> =({href, icon}) => {
    return(
        <Link href={href} target="_blank" rel="noopener noreferrer">{icon}</Link>
    )
}

export default Socials;