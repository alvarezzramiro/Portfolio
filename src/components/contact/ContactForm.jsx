import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../utils/email";
import { fadeLeft } from "../../utils/animations.js";

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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")
    
    const isValidEmail = /\S+@\S+\.\S+/.test(form.email);

    if (!isValidEmail) {
        setError("Invalid email");
        return;
    }
    
    setStatus("loading");

    try {
      await sendEmail(form);

      setStatus("success");
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() =>  {
        setStatus("idle");  
      }, 2000);

    } catch (err) {
        console.error("EMAIL ERROR: ", err)
        setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-5 p-6 rounded-2xl bg-[#292929]/70 border border-white/10"
    >
      <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" required disabled={status === "loading"}/>
      <input name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="Your email" required disabled={status === "loading"}/>
      <input name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="Subject" disabled={status === "loading"}/>
      <textarea name="message" value={form.message} onChange={handleChange} className={inputClass} rows="5" placeholder="Your message" required disabled={status === "loading"}/>

      <button disabled={status === "loading"} 
        className="
          mt-2 py-3 rounded-xl
            bg-[#D8B89D]
            text-black font-medium

            hover:shadow-[0_0_20px_rgba(216,184,157,0.4)]
            hover:scale-[1.02]

            disabled:opacity-50

            transition-all duration-300
        ">
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Error sending message
        </p>
      )}

      {success && (
        <p className="text-green-400 text-sm text-center">
          Message sent!
        </p>
      )}
    </motion.form>
  );
}