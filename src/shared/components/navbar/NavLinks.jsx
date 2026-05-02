export default function NavLinks({ links, active, onClick, vertical = false }) {
  return (
    <ul
      className={`flex ${
        vertical ? "flex-col gap-4" : "items-center gap-6"
      } text-gray-300`}
    >
      {links.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => onClick(link.id)}
            className={`
              transition-all duration-300
              ${
                active === link.id
                  ? "text-[#D8B89D]"
                  : "hover:text-[#D8B89D]"
              }
            `}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}