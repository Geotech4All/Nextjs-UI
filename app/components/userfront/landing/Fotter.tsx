import React from "react";
import { socials, SocialFooter } from "@app/components";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white w-screen p-7 flex items-center">
      <div>
        <h3 className="font-semibold">Socials (follow us on)</h3>
        <ul>
          {socials.map((social) => (
            <SocialFooter key={social.link} {...social} />
          ))}
        </ul>
      </div>
      <div>
        <h3>Licences</h3>
        <Link
          target="_blank"
          href="https://www.freepik.com/free-vector/blogging-illustration-concept_6192594.htm#query=blog&position=8&from_view=search&track=sph"
        >
          Image by storyset on Freepik
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
