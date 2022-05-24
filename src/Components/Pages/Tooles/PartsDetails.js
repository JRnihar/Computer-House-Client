import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useParts from '../../../Hooks/useParts';

const PartsDetails = () => {
    const [user, loading] = useAuthState(auth);
    const { Id } = useParams()
    let [service, setService] = useParts(Id)
    const navigate=useNavigate()
    const{email}=user
    const handleIncrease = e => {
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


  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const address = e.target.address.value;
        const name = e.target.name.value
        // const phone = e.target.phone.value
        const productName = service.name
        const img = service.picture
        const description = service.Discription;
        const order = service.orderquantity;
        const availableOrder = service.availablequantity;
        const price = service.Price

        const product = {
            address,
            name,
            // phone,
            productName,
            img,
            description,
            order,
            availableOrder,
            price
        }
        console.log(product);
        const newProduct = {
            ...product, email: email
        }
        await axios.post('http://localhost:5000/addItem', newProduct)
            .then(function (res) {
                if (res?.data?.insertedId) {
                   
                    navigate('/dashboard')
                }
            })
    }

    return (
        <div>
            <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
               <div>
                    <form onSubmit={handleSubmit}>
                    <div class="rounded-t-lg h-32 overflow-hidden">
                        <img class="object-cover object-top w-full" src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Mountain' />
                    </div>
                    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img class="object-cover object-center h-32" src={service.picture} alt='Woman looking front' />
                    </div>
                    <div className='px-6' >
                        <h2 class="font-semibold">Name : {service.name}</h2>
                       
                        <h2 class="font-semibold">Order-quantity : {service.orderquantity}</h2>
                        <h2 class="font-semibold">Available-quantity : {service.availablequantity}</h2>
                        <p class="font-semibold mb-3">Description : {service.Discription}</p>


                    </div>


<hr />
                    <div class="form-control w-full max-w-xs px-12 mb-7">
                        <label class="label">
                            <span class="label-text">Name</span>

                        </label>
                        <input name='name' type="text" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />

                    </div>
                        <div class="form-control w-full max-w-xs px-12">
                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input value={user?.email} name='email' disabled type="email" class="input input-bordered w-full max-w-xs" />

                    </div>
                        <div class="form-control w-full max-w-xs px-12">
                        <label class="label">
                            <span class="label-text">Address</span>

                        </label>
                            <input type="text" placeholder="Address" name='address' class="input input-bordered w-full max-w-xs" required />
                        <input type='submit' className='btn btn-primary mt-5' value='Purchese'></input>
                    </div>
                    </form>
               </div>
                    <form className='d-flex ' onSubmit={handleIncrease}>
                   
                    <div class="form-control px-6">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <label class="input-group flex">
                            <input name='number' type="number" placeholder="Increase-Quantity" class="input input-bordered" required />
                          
                                <input className='btn btn-success text-white' type="submit" value="Increase" />
                          
                        </label>
                    </div>
                    </form>
                    <form className='d-flex ' onSubmit={handleDecrese}>
                    <div class="form-control px-6">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <label class="input-group flex">
                            <input name='number' type="number" placeholder="Decrease-Quantity" class="input input-bordered" required />

                            <input className='btn btn-success text-white mb-5' type="submit" value="Decrease" />

                        </label>
                    </div>

                    </form>






            </div>
        </div>
    );
};

export default PartsDetails;