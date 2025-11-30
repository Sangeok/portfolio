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

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
         <div>
            <span className="text-xs font-mono uppercase text-gray-500 tracking-wider mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">
                 Design &
                 <br />
                 Strategy
            </h2>
         </div>
         <p className="text-gray-500 max-w-xs text-base leading-relaxed mb-2">
             We build comprehensive digital solutions that scale with your business needs.
         </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
        
        {/* Large Card 1 */}
        <div className="md:col-span-2 bg-[#f4f4f5] rounded-3xl p-8 relative group overflow-hidden hover:bg-[#efeff0] transition-colors duration-500">
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ArrowIcon className="w-4 h-4" />
                </div>
                <div>
                    <h3 className="text-3xl font-medium mb-3">Product Design</h3>
                    <p className="text-gray-500 max-w-md">End-to-end product design from research to prototyping and visual polish.</p>
                </div>
            </div>
             {/* Abstract Decoration */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-gray-200/50 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700 ease-out"></div>
        </div>

        {/* Tall Card */}
        <div className="md:row-span-2 bg-[#111] text-white rounded-3xl p-8 relative group overflow-hidden">
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                    <ArrowIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                    <h3 className="text-3xl font-medium mb-3">Brand Strategy</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Developing unified brand identities that resonate with your audience and stand the test of time across all digital touchpoints.
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        {/* Medium Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 relative group hover:border-gray-300 transition-colors duration-500">
             <div className="h-full flex flex-col justify-between">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                    <ArrowIcon className="w-4 h-4" />
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-2">Development</h3>
                    <p className="text-gray-500 text-sm">Next.js & React Implementation</p>
                </div>
            </div>
        </div>

        {/* Medium Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 relative group hover:border-gray-300 transition-colors duration-500">
             <div className="h-full flex flex-col justify-between">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                    <ArrowIcon className="w-4 h-4" />
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-2">Marketing</h3>
                    <p className="text-gray-500 text-sm">SEO & Content Strategy</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}