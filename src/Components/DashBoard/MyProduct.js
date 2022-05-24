import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const MyProduct = () => {


    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {

        const url = 'http://localhost:5000/part';
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
                // toast('Review added done')
                navigate('/home')
            })

    }
    return (
        <div className='px-12'>
            <div>
                <h2 className=' text-xl font-bold p-5'> Add a Order</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >

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
                    <input placeholder="picture" class="input input-bordered w-full max-w-xs" required {...register("picture")} />

                </div>
                <br />
                <input className='mb-3 border-2 w-1/3 rounded-md bg-primary py-2' type="submit" value='Add' />

            </form>
        </div>
    );
};

export default MyProduct;