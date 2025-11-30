import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col gap-8">
            <span className="inline-block px-4 py-1 rounded-full border border-gray-200 text-sm font-medium w-fit">
                About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                Design has always been more than just a job – it's my passion.
            </h2>
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 mt-4">
                {/* Placeholder for video/image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="w-16 h-16 rounded-full bg-black/80 flex items-center justify-center text-white">
                        ▶
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Stats & Description */}
        <div className="lg:col-span-7 flex flex-col justify-between pt-16">
            <p className="text-gray-500 max-w-md ml-auto text-lg mb-12">
                Design is not just a job for me, it's a passion that drives me.
            </p>

            <div className="flex flex-col gap-12 ml-auto max-w-md w-full">
                <div>
                    <div className="text-6xl font-medium mb-2">+320</div>
                    <p className="text-gray-500 text-sm">
                        Our step-by-step to simplify your Excellent Project Powerful
                    </p>
                </div>
                <div>
                    <div className="text-6xl font-medium mb-2">+280</div>
                    <p className="text-gray-500 text-sm">
                         Our step-by-step to simplify your Excellent Project Our step-by-step to simplify
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
