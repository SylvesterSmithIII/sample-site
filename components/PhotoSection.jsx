import Image from "next/image"

export default function PhotoSection() {
    return(
        <section className="relative h-[40vh] w-full">
              
              {/* Background Image */}
              <Image
                src="/section1.jpg"
                alt="Section background"
                fill
                priority
                className="object-cover"
              />

        </section>
    )
}