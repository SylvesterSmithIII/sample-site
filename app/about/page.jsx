import Image from "next/image"

export default function About() {
    return (
        <footer className="min-h-screen flex bg-[#6e0f2d] text-white">
        

                    <div>
                        <Image
                            src="/about.jpg"
                            alt="About image"
                            width={800}
                            height={600}
                            className="object-cover h-full"
                            priority
                        />
                    </div>

                    {/* left box */}
        
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
                        <h2 className="text-7xl mb-12">About Us
                        </h2>
        
                        <p className="text-2xl mb-8">At Butter & Crumb, everything started with a simple love for baking and bringing people together. What began in a small kitchen—testing recipes and sharing treats with friends and family—quickly grew into a passion for creating a space where the whole community could enjoy fresh, homemade baked goods.</p>
                        <p className="text-2xl mb-8">We believe a bakery should be more than just a place to grab something quick—it should feel warm, welcoming, and familiar. Whether  you&apos;re stopping by for your morning coffee or picking up something special to share, we&apos;re here to make your day just a little sweeter.</p>
        
                    </div>

                    

        
                </footer>
    )
}