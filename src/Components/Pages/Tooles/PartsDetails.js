import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useParts from '../../../Hooks/useParts';

const PartsDetails = () => {
    const [user, loading] = useAuthState(auth);
    const { Id } = useParams()
    let [service, setService] = useParts(Id)
    const handleSubmit = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { name, orderquantity, Discription, price, availablequantity } = service

            orderquantity = parseInt(orderquantity) + parseInt(number)
            console.log(orderquantity);
            service = { orderquantity, Discription, Discription, availablequantity, name, price }
            console.log(service);
    
        const url = `http://localhost:5000/part/${Id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
    }




    const handleDecrese = e => {
        e.preventDefault()
        const number = e.target.number.value;
        let { name, orderquantity, Discription, price, availablequantity } = service

        orderquantity = parseInt(orderquantity) - parseInt(number)
        console.log(orderquantity);
        service = { orderquantity, Discription, Discription, availablequantity, name, price }
        console.log(service);

        const url = `http://localhost:5000/part/${Id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }

    return (
        <div>
            <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div class="rounded-t-lg h-32 overflow-hidden">
                    <img class="object-cover object-top w-full" src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Mountain' />
                </div>
                <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img class="object-cover object-center h-32" src={service.picture} alt='Woman looking front' />
                </div>
                <div className='px-6' >
                    <h2 class="font-semibold">Name : {service.name}</h2>
                    <h2 class="font-semibold">Price : {service.Price}</h2>
                    <h2 class="font-semibold">Order-quantity : {service.orderquantity}</h2>
                    <h2 class="font-semibold">Available-quantity : {service.availablequantity}</h2>
                    <p class="font-semibold">Description : {service.Discription}</p>


                </div>

                <div class="p-4 border-t mx-8 mt-2">
                    <p>User Information</p>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>

                        </label>
                        <input type="text" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input value={user?.email} disabled type="email" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>

                        </label>
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" required />

                    </div>
                    <form className='d-flex ' onSubmit={handleSubmit}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                       
                        </label>
                            <input type="number" name='number' placeholder="Quantity Increase " class="input input-bordered w-full max-w-xs" required />
                        
                    </div>
                   
                      
                <div className='flex'>
                            <input className='btn btn-success ms-2 m-5 text-white' type="submit" value="Increase" />
                          
                </div>

                    </form>
                    <form className='d-flex ' onSubmit={handleDecrese}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                       
                        </label>
                            <input type="number" name='number' placeholder="Quantity Decrease " class="input input-bordered w-full max-w-xs" required />
                        
                    </div>
                   
                      
                <div className='flex'>
                            <input className='btn btn-success ms-2 m-5 text-white' type="submit" value="Decrease" />
                          
                </div>

                    </form>






                </div>
            </div>
        </div>
    );
};

export default PartsDetails;