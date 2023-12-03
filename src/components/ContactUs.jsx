import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';

function ContactUs() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });
    
    //   const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await fetch('http://localhost:3001/contact', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //       });
    
    //       if (response.ok) {
    //         console.log('Email sent successfully!');
    //         // You can add logic here to show a success message or redirect the user.
    //       } else {
    //         console.error('Failed to send email.');
    //         // Handle error and provide feedback to the user.
    //       }
    //     } catch (error) {
    //       console.error('Error sending email:', error);
    //     }
    //   };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bgWhite sm:items-center sm:pt-0">
            <div className="maxW-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 rounded-xl sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-orange-600 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal textLg sm:text-xl font-medium text-orange-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md trackingWide font-semibold w-40">
                                    Pune, Maharashtra, India.
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md trackingWide font-semibold w-40">
                                    +91 9763533588
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md trackingWide font-semibold w-40 ">
                                    shindeharshal009@gmail.com
                                </div>
                            </div>
                        </div>

                        <form  className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bgWhite border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bgWhite border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="mb-4 flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Your Message
                                </label>
                                <textarea required id="message" rows="4" className="block mt-2 rounded-lg p-2.5 w-full text-sm bgWhite border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" placeholder="Your message..."></textarea>
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-600 hover:bg-blue-dark text-white font-extrabold py-3 px-6 rounded-lg mt-3 hover:bg-[#ce3d2d] transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs