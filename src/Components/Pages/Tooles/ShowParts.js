import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowParts = ({ tool}) => {
    console.log(tool);
    const { _id, name, picture, orderquantity, availablequantity, Price } = tool
const navigate=useNavigate()
    const navigateTOShowParts=(Id)=>{
        navigate(`/Home/${Id}`)
      
    }
    return (
      
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
            <article class="overflow-hidden rounded-lg shadow-lg">
                <div class="wrapper bg-gray-400 antialiased text-gray-900">
                    <div>

                        <img src={tool.picture} alt=" random imgee" class="w-50 h-52 flex items-center justify-center object-cover object-center rounded-lg shadow-md"/>

                            <div class="relative px-4 -mt-16  ">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                <p>Name : {tool.name}</p>
                                {/* <p>Price : {part.Price}</p> */}
                                <p> Minimum Order-Quantity : {tool.orderquantity}</p>
                                <p>Available-quantity : {tool.availablequantity}</p>
                                <p>Description : {tool.Description}</p>
                                <button onClick={() => navigateTOShowParts(_id)} className='btn btn-primary text-white mt-5'>purchase</button>
      
                                </div>
                            </div>

                    </div>
                </div>

               

            </article>
       
        </div>
        
    );
};

export default ShowParts;