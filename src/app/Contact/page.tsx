'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { RiHome2Line, RiUserLine, RiBriefcaseLine, RiCodeSSlashLine, RiMailLine } from 'react-icons/ri';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const Contact = () => {
  // Type for form data state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Type for handleChange event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Type for handleSubmit event
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API or email)
  };

  return (
    <div className="min-h-screen bg-yellow-700 flex items-center justify-center p-4">
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

      <div className="bg-yellow-700 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-white text-lg">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border-2 border-yellow-500 bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-white text-lg">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border-2 border-yellow-500 bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-lg">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border-2 border-yellow-500 bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
