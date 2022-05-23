import React from 'react';
import UseOrder from '../../Hooks/UseOrder';

const ShowProducts = ({ product}) => {
    console.log(product);
    const [products, setProducts]=UseOrder()
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are you sure for delete ??')
        if (procced) {
            const url = `http://localhost:5000/myorder/${id}`
                console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingItem = products.filter(product => product._id !== id)
                    setProducts(remainingItem)
                })

        }
    }
    
    return (
        <div className='my - 1 px - 1 w - full md: w - 1 / 2 lg: my - 4 lg: px - 4 lg: w - 1 / 3 '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                        <img src={product.img} class="object-cover w-full h-full" />
                    </div>
                    <h2 class="card-title">{product.name}</h2>
                    <p>Email : {product.email}</p>
                    <p>productName : {product.productName}</p>
                    <p>Order : {product.order}</p>
                    <p>AvailableOrder : {product.availableOrder}</p>
                    <p>Description : {product.description}</p>
                    <button onClick={() => handleDeleteBtn(product._id)} className='btn btn-primary'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;