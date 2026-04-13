import Image from "next/image"

export default function Footer() {
    return (
        <footer className="md:min-h-screen flex bg-[#6e0f2d] text-white">

            {/* left box */}

            <div className="flex-1 flex flex-col justify-end items-center text-center p-8">

                <h3 className="text-3xl md:text-5xl pb-8 md:pb-20">EXPERIEENCE <br />
                    EXCELLENT DESSERTS <br />
                    AT 48 WASHINGTON</h3>

                <h5 className="text-xl mb-12 md:pb-36">23 Anywhere St., Any City, ST 12345
                    <br />
                    hello@BUTTER&CRUMB.com
                    <br />
                    123-456-7890
                </h5>


                <div className="w-[300px] h-[150px] mb-6 border-2 text-white text-4xl rounded-[70%_50%_60%_40%/60%_60%_40%_50%] flex justify-center items-center text-center">
                    <h5>Open 9AM to <br /> 9PM daily</h5>
                </div>
            </div>

            {/* right box */}

            <div className="flex-1 relative hidden md:block">
                <Image
                    src="/contact.jpg"
                    alt="Footer image"
                    fill
                    className="object-cover"
                />
            </div>

        </footer>
    )
}