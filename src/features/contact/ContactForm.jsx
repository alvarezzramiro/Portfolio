import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/shared/utils/email";
import { fadeLeft } from "@/shared/utils/animations";
import { validateField, validateForm } from "@/shared/utils/validation";

const baseInput = `
  w-full px-4 py-3
  bg-[#2a2a2a]
  border rounded-xl
  text-gray-300 placeholder-gray-500

  focus:outline-none
  focus:ring-2

  transition-all duration-300
`;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const err = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: err,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

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

      setTimeout(() => {
        setStatus("idle");
        setSuccess(false);
      }, 2500);

    } catch (err) {
      console.error("EMAIL ERROR:", err);
      setStatus("error");
    }
  };

  const inputStyle = (field) => `
    ${baseInput}
    ${errors[field] ? "border-red-400 focus:ring-red-400/30" : "border-white/10 focus:border-[#D8B89D] focus:ring-[#D8B89D]/20"}
    hover:border-[#D8B89D]/40
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="flex flex-col gap-5 p-6 rounded-2xl bg-[#292929]/70 border border-white/10"
    >
      {/* Name */}
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className={inputStyle("name")}
          placeholder="Your name"
          disabled={status === "loading"}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputStyle("email")}
          placeholder="Your email"
          disabled={status === "loading"}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        className={inputStyle("subject")}
        placeholder="Subject"
        disabled={status === "loading"}
      />

      {/* Message */}
      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className={inputStyle("message")}
          placeholder="Your message"
          disabled={status === "loading"}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Button */}
      <button
        disabled={status === "loading"}
        className="
          mt-2 py-3 rounded-xl
          bg-[#D8B89D] text-black font-medium

          hover:shadow-[0_0_25px_rgba(216,184,157,0.5)]
          hover:scale-[1.03]
          active:scale-[0.98]

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

      {/* Feedback */}
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