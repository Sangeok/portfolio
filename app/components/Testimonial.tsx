import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto w-full text-center">
       <div className="mb-12 flex justify-center">
          <div className="text-8xl font-serif text-gray-100 leading-none">“</div>
       </div>
       
       <blockquote className="text-2xl md:text-3xl font-medium leading-snug text-gray-900 mb-12">
         “Without Journey Commerce, we would never had been able to implement this system ourselves. Being a small team we don't have enough hours in the day.
         <br /><br />
         The team at Journey Commerce researched our brand, planned the content and provided weekly feedback to improve the performance. The results have been amazing and we couldn't ask for a better partner.”
       </blockquote>

       <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
             {/* Avatar placeholder */}
          </div>
          <div className="text-left">
             <div className="font-bold text-sm">Dhimmo Reijnder</div>
             <div className="text-xs text-gray-500">Founder, The Dewa</div>
          </div>
       </div>
    </section>
  );
}
