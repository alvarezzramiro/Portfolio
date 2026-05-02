import { motion } from "framer-motion";
import { fadeRight } from "@/shared/utils/animations";
import SocialLink from "./SocialLink";


export default function ContactInfo() {
  return (
    <motion.div
      variants={fadeRight}
      transition={{ duration: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="self-center lg:self-center flex flex-col gap-6 p-6 rounded-2xl bg-[#292929]/70 border border-white/10"
    >
      <h3 className="text-2xl text-gray-200 font-medium">
        Contact Info
      </h3>

      <div className="flex flex-col gap-4 text-gray-400">
        <div>
          <span className="text-gray-500 text-sm">Phone</span>
          <p className="text-gray-300">+54 9 2284 215184</p>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Email</span>
          <p className="text-gray-300">rama.alvarez02@gmail.com</p>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Location</span>
          <p className="text-gray-300">Tandil, Buenos Aires, Argentina</p>
        </div>
      </div>

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