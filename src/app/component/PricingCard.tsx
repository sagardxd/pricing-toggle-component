import React from 'react'

type subscriptionPlans = {
    name: string;
    annuallyPrice?: number | null;
    monthlyPrice?: number | null;
    storage: string;
    users: string;
    sendLimit: string;
  };

export default function PricingCard(props: subscriptionPlans) {
    return (
        <div className='bg-white rounded-lg flex flex-col gap-4 items-center p-4 w-[300px]'>
            <p className='text-sm text-grayish-blue font-bold'>{props.name}</p>
            <p className='text-dark-grayish-blue  flex items-center gap-1'>
                <span className='text-dark-grayish-blue text-2xl font-bold'>$</span>
                <span className='text-5xl font-bold'>{props.annuallyPrice || props.monthlyPrice}</span>
                </p>

            <section className='text-grayish-blue text-xs font-semibold flex flex-col items-center justify-center'>
                <p className='border-t-2 py-3'>{props.storage} Storage</p>
                <p className='border-t-2 py-3'>{props.users} </p>
                <p className='border-t-2 py-3'>{props.sendLimit}</p>
            </section >
            <button className='border-t-2 py-3 rounded-lg bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] 
             w-full transition-all hover:ring-1 hover:ring-[hsl(236,72%,79%)] hover: shadow-sm text-white 
            text-sm font-bold  hover:bg-inherit'>LEARN MORE</button>
        </div>
    )
}
