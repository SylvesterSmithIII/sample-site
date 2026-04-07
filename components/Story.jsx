export default function Story() {
  return (
    <div className="h-[60vh] w-full flex text-white bg-[#6e0f2d]">
      
      {/* Left side: heading */}
      <div className="flex items-center justify-center w-2/5">
        <h3 className="text-7xl font-bold font-italiana tracking-widest">
          OUR STORY
        </h3>
      </div>

      {/* Right side: paragraph */}
      <div className="w-3/5 flex items-center">
        <p className="text-2xl leading-snug">
          What started as a small passion for baking in a home kitchen quickly grew
          into something much more. After years of sharing recipes with friends and
          family, we decided to turn that love into a place where the community could
          come together over fresh, homemade treats. Every item we make is baked daily
          using simple, high-quality ingredients, with the goal of creating something
          that feels both comforting and special. Whether you're stopping by for your
          morning coffee or picking up something sweet for the weekend, we’re here to
          make every visit feel warm, welcoming, and a little bit memorable.
        </p>
      </div>

    </div>
  )
}