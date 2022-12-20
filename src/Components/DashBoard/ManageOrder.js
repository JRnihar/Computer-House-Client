import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder';

const ManageOrder = () => {
    const [tools, setTooled] = useState([])

    useEffect(() => {
        fetch('https://final-project-7jsd.onrender.com/part')
            .then(res => res.json())
            .then(data => setTooled(data))
    }, [tools])
    return (
        <div>
            <div>
                <h1 className='text-2xl text-primary text-center font-bold p-12'>Tooles/Parts</h1>
            </div>
            <div class=" my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        tools.map(tool => <ShowOrder key={tool._id} setTooled={setTooled} tool={tool}></ShowOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;