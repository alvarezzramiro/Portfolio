import { motion } from "framer-motion";
import { fadeRight } from "@/shared/utils/animations";
import { useState } from "react";
import SocialLink from "./SocialLink";
import copyIcon from "/icons/social/copy.svg";

export default function ContactInfo() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <motion.div
      variants={fadeRight}
      transition={{ duration: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="self-center flex flex-col gap-6 p-6 rounded-2xl bg-[#292929]/70 border border-white/10"
    >
      <h3 className="text-2xl text-gray-200 font-medium">
        Contact Info
      </h3>

      <div className="flex flex-col gap-4 text-gray-400">

        {/* PHONE */}
        <div>
          <span className="text-gray-500 text-sm">Phone</span>

          <div className="flex items-center gap-2">
            <p className="text-gray-300">+54 9 2284 215184</p>

            <button
              onClick={() => handleCopy("+54 9 2284 215184", "phone")}
              className="p-1 rounded-md hover:bg-white/10 transition"
            >
              <img src={copyIcon} alt="Copy" className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>

            {copied === "phone" && (
              <span className="text-xs text-[#D8B89D] ml-1">Copied!</span>
            )}
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <span className="text-gray-500 text-sm">Email</span>

          <div className="flex items-center gap-2">
            <p className="text-gray-300">rama.alvarez02@gmail.com</p>

            <button
              onClick={() => handleCopy("rama.alvarez02@gmail.com", "email")}
              className="p-1 rounded-md hover:bg-white/10 transition"
            >
              <img src={copyIcon} alt="Copy" className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>

            {copied === "email" && (
              <span className="text-xs text-[#D8B89D] ml-1">Copied!</span>
            )}
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <span className="text-gray-500 text-sm">Location</span>
          <p className="text-gray-300">Tandil, Buenos Aires, Argentina</p>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
        <span className="text-gray-500 text-sm">Social</span>

        <div className="flex gap-4 flex-wrap">
          <SocialLink
            href="https://linkedin.com/in/ramiro-alvarez-zulaica/"
            icon="icons/social/linkedinlogo.svg"
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/alvarezzramiro"
            icon="icons/hard-skills/githublogo.svg"
            label="GitHub"
          />
          <SocialLink
            href="https://instagram.com/ramaalvarez"
            icon="icons/social/instagramlogo.svg"
            label="Instagram"
          />
        </div>
      </div>
    </motion.div>
  );
}