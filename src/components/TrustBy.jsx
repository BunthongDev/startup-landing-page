import React from 'react'

export default function TrustBy() {
  return (
    <div className='trust-by'>
        <section className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    Trusted By
                </h2>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
                    We are proud to be trusted by these amazing companies.
                </p>
                </div>
                <div className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center">
                <div className="flex justify-center">
                    <img className="h-16" src="https://via.placeholder.com/150x50" alt="Company 1" />
                </div>
                <div className="flex justify-center">
                    <img className="h-16" src="https://via.placeholder.com/150x50" alt="Company 2" />
                </div>
                <div className="flex justify-center">
                    <img className="h-16" src="https://via.placeholder.com/150x50" alt="Company 3" />
                </div>
                <div className="flex justify-center">
                    <img className="h-16" src="https://via.placeholder.com/150x50" alt="Company 4" />
                </div>
                <div className="flex justify-center">
                    <img className="h-16" src="https://via.placeholder.com/150x50" alt="Company 5" />
                </div>
                </div>
            </div>
        </section>

    </div>  
  )
}
