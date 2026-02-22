import React, { use } from 'react';
import PricingCard from '../Cards/PricingCard';
import DaisyPricingCard from '../Cards/DaisyPricingCard';

const PricingOptions = ({pricingData}) => {
    const data = use(pricingData)
    // console.log(data)
    return (
        <div>
            <h1 className='text-2xl font-black'>Get Our Membership</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {/* {
                    data.map(price => <PricingCard key={price.id} price={price}></PricingCard>)
                } */}
                {
                    data.map(pirce=> <DaisyPricingCard price = {pirce}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;