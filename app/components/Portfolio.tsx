const ArrowIcon = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

export default function Portfolio() {
  const projects = [
      { id: 1, category: "Fintech", title: "Global Finance App", size: "large" },
      { id: 2, category: "E-commerce", title: "Luxury Store", size: "small" },
      { id: 3, category: "AI Platform", title: "Data Visualization", size: "small" },
      { id: 4, category: "Branding", title: "Modern Identity", size: "large" },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full">
       <div className="mb-24 flex items-end justify-between">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-medium tracking-tighter leading-none">
              Selected
              <br />
              <span className="text-gray-400 ml-12">Works</span>
          </h2>
          <span className="hidden md:block text-xs font-mono uppercase text-gray-500 tracking-wider mb-2">
              (2023 — 2025)
          </span>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project) => (
              <div 
                key={project.id} 
                className={`group relative rounded-none overflow-hidden ${
                    project.size === 'large' ? 'md:col-span-7 aspect-[16/10]' : 'md:col-span-5 aspect-[4/5]'
                }`}
              >
                 <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for actual project image */}
                    <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100">
                        <div className="flex justify-end">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <ArrowIcon className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <span className="text-xs text-white/80 uppercase tracking-widest mb-2 block">{project.category}</span>
                            <h3 className="text-3xl text-white font-medium">{project.title}</h3>
                        </div>
                    </div>
                 </div>
              </div>
          ))}
       </div>
    </section>
  );
}