import React from 'react';
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
           
            <section class="flex items-center justify-center py-20 bg-white ">
                <div class="px-16 bg-white">
                    <div class="flex flex-col items-start mx-auto lg:items-center">
                        <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


                        <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </path>
                            </svg>
                            See what others are saying</h2>
                        <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                            <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" class="object-cover w-full h-full"/>
                                    </div>
                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-gray-800">John Doe</h4>
                                        <p class="text-gray-600">CEO of Something</p>
                                    </div>
                                </div>
                                <blockquote class="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                            </div>
                            <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" class="object-cover w-full h-full"/>
                                    </div>
                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-gray-800">Jane Doe</h4>
                                        <p class="text-gray-600">CTO of Business</p>
                                    </div>
                                </div>
                                <blockquote class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                                    easier.
                                    Thanks for making such a great product."</blockquote>
                            </div>
                            <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" class="object-cover w-full h-full"/>
                                    </div>
                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-gray-800">John Smith</h4>
                                        <p class="text-gray-600">Creator of Stuff</p>
                                    </div>
                                </div>
                                <blockquote class="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                                    looking
                                    for. I would highly recommend this to anyone."</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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