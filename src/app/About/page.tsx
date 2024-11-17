

    

import React from 'react';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeSSlashLine, RiMailLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
        <ul className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-5 z-10 space-x-2">
          <Link href="/">
            <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
              <RiHome2Line className="text-3xl text-yellow-500 hover:text-white transition-colors" />
            </li>
          </Link>
          <Link href="/About">
            <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
              <RiUserLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
            </li>
          </Link>
          <Link href="/Projects">
             <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">               <RiBriefcaseLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
             </li>
           </Link>
           <Link href="/Skill">
             <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
               <RiCodeSSlashLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />             </li>
           </Link>          <Link href="/Contact">
             <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
               <RiMailLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
             </li>
           </Link>
         </ul>

         <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">About Me</h2>
         <p className="text-base sm:text-lg text-gray-700 text-center max-w-2xl mx-auto font-bold">
           I am a passionate frontend developer with expertise in building beautiful and responsive websites.
           My focus is on creating a seamless user experience through intuitive designs and efficient code.
         </p>

         {/* Image with hover effect and better responsiveness */}
        <div className="flex justify-center mt-8">
           <Image
            src="/images/e6ca09ef9b3dc096d1bee488e040e55a.jpg"
             height={400}           width={400}
             alt="about-img"
             className="rounded-3xl transition-all duration-300 transform hover:scale-110 sm:w-72 sm:h-72 w-60 h-60 hover:shadow-xl"
           />
         </div>
         {/* /* Call to action */} 
 <div className="text-center mt-16">
 <Link href="/Contact"
   className="bg-yellow-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition-colors">
     Get In Touch
   
 </Link>
</div>

              </div>
     </>
   );
 };

 export default About;

    



    



 {/* Call to action */}
 <div className="text-center mt-8">
 <Link href="/Contact"
   className="bg-yellow-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-500 transition-colors">
     Get In Touch
   
 </Link>
</div>
