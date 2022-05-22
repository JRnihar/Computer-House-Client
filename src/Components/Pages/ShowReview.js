import React from 'react';

const ShowReview = ({ review }) => {
    const{_id,name,picture,Description,rating}=review
    console.log(review);
    return (
    
        <div className='my - 1 px - 1 w - full md: w - 1 / 2 lg: my - 4 lg: px - 4 lg: w - 1 / 3 '>
         <div class="card w-96 bg-base-100 shadow-xl">
                 <div class="card-body">
                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                     <img src={review.picture} class="object-cover w-full h-full" />
             </div>
                   <h2 class="card-title">{review.name}</h2>
                    <p>Description : {review.Description}</p>
                    <p>Rating : {review.rating}</p>
                    
                </div>
            </div>
            </div>
            
               
     
    );
};

export default ShowReview;