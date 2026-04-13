export default function Story() {
  return (
    <div className="md:h-[60vh] w-full flex flex-col md:flex-row text-white bg-[#6e0f2d] p-8 md:p-0">
      
      {/* Left side: heading */}
      <div className="flex items-center justify-center md:w-2/5">
        <h3 className="text-5xl md:text-7xl font-bold font-italiana tracking-widest">
          OUR STORY
        </h3>
      </div>

      {/* Right side: paragraph */}
      <div className="md:w-3/5 flex items-center mt-4 md:mt-0">
        <p className="text-xl md:text-2xl text-center md:text-left leading-snug">
          What started as a small passion for baking in a home kitchen quickly grew
          into something much more. After years of sharing recipes with friends and
          family, we decided to turn that love into a place where the community could
          come together over fresh, homemade treats. Every item we make is baked daily
          using simple, high-quality ingredients, with the goal of creating something
          that feels both comforting and special. Whether you&apos;re stopping by for your
          morning coffee or picking up something sweet for the weekend, we&apos;re here to
          make every visit feel warm, welcoming, and a little bit memorable.
        </p>
      </div>

    </div>
  )
}