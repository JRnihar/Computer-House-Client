import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const navigate=useNavigate()
    const{register,handleSubmit}=useForm()
    const onSubmit = data => {

        const url = 'https://final-project-7jsd.onrender.com/review';
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
                toast('Review added done')
                navigate('/home')
            })

    }
    return (
        <div>
            <div>
                <h2 className=' text-xl px-12 font-bold p-5'>Please Add a Reviews!! If You want</h2>
            </div>
            <form className='card bg-purple-300 justify-center px-16' onSubmit={handleSubmit(onSubmit)} >
                {/* <input className='mb-3 border-2 w-1/3 rounded-md' placeholder='you name' {...register("name", { required: true })} /> */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input type="text"  placeholder="Name" class="input input-bordered w-full max-w-xs" required {...register("name", { required: true })}  />

                </div>
                <br />
                {/* <textarea className='mb-3 border-2 w-1/3 rounded-md' placeholder='you description  ' {...register("Description")} /> */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>

                    </label>
                    <textarea type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" required {...register("Description")} /> 

                </div>
                <br />
                {/* <input
                    placeholder="Ratings"
                    className="mb-3 border-2 w-1/3 rounded-md"
                    {...register("rating")}
                /> */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Ratings</span>

                    </label>
                    <textarea type="number" placeholder="Ratings" class="input input-bordered w-full max-w-xs" required {...register("rating")} />

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
            <ToastContainer />
        </div>
    );
};

export default MyReview;