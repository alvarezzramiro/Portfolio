import Section from "../components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      await emailjs.send(
        "service_cfkftb6",
        "template_ldyycfp",
        form,
        "OTRlNOxBBUKbiSzg_"
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      console.error("EMAIL ERROR:", err);
      alert(JSON.stringify(err));
      setStatus("error");
    }
  };

  const inputClass = `
    w-full px-4 py-3
    bg-[#2a2a2a]
    border border-white/10
    rounded-xl
    text-gray-300
    placeholder-gray-500

    focus:outline-none
    focus:border-[#D8B89D]
    focus:ring-2
    focus:ring-[#D8B89D]/20

    hover:border-[#D8B89D]/40
    hover:shadow-[0_0_10px_rgba(216,184,157,0.15)]

    transition-all duration-300
  `;

  return (
    <Section id="contact">
      <div className="flex flex-col gap-12 w-full">

        {/* TÍTULO */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Get In <span className="text-[#D8B89D]">Touch</span>
          </h2>
          <p className="text-[#5C5F4F]">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* FORMULARIO */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              flex flex-col gap-5
              p-6
              rounded-2xl
              backdrop-blur-md
              bg-[#292929]/70
              border border-white/10
            "
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              className={inputClass}
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="
                mt-2 py-3 rounded-xl
                bg-[#D8B89D]
                text-black font-medium

                hover:shadow-[0_0_20px_rgba(216,184,157,0.4)]
                hover:scale-[1.02]

                disabled:opacity-50
                transition-all duration-300
              "
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Sent"
                : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">
                Something went wrong. Try again.
              </p>
            )}

            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-2">
                Message sent successfully!
              </p>
            )}
          </motion.form>

          {/* INFO CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              flex flex-col gap-6
              self-center
              h-fit

              p-6
              rounded-2xl
              backdrop-blur-md
              bg-[#292929]/70
              border border-white/10
            "
          >
            <h3 className="text-2xl text-gray-200 font-medium">
              Contact Info
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <div>
                <span className="text-gray-500 text-sm">Phone</span>
                <p className="text-gray-300">+54 9 2284 215184 </p>
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

            {/* REDES */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <span className="text-gray-500 text-sm">Social</span>

              <div className="flex gap-4 flex-wrap">

                {/* LINKEDIN */}
                <a
                  href="https://linkedin.com/in/ramiro-alvarez-zulaica/"
                  target="_blank"
                  className="
                    flex items-center gap-2
                    text-gray-400
                    group
                    transition-all duration-300
                  "
                >
                  <img
                    src="icons/social/linkedinlogo.svg"
                    className="
                      w-5 h-5 opacity-70
                      group-hover:opacity-100
                      group-hover:scale-110
                      transition
                    "
                  />
                  <span className="group-hover:text-[#D8B89D] transition">
                    LinkedIn
                  </span>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/alvarezzramiro"
                  target="_blank"
                  className="
                    flex items-center gap-2
                    text-gray-400
                    group
                    transition-all duration-300
                  "
                >
                  <img
                    src="icons/hard-skills/githublogo.svg"
                    className="
                      w-5 h-5 opacity-70
                      group-hover:opacity-100
                      group-hover:scale-110
                      transition
                    "
                  />
                  <span className="group-hover:text-[#D8B89D] transition">
                    GitHub
                  </span>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/ramaalvarez"
                  target="_blank"
                  className="
                    flex items-center gap-2
                    text-gray-400
                    group
                    transition-all duration-300
                  "
                >
                  <img
                    src="icons/social/instagramlogo.svg"
                    className="
                      w-5 h-5 opacity-70
                      group-hover:opacity-100
                      group-hover:scale-110
                      transition
                    "
                  />
                  <span className="group-hover:text-[#D8B89D] transition">
                    Instagram
                  </span>
                </a>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </Section>
  );
}