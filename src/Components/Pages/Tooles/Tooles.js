import React, { useEffect, useState } from 'react';
import ShowParts from './ShowParts';

const Tooles = () => {
    const[parts,setParts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/part')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
         <div>
                <h1 className='text-2xl text-primary text-center font-bold p-12'>Tooles/Parts</h1>
         </div>
            <div class=" my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        parts.map(part => <ShowParts key={part._id} part={part}></ShowParts>)
                    }
             </div>
         </div>
        </div>
    );
};

export default Tooles;