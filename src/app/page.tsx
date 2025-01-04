import React from "react";
import Link from "next/link";

import Image from "next/image";

export default function Home() {
  const posts = [
    {
        id: '1' ,
        title: "Exploring Desert Dreams",
        description: "A thrilling journey through rugged desert landscapes with a Jeep, where the sand meets the sun.",
        image: "/jeep1.png",
        content: "The desert has a unique charm a vast expanse of golden sands, rocky trails, and towering cliffs. The Jeep is a trusted companion, conquering challenging terrains across the desertThe vast emptiness of the desert offers a sense of serenity, with the whispering wind and warm glow of the setting sun providing an unmatched connection to nature. Desert trails may be tough, but the memories they create are worth every bump in the road.",
    },
    {
        id: '2',
        title: "Off-Roading in the Wilderness",
        description: "Discover the raw beauty of nature by taking a Jeep into untouched wilderness.",
        image: "/jeep2.png",
        content: "Off-roading in the wilderness is an experience like no other. Towering trees, fresh mountain air, and the thrill of navigating uncharted paths make every ride an adventure. The Jeep is more than just a vehicle—its a bridge between the adventurer and the natural world.The journey through the wilderness teaches an appreciation for the little things: the crunch of leaves under the tires, the distant call of birds, and the freedom that only nature can provide. Grab a Jeep and explore to truly reconnect with the outdoors!",
    },
    {
        id: '3',
        title: "A Journey Through Lava Fields",
        description: "An unforgettable adventure driving through rugged volcanic landscapes with a Jeep.",
        image: "/jeep3.png",
        content: "Driving through lava fields is a surreal experience. The stark contrast of black, rugged terrain against the clear blue sky creates a dramatic landscape. The Jeep braves this unique environment, proving no road is too tough for a true adventurer.The lava fields, though harsh, are full of beauty and stories. This journey is a testament to resilience, adventure, and the spirit of pushing boundaries to embrace the unexpected.",
    },
    {
        id: '4',
        title: "The Forest Calls: A Jeep Adventure",
        description: "Answering the call of the forest and exploring its hidden trails with a Jeep.",
        image: "/jeep4.png",
        content: "The forest is a magical place, full of secrets and surprises. Driving through its winding trails with a Jeep is an adventure like no other. The golden sunlight filtering through the trees, the crunch of gravel under the tires, and the fresh scent of pine create an immersive experience.Each trail is a new story waiting to be discovered. The Jeep handles the twists and turns with ease, making the journey both exciting and safe. Whether an off-roading enthusiast or a nature lover, the forest has something special to offer.",
    },
    {
        id: '5',
        title: "Sunrise on the Summit",
        description: "Watching the sunrise from a Jeep rooftop, creating memories that will last a lifetime.",
        image: "/jeep5.png",
        content: "There is no better way to greet the day than from the top of a mountain, with the sun rising in the distance. From the Jeep's rooftop, the sky transforms into a breathtaking canvas of colors.The climb to the summit might be tough, but the view from the top makes it all worthwhile. Moments like these are the essence of off-road adventures, fueling the passion to continue chasing the horizon.",
    }
];

  return (
     
       <div>
        
        
             {/* hero section */}
             <div className="relative bg-cover bg-center h-screen items-center justify-center" 
             style={{backgroundImage:"url('/herojeep.png')",
              backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                  <div className="text-center px-5  sm:px-8 md:px-16 lg:px-32 text-white font-mono">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Adventure Awaits: Embrace the Jeep Girl Spirit</h1>
                    <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-medium mb-8">Driven by passion, guided by the road, and fueled by freedom.</p>
                  </div>
             </div>

        
          <div className="text-center mb-12 p-4 pt-12 m-4">
            
            <h2 className="text-3xl font-bold md:text-4xl font-mono text-green-950">A Journey Through Nature&apos;s Wonders</h2>
          </div>
          <div className="container max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 ">
            
        {posts.map((post:any)=>(
         <div key={post.id} className="mb-8 p-4  bg-white  shadow-cyan-600 shadow-md rounded-lg transition duration-300">
          <Link className="block group" href={`/blog/${post.id}`}>
          <div className="relative w-full mb-4 rounded-md">
             {/* display image */}
             <Image 
              src={post.image} alt={post.title} width={1000} height={600}
              className="w-full h-auto object-cover transform group-hover:scale-90 transition duration-300"/>
            </div>
             <h2 className="text-xl  font-semibold md:text-2xl hover:text-cyan-700">{post.title}</h2>
             <p className="mt-2 text-sm md:text-base text-gray-500">{post.description}</p>
             
         </Link>
         </div>
         
        ))}
        </div>
        
       </div>
  );
}
