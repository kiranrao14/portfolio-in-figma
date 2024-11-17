
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiMailLine,
  RiCodeSSlashLine, RiFacebookFill,
  RiLinkedinBoxFill,
  RiTwitterFill, } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 min-h-screen flex">
      {/* Vertical Icons on the Right */}
      <ul className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-5 z-10 space-x-2" >
        <Link href="#/">
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
          <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
            <RiBriefcaseLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
          </li>
        </Link>
        <Link href="/Skill">
          <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
            <RiCodeSSlashLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
          </li>
        </Link>
        <Link href="/Contact">
          <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
            <RiMailLine className="text-3xl text-yellow-500 hover:text-white transition-colors" />
          </li>
        </Link>
      </ul>

    {/* Main Content Section */}
<section className="flex justify-center flex-grow px-4 md:px-8 mt-10 mb-8">
  <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-8 md:p-12 flex flex-col md:flex-row items-center">
    {/* Left Section: Profile Image */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0 md:pr-6">
      <div className="w-[300px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[470px] lg:h-[400px] relative -ml-8 transform transition-transform duration-500 hover:scale-105">
        <Image
          src="/images/image.jpg" // Ensure this image is in your `public` folder
          alt="Profile Picture"
        layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-xl"
        />
      </div>
      {/* Social Media Icons Below Image */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white rounded-lg bg-yellow-400 text-3xl hover:scale-110 transition-transform"
        >
          <RiFacebookFill />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-yellow-400 rounded-lg text-3xl hover:scale-110 transition-transform"
        >
          <RiLinkedinBoxFill />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-yellow-400 rounded-lg text-3xl hover:scale-110 transition-transform"
        >
          <RiTwitterFill />
        </a>
      </div>
    </div>

    {/* Right Section: Text Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-gray-800">
        Hello, I&apos;m a <br />
        <span className="text-yellow-500 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          Frontend Developer
        </span>
      </h1>
      
      
  <p className="text-lg font-bold md:text-xl text-gray-700">
  I specialize in building responsive, user-friendly websites with a strong focus on clean code and engaging UI/UX design.
</p>

  


      <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1">
        Get in Touch
      </button>
    </div>
  </div>
</section>













    </div> 
  
  );
};

export default Navbar;





