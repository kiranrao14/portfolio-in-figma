
import React from 'react';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeSSlashLine, RiMailLine } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-start py-8">
      {/* Navigation Section */}
      <ul className="fixed right-5 top-1/2 transform -translate-y-1/2 space-y-5 z-10 space-x-2">
        {[{ href: "/", icon: <RiHome2Line /> }, { href: "/About", icon: <RiUserLine /> }, { href: "/Projects", icon: <RiBriefcaseLine /> }, { href: "/Skill", icon: <RiCodeSSlashLine /> }, { href: "/Contact", icon: <RiMailLine /> }].map(
          ({ href, icon }, index) => (
            <Link key={index} href={href}>
              <li className="cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300">
                {React.cloneElement(icon, {
                  className: "text-3xl text-yellow-500 hover:text-white transition-colors",
                })}
              </li>
            </Link>
          )
        )}
      </ul>

      {/* Projects Section */}
      <div className="w-full max-w-7xl mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="mt-4 text-lg font-bold text-gray-700">Here are some of the projects I&apos;ve worked on:</p>
      </div>

      {/* Projects Grid */}
      <div className="mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 sm:px-0">
        {/* Row 1 - Project 1 and Project 2 */}
        <div className="bg-yellow-600 rounded-lg shadow-lg p-4 flex flex-col items-center h-[400px] mx-auto">
          <video
            src="/images/React App - Google Chrome 2024-11-13 00-11-19.mp4"
            controls
            className="w-full h-[200px] rounded-lg object-cover"
          />
          <div className="text-center p-4">
            <p className="text-xl font-semibold text-gray-800">Check out the live version of this project:</p>
            <Link
              href="https://ui-ux-restaurant-website.vercel.app/"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-800"
            >
              Click on here
            </Link>
          </div>
        </div>

        <div className="bg-yellow-600 rounded-lg shadow-lg p-4 flex flex-col items-center h-[400px] mx-auto">
          <video
            src="/images/Create Next App - Google Chrome 2024-10-29 21-06-44.mp4"
            controls
            className="w-full h-[200px] rounded-lg object-cover"
          />
          <div className="text-center p-4">
            <p className="text-xl font-semibold text-gray-800">Check out the live version of this project:</p>
            <Link
              href="https://sushi-food-website.vercel.app/"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-800"
            >
              Click on here
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-yellow-600 rounded-lg shadow-lg p-4 flex flex-col items-center h-[400px] mx-auto">
          <video
            src="/images/Create Next App - Google Chrome 2024-10-17 13-54-28.mp4"
            controls
            className="w-full h-[200px] rounded-lg object-cover"
          />
          <div className="text-center p-4">
            <p className="text-xl font-semibold text-gray-800">Check out the live version of this project:</p>
            <Link
              href="https://countdown-timer-nu-five.vercel.app/"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-800"
            >
              Click on here
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-yellow-600 rounded-lg shadow-lg p-4 flex flex-col items-center h-[400px] mx-auto sm:mx-4">
          <Image
            src="/images/Screenshot_2024-11-08-18-03-29-45_254de13a4bc8758c9908fff1f73e3725.jpg"
            height={200}
            width={300}
            alt="img-words-counter"
            className="rounded-lg object-cover w-full h-[200px]"
          />
          <div className="text-center p-4">
            <p className="text-xl font-semibold text-gray-800">Check on Github</p>
            <Link
              href="https://github.com/kiranrao14/todo_list/blob/main/app.ts"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-800"
            >
              Click on here
            </Link>
          </div>
        </div>

        {/* Project 5 */}
        <div className="bg-yellow-600 rounded-lg shadow-lg p-4 flex flex-col items-center h-[400px] mx-auto sm:mx-4">
          <Image
            src="/images/Screenshot_2024-11-08-18-03-20-82_254de13a4bc8758c9908fff1f73e3725.jpg"
            height={200}
            width={300}
            alt="img-words-counter"
            className="rounded-lg object-cover w-full h-[200px]"
          />
          <div className="text-center p-4">
            <p className="text-xl font-semibold text-gray-800">Check on GitHub</p>
            <Link
              href="https://github.com/kiranrao14/word-counter/blob/main/index.ts"
              target="_blank"
              className="text-yellow-100 hover:text-yellow-800"
            >
              Click on here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;








