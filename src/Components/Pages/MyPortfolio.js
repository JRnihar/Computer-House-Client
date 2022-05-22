import React from 'react';
import './MyPortfolio.css'
import signature from '../../img/signature (2).png'

const MyPortfolio = () => {
    return (
        <div>
            
            <div class="bg-dark-gray w-full min-h-screen">
                <h3 class="uppercase  font-medium text-green text-2xl text-center p-10">My Portfolio</h3>
               
                <div class="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap">
                    <div class="md:w-1/3 w-full">
                        <div>
                            <img src="https://i.ibb.co/zX1zL7J/GZR3668.jpg" alt="Profile" class="ml-12 w-50" />
                            <img src={signature} alt="Logo" class="mt-4 max-w-sm w-full" />
                        </div>
                        <section class="mt-16">
                            <h3 class="uppercase  font-medium text-green text-2xl">Career Objectives</h3>
                            <div class="h-1 bg-green w-48 my-4">
                            </div>
                            <p class="text-white">I am a motivated team player and aspiring web developer with great design and branding knowledge. My ultimate goal is to grow my knowledge of the industry and use my conversational skills to help fast-paced startup design UI/UX charismas.</p>
                        </section>

                        <section class="mt-16">
                            
                        </section>

                        <section class="mt-16">
                           
                        </section>
                    </div>
                    <div class="md:w-2/4 w-full">
                        <div class="mt-16 md:mt-0">
                            <h3 class="uppercase  font-medium text-green text-2xl">Specializations</h3>
                            <div class="h-1 bg-green w-48 my-4">
                            </div>
                            <ul class="text-white list-disc list-inside">
                                <li>Front End Design (HTML5, CSS3, Bootstrap, Figma)</li>
                                <li><a href="https://tailwindcss.com" class="hover:underline">TailwindCSS (♥)</a></li>
                                <li>Javascript ES6/*7 (Data Modelling, Debugging, Async Performance)</li>
                                <li>Front End Development ( React.js ,)</li>
                                <li>Back End Development (Firebase, Node js,Express js,MongoDB)</li>
                                <li>User Interface/User Experience</li>
                                <li>Design Thinking & Problem Solving </li>
                                <li>Can develop high-performant front-end interfaces which interacts with backend API</li>
                            </ul>


                            <div class="mt-8">
                                <h4 class="font-medium text-green text-2xl">EDUCATION</h4>

                                <ul class="text-white list-disc list-inside mt-4">
                                    <li> SSC (Science) </li>
                                    <li> HSC (Science)</li>
                                    <li> Bachelor of Arts: 
                                        Chittagong Govt. College <br />
                                        ( Under National University ).
                                    </li>
                                </ul>
                            </div>

                         
                        </div>
                        <section class="mt-16">
                           
                            <div class="mt-8">
                                <h3 class="uppercase font-medium text-green text-2xl">Contact Info:</h3>
                                <div class="h-1 bg-green w-48 my-4">
                                </div>
                                <div class="text-white">
                                    <ul class="text-white list-disc list-inside mt-4">
                                        <li>LinkedIn: https://www.linkedin.com/in/monirul-islam-jr-nihar-530907229/ </li>
                                        <li>Email : niharmonirulislam@gmail.com</li>
                                        <li>Address : Chittagong, Bangladesh</li>
                                        <li>Phone : +88 01571142002</li>
                                    </ul>

                                </div>
                            </div>
                        </section>
                        <section class="mt-16">
                            <h3 class="uppercase font-medium text-green text-2xl">My Projects</h3>
                            <div class="h-1 bg-green w-48 my-4">
                            </div>

                            <div class="text-white">
                                <ul class="text-white list-disc list-inside mt-4">
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">dfgfg</a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">dfgfg</a></li>
                                   
                                </ul>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;