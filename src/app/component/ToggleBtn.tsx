import clsx from 'clsx';
import React from 'react'

type Pricing = {
    pricing: 'anually' | 'monthly';
    onclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ToggleBtn({ pricing, onclick }: Pricing) {
    return (

        <button
        className='w-12 h-6 bg-red-400 rounded-full flex items-center p-1'
        onClick={onclick}
        >
                <div className={clsx('h-4 w-4 rounded-full bg-white transition-all', { "translate-x-[calc(100%+6px)]": pricing === "monthly" })}></div>
            
        </button>
    )
}
