import React, { useState } from 'react';
import UseOrder from '../../Hooks/UseOrder';
import './ShowProducts.css'

const ShowProducts = ({ product}) => {
    // console.log(product);
    const[deleting,setDeleting]=useState(null)
    const [products, setProducts]=UseOrder()
    const handleDeleteBtn = id => {
        // const procced = window.confirm('Are you sure for delete ??')
     
            const url = `https://final-project-7jsd.onrender.com/myorder/${id}`
                // console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                    setDeleting(remainingItem)
                })

        
    }
    
    return (
        <div className='my-1px w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 '>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        <img src={product.img} class="object-cover w-full h-full" />
                    </div>
                    <h2 class="card-title">{product.name}</h2>
                    <p>Email : {product.email}</p>
                    <p>productName : {product.productName}</p>
                    <p>Order : {product.order}</p>
                    <p>AvailableOrder : {product.availableOrder}</p>
                    <p>Description : {product.Description}</p>
                    {/* <button for="my-modal-6" class="btn modal-button" className='btn btn-primary'>Delete</button> */}
                    {<label  for="my-modal-6" class="btn bg-red-800 modal-button">Delete</label>}
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" /> 
                     <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Are You Sure You want to Delete????</h3>
                         
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Cancel</label>
                                <label for="my-modal-6" onClick={() => handleDeleteBtn(product._id)}  class="btn bg-red-900">Delete</label>
                            </div>
                        </div>
                    </div> 
                    {/* { deleting && <label onClick={() => handleDeleteBtn(product._id)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>}
                    <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete</h3>
                            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div class="modal-action">
                                <button  class="btn btn-xs btn-error">Delete</button>
                                <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                            </div>
                        </div>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;