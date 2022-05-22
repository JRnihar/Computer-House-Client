import React from 'react';
import ReviewItem from './ReviewItem';
// import ReviewItem from './ReviewItem';
import Tooles from './Tooles/Tooles';

const Home = () => {
    return (
        <div>

            <section>
                <div class="bg-gray-200 ">
                    <div class=" px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                            <div class="max-w-lg">
                                <h1 class="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Set your
                                    Title</h1>
                                <p class="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                    laudantium quod rem voluptatem eos accusantium cumque.</p>
                                <div class="mt-6">
                                    <a href="#"
                                        class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                                        Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                            <img class="object-cover w-full max-w-2xl rounded-md lg:h-full"
                                src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo"/>
                        </div>
                    </div>
                </div>
            </section>
           
     <ReviewItem></ReviewItem>
            <section>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>
            </section>
            <Tooles></Tooles>
            <h1 className='text-2xl text-primary text-center font-bold'>Our History</h1>
            <section className='flex items-center justify-center py-20 bg-white '>
                <div>
                  
                </div>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Likes</div>
                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Page Views</div>
                        <div class="stat-value text-secondary">2.6M</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">86%</div>
                        <div class="stat-title">Tasks done</div>
                        <div class="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </section>
            <h1 className='text-2xl text-primary text-center font-bold mb-12'>Catalogue</h1>

            <section className='bg-slate-300'>
                <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                
                    <div class="lg:flex items-center justify-between">
                        <div class="lg:w-1/3">
                            <h1 class="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Indoor Interiors</h1>
                            <p class="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture.</p>
                            <button role="button" aria-label="view catalogue" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-white flex items-center hover:underline">
                                View Catalogue
                                <svg class="ml-2 mt-1 dark:text-white" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33325 4H10.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 6.66667L10.6667 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 1.33398L10.6667 4.00065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="lg:w-7/12 lg:mt-0 mt-8">
                            <div class="w-full h-full bg-red-200">
                                <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" class="w-full sm:block hidden" />
                                <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" class="sm:hidden block w-full" />
                            </div>
                            <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                                <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" class="w-full" alt="kitchen" />
                                <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" class="w-full" alt="sitting room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            

        </div>
    );
};

export default Home;