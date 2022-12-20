import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import ShowProducts from './ShowProducts';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const email = user?.email

    const [products, setProduct] = useState([])
    // console.log(products);
    useEffect(() => {

        const run = async () => {
            await axios.get(`https://final-project-7jsd.onrender.com/myorder/${email}`)
                .then(function (res) {
                setProduct(res.data)
            })

        }
        run()
    }, [email, products])
    return (
        <div>
           <div>
                <h2 className='text-center text-2xl mt-5 font-bold  text-primary '>My Order</h2>
           </div>
            <div className='flex flex-wrap  lg:-mx-4 px-12 mt-10 gap-5'>
               {
                   products.map(product=><ShowProducts key={product._id} product={product}></ShowProducts>)
               }
           </div>
        </div>
    );
};

export default MyOrder;