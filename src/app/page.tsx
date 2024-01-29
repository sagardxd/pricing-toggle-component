"use client"
import topImage from "@/images/bg-top.svg";
import Image from "next/image";
import ToggleBtn from "./component/ToggleBtn";
import { useState } from "react";

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
        <section>
          cards
        </section>
      </main>

    </div>
  );
}
