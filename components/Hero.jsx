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
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-24 py-24 text-white">

        <div className="max-w-3xl">
          
          <h1 className="text-8xl font-bold font-italiana text-[#6e0f2d] tracking-widest">
            BUTTER & <br />
            CRUMB
          </h1>

        </div>

        <div className="w-[450px] h-[300px] border-2 border-[#6e0f2d] text-[#6e0f2d] text-4xl rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center">
            <p>
                Where Quality Meets <br />
                Quantity
            </p>
        </div>


      </div>

    </main>
  );
}