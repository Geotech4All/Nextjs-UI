import React from "react";
import { socials, SocialFooter } from "@app/components";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white p-7 flex items-center">
      <div>
        <h3 className="font-semibold">Socials (follow us on)</h3>
        <ul>
          {socials.map((social) => (
            <SocialFooter key={social.link} {...social} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
