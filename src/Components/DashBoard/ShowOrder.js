import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const ShowOrder = ({ tool}) => {
    
    // console.log(tool);
    const { _id, name, picture, orderquantity, availablequantity, Price } = tool
    const [tools, setTooled] = useState([])

    useEffect(() => {
        fetch('https://hidden-waters-77384.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setTooled(data))
    }, [tools])
    

    const handleDeleteBtn = id => {
        
    
            const url = `https://hidden-waters-77384.herokuapp.com/part/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = tools.filter(tool => tool._id !== id)
                    setTooled(remainingItem)
                    
                })

        
    }
 
    return (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


            <article class="overflow-hidden rounded-lg shadow-lg">
                <div class="wrapper bg-gray-400 antialiased text-gray-900">
                    <div>

                        <img src={tool.picture} alt=" random imgee" class="w-50 h-52 flex items-center justify-center object-cover object-center rounded-lg shadow-md" />

                        <div class="relative px-4 -mt-16  ">
                            <div class="bg-white p-6 rounded-lg shadow-lg">
                                <p>Name : {tool.name}</p>
                                {/* <p>Price : {part.Price}</p> */}
                                <p> Minimum Order-Quantity : {tool.orderquantity}</p>
                                <p>Available-quantity : {tool.availablequantity}</p>
                                <p>Description : {tool.Description}</p>
                                {/* <button onClick={() => handleDeleteBtn(tool._id)}  className='btn btn-primary text-white mt-5'>Delete</button> */}

                             
                                <label for="my-modal-6" class="btn modal-button  mt-5 bg-red-800">Delete</label>
                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are You Sure You want to Delete????</h3>

                                        <div class="modal-action">
                                            <label for="my-modal-6" class="btn">Cancel</label>
                                            <label for="my-modal-6" onClick={() => handleDeleteBtn(tool._id)} class="btn bg-red-800">Delete</label>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>



            </article>

        </div>
    );
};

export default ShowOrder;