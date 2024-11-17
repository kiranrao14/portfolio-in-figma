// pages/skills.js
import React from 'react';
import {
  RiHome2Line,
  RiUserLine,
  RiBriefcaseLine,
  RiCodeSSlashLine,
  RiMailLine,
} from 'react-icons/ri';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import Link from 'next/link';

const Skill = () => {
  return (
    <div className="min-h-screen bg-yellow-600 flex flex-col items-center justify-center p-5">
      {/* Navigation Icons */}
      <ul className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-5 space-x-7 z-10">
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

      {/* Skills Section */}
      <div className="text-center w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-16 mt-9">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Skill Items */}
          <div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiHtml5 className="text-7xl text-orange-600" />
            <p className="mt-2 text-xl font-semibold text-white">HTML</p>
          </div>
          <div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiCss3 className="text-7xl text-blue-500" />
            <p className="mt-2 text-xl font-semibold text-white">CSS</p>
          </div>
          <div className="flex flex-col items-center p-12 border-20 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiJavascript className="text-7xl text-yellow-400" />
            <p className="mt-2 text-xl font-semibold text-white">JavaScript</p>
          </div>
          <div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiTypescript className="text-7xl text-blue-600" />
            <p className="mt-2 text-xl font-semibold text-white">TypeScript</p>
          </div>
          <div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiReact className="text-7xl text-cyan-500" />
            <p className="mt-2 text-xl font-semibold text-white">React</p>
          </div>
          <div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 h-56">
            <SiNextdotjs className="text-7xl text-black" />
            <p className="mt-2 text-xl font-semibold text-white">Next.js</p>
          </div>
          
          

<div className="flex flex-col items-center p-12 border-12 border-yellow-600 bg-yellow-500 rounded-lg shadow-lg transition-transform transform hover:scale-110 lg:w-96 sm:w-72 w-full mx-auto">
  <SiTailwindcss className="text-7xl text-teal-400" />
  <p className="mt-2 text-xl font-semibold text-white">Tailwind CSS</p>
</div>




        </div>
      </div>
    </div>
  );
};

export default Skill;
