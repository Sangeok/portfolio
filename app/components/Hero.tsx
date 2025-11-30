import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto w-full min-h-[85vh] flex justify-between">
      {/* Main Content */}
      <div className="relative mt-12">
        <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-medium leading-[0.85] tracking-tighter text-black animate-fade-in-up delay-100">
          FrontEnd
          <br />
          <span className="text-gray-400 ml-[2vw]">Developer</span>
          <br />
          Portofolio
        </h1>

        <div className="mt-8 flex justify-between gap-8 animate-fade-in-up delay-200">
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              과거의 내 모습보다 더 나은 모습을 갈구하는 <br />
              프론트엔드 개발자입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-18 w-80 h-80">
        <Image
          src="/profile.png"
          alt="profile"
          fill
          className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}
