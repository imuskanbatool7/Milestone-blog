import Image from "next/image"

export default function About(){
    return(
        <section className="bg-gray-100 ">
            
            <div className="container  mx-auto px-4 md:px-8 p-4">
            <div className="bg-purple-50 shadow-lg rounded-lg p-8 md:p-10 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center font-serif text-cyan-950 ">About</h1>
            <h2 className="text-2xl text-center font-semibold font-mono">Welcome to The Jeep Girl Chronicles Blog</h2>
            <p className="text-center font-lg italic mb-6 font-serif pb-4">    My name is Muskan Batool, I am incredibly excited to share this blog with you!</p>
            <Image  className="flex justify-center mb-6 items-center mx-auto rounded-lg"
              src="/about.png" alt="pic" width={500} height={500}/>
                <p className="text-gray-800 font-medium leading-relaxed text-center font-sans">
                I have a deep dream for Jeeps. To me, a Jeep is a symbol of freedom, adventure, and exploration. 
                        These vehicles take on roads less traveled and bring new experiences with every journey, 
                        whether it&apos;s a mountain pass, the winding paths of an old forest, or a vast desert trail. 
                        This blog is an expression of my dream for Jeeps and the thrill of adventure. Here, I share my thoughts, 
                        stories, and inspiration related to Jeep culture and how it embodies our freedom and excitement.
                        I hope you&apos;ll join me on this journey, whether you are a Jeep enthusiast or simply someone who loves 
                        the feeling of adventure. Through this blog, I aim to inspire those who want to embrace the open road 
                        or make the Jeep experience a part of their life. 🚙
                </p>
            </div>
           
            </div>
            
        </section>

    )
}