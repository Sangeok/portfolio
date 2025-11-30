export default function Experience() {
    const experiences = [
      {
        company: "Apple Inc.",
        role: "Senior Product Designer",
        year: "2023 — Present",
        location: "Cupertino, CA"
      },
      {
        company: "Stripe",
        role: "UI/UX Designer",
        year: "2021 — 2023",
        location: "Remote"
      },
      {
        company: "Airbnb",
        role: "Visual Designer",
        year: "2019 — 2021",
        location: "San Francisco"
      },
      {
        company: "Freelance",
        role: "Creative Director",
        year: "2017 — 2019",
        location: "Global"
      }
    ];
  
    return (
      <section className="py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <h2 className="text-4xl font-medium tracking-tight mb-6">Experience</h2>
                <p className="text-gray-500 max-w-xs leading-relaxed">
                    A timeline of my professional career collaborating with world-class brands and startups.
                </p>
            </div>

            <div className="lg:col-span-8">
                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:border-black transition-colors duration-300">
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-medium text-gray-400 group-hover:text-black transition-colors duration-300">
                                    {exp.company}
                                </h3>
                            </div>
                            <div className="md:w-1/3">
                                <span className="text-lg text-gray-800 block mb-1 md:mb-0">{exp.role}</span>
                            </div>
                            <div className="md:w-1/3 flex md:justify-end gap-8">
                                <span className="text-sm text-gray-500 font-mono">{exp.location}</span>
                                <span className="text-sm text-gray-500 font-mono">{exp.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    );
  }