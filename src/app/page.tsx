"use client"
import topImage from "@/images/bg-top.svg";
import Image from "next/image";
import ToggleBtn from "./component/ToggleBtn";
import { useState } from "react";
import PricingCard from "./component/PricingCard";

const subscriptionPlans = [
  {
    name: 'Basic',
    annuallyPrice: 19.99,
    monthlyPrice: 199.99,
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    sendLimit: 'Send up to 3 GB',
  },
  {
    name: 'Professional',
    annuallyPrice: 24.99,
    monthlyPrice: 249.99,
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    sendLimit: 'Send up to 10 GB',
  },
  {
    name: 'Master',
    annuallyPrice: 39.99,
    monthlyPrice: 399.99,
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    sendLimit: 'Send up to 20 GB',
  },
];

export default function Home() {

  const [currentPricing, setcurrentPricing] = useState<'anually' | 'monthly'>('anually');

  function handletoggle() {
    if (currentPricing === "anually") {
      setcurrentPricing('monthly')
    }
    if (currentPricing === "monthly") {
      setcurrentPricing('anually')
    }
  }


  return (
    <div className="w-full min-h-screen bg-very-light-grayish-blue flex items-center text-black 
    justify-center p-4">

      <main className="flex flex-col items-center gap-10">
        <h2 className="text-2xl font-semibold text-grayish-blue">Our Pricing</h2>
        <div className="flex  gap-4">

          <p className="text-light-grayish-blue font-semibold">Annually</p>
          <ToggleBtn onclick={handletoggle} pricing={currentPricing} />
          <p className="text-light-grayish-blue font-semibold">Monthly</p>

        </div>

        {/* {cards} */}
        <section className="flex">
          {subscriptionPlans.map((d,i) => (
            <PricingCard 
            annuallyPrice={
              currentPricing === 'anually' ? d.annuallyPrice : null
            }
            monthlyPrice={
              currentPricing === 'monthly' ? d.monthlyPrice : null
            }
            name={d.name}
            sendLimit={d.sendLimit}
            storage={d.storage}
            users={d.users}
            key={i}/>
          ))}
        </section>
      </main>

    </div>
  );
}
