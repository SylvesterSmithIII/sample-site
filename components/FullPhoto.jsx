import Image from "next/image"

export default function FullPhoto({ src, alt }) {
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}