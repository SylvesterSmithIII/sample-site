export default function ScrollingText({ text, classNames = "" }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap w-full py-8 ${classNames}`}>
      <div className="flex animate-scroll-x">
        {/* Repeat content twice for seamless loop */}
        <p className="text-7xl mx-4">
          {text} • {text} • {text} •
        </p>
        <p className="text-7xl mx-4">
          {text} • {text} • {text} •
        </p>
      </div>
    </div>
  )
}