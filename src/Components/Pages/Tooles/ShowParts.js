import React from 'react';

const ShowParts = ({part}) => {
    const { _id, name, picture, orderquantity, availablequantity, Price}=part
    return (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={part.picture}/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <p class="no-underline hover:underline text-black text-2xl font-bold" href="#">
                             Title
                        </p>
                        <p>Name : {part.name}</p>
                        <p>Price : {part.Price}</p>
                        <p>Order-Quantity : {part.orderquantity}</p>
                        <p>Available-quantity : {part.availablequantity}</p>
                        <button className='btn btn-primary text-white mt-5'>purchase</button>
                    </h1>
                    
                </header>

               

            </article>
       
        </div>
        
    );
};

export default ShowParts;