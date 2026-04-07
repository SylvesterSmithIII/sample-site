import Image from "next/image"

export default function About() {
    return (
        <footer className="min-h-screen flex bg-[#6e0f2d] text-white">
        
                    {/* left box */}
        
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                        <h2 className="text-7xl">We'd love to see <br />
                            you!
                        </h2>
        
                        <h4 className="text-4xl mt-12 mb-2">Butter & Crumb</h4>
                        <p className="text-2xl mb-8">123 Main Street, Anytown, USA</p>
        
                        <h4 className="text-4xl mb-2">Email Address</h4>
                        <p className="text-2xl mb-8">hello@BUTTER&CRUMB.com</p>
        
                        <h4 className="text-4xl mb-2">Phone Number</h4>
                        <p className="text-2xl mb-8">(123) 456 7890</p>
                    </div>

        
                </footer>
    )
}