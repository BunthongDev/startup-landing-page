import React from 'react'
import HeroImage from '../image/hero-image.png'
export default function HeroSection() {
  return (
    <div className='HeroSection '>
        
    <section className="bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
                <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                    Your Success is our Goal!!
                </h1>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
                    At our startup, we are dedicated to providing the best solutions to ensure your success.
                </p>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
                    We believe in innovation, hard work, and commitment to help you achieve your business objectives.
                </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img className="w-full rounded-lg shadow-lg" src={HeroImage} alt="Startup Goal" />
            </div>
        </div>
    </section>


    </div>
  )
}
