export default function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-400 group transition-all"
    >
      <img
        src={icon}
        className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition"
      />
      <span className="group-hover:text-[#D8B89D] transition">
        {label}
      </span>
    </a>
  );
}