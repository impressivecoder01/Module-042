import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingCard = ({ price }) => {
    // console.log(price)
    const {features} = price
    return (
        <div className='border flex flex-col bg-gray-400  rounded-2xl shadow-2xl p-5'>
            <div>
                {/* card header */}
                <h1 className='text-7xl'>{price.name}</h1>
                <h4 className='text-4xl'>{price.price} USD</h4>

            </div>
            <div>
                {/* card body */}
                <div className='bg-white text-black rounded-2xl flex-1 px-3'>
                    <p>{price.description}</p>
                    <ul>
                        {features.map(feature => <p className='flex gap-2 mb-0.5'><CircleCheck /> {feature}</p>) }
                    </ul>
                </div>
                <button className="btn btn-primary w-full mt-2 text-2xl rounded-2xl">Subscribe Now</button>

            </div>
        </div>
    );
};

export default PricingCard;