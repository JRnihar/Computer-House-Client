import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyProduct = () => {


    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {

        const url = 'https://hidden-waters-77384.herokuapp.com/part';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast ('Product added done')
                navigate('/home')
            })

    }
    return (
        <div className='px-12'>
            <div>
                <h2 className=' text-xl font-bold p-5'> Add a Order</h2>
            </div>
            <form className='card bg-purple-300 justify-center px-16' onSubmit={handleSubmit(onSubmit)} >

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" required {...register("name", { required: true })} />

                </div>
                <br />

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <textarea type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" required {...register("Description")} />

                </div>
                <br />

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Available-quantity</span>
                    </label>
                    <textarea type="number" placeholder="Available-quantity" class="input input-bordered w-full max-w-xs" required {...register("availablequantity")} />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum order quantity</span>
                    </label>
                    <textarea type="number" placeholder="Minimum order quantity" class="input input-bordered w-full max-w-xs" required {...register("orderquantity")} />

                </div>
                <br />
                {/* <input className='mb-3 border-2 w-1/3 rounded-md' placeholder='picture' {...register("picture")} /> */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Picture</span>

                    </label>
                    <input placeholder="picture" class="input input-bordered w-full " required {...register("picture")} />

                </div>
                <br />
                <input className='mb-3 border-2 w-full rounded-md bg-primary py-2' type="submit" value='Add' />

            </form>
            <ToastContainer />
        </div>
    );
};

export default MyProduct;