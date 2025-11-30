export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight max-w-xl leading-[1.1]">
            Let's Connect There
          </h2>
          <button className="mt-8 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-[#222] hover:bg-[#333] transition-colors border border-white/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Hire Me Now!</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black font-bold text-xs">
                +
              </div>
              <span className="font-bold text-xl">Duwy</span>
            </div>
            <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
              Dewa Product Image and Video Generator is a cutting-edge commerce product that uses artificial
              intelligence (AI).
            </p>
            <div className="flex gap-4 mt-6 text-gray-400">
              {/* Social Icons placeholders */}
              <span>IG</span>
              <span>TW</span>
              <span>YT</span>
              <span>PI</span>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Address</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Technology Park 7-12 Gumpung
              <br />
              Recidence 57292 Surakarta Indonesia
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Email Address</h4>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <div>hallo@dewadewi.com</div>
              <div>taskeye@gmail.com</div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Phone Number</h4>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <div>(0271) 151 4564 222</div>
              <div>082124723342342</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 mt-12 pt-8 text-xs text-gray-600">
          <div>All rights reserved @Duwy</div>
          <div className="flex gap-6">
            <a href="#">Templates</a>
            <a href="#">Tools</a>
            <a href="#">Features</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
