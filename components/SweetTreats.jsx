import Image from "next/image"
import ScrollingText from "./Scroll"

export default function SweetTreats() {
  return (
    <section className="text-white min-h-screen flex flex-col">

      {/* Title */}
      <ScrollingText text={"SWEET TREATS • SWEET TREATS"} classNames="text-[#6e0f2d]" />

      {/* Images container */}
      <div className="flex flex-col md:flex-row  flex-1">
        {/* Treat 1 */}
        <div className="relative flex-1">
          <Image
            src="/pies.jpg"
            alt="Treat 1"
            fill
            className="object-cover"
          />

          <div className="h-full flex flex-row justify-center items-center">

            <div className="relative inset-0 w-[450px] h-[300px] border-2 text-white text-4xl rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center m-12 md:m-0">
                <p>
                    PIES
                </p>
            </div>

          </div>

          
        </div>

        {/* Treat 2 */}
        <div className="relative flex-1">
          <Image
            src="/breads.jpg"
            alt="Treat 2"
            fill
            className="object-cover"
          />

          <div className="h-full flex flex-row justify-center items-center">

            <div className="relative inset-0 w-[450px] h-[300px] border-2 text-white text-4xl rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center m-12 md:m-0">
                <p>
                    BREADS
                </p>
            </div>

          </div>

        </div>

        {/* Treat 3 */}
        <div className="relative flex-1">
          <Image
            src="/cakes.jpg"
            alt="Treat 3"
            fill
            className="object-cover"
          />

          <div className="h-full flex flex-row justify-center items-center">

            <div className="relative inset-0 w-[450px] h-[300px] border-2 text-white text-4xl rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center m-12 md:m-0">
                <p>
                    CAKES
                </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}