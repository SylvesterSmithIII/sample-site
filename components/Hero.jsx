import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative min-h-screen">
      
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover hidden md:block"
      />

      <Image
        src="/hero-mobile.jpg"
        alt="Hero background mobile"
        fill
        priority
        className="object-cover md:hidden"
      />



      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-between min-h-screen md:p-24 text-white">

        <div className="max-w-3xl">
          
          <h1 className="text-6xl md:text-8xl md:font-bold text-center md:text-left mb-8 md:mb-0 gap-4 md:gap-0 font-italiana text-[#6e0f2d] tracking-widest">
            BUTTER & <br />
            CRUMB
          </h1>

        </div>

        <div className="md:w-[450px] md:h-[300px] md:border-2 border-[#6e0f2d] text-[#6e0f2d] text-4xl md:rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center">
            <p>
                Where Quality Meets <br />
                Quantity
            </p>
        </div>


      </div>

    </main>
  );
}