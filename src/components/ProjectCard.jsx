export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-[#181818] p-6 rounded-2xl 
                    transition duration-300 
                    hover:-translate-y-2 
                    hover:shadow-lg 
                    hover:shadow-blue-500/10">
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}