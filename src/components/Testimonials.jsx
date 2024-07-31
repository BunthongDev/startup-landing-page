import React from 'react'

export default function Testimonials() {
  return (
    <div className='Testimonials'>
        <section className="bg-gray-100 text-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            What Our Clients Say
        </h2>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
            Hear from some of our satisfied clients.
        </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Client 1" />
            <div className="ml-4">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-600">CEO, Tech Company</p>
            </div>
            </div>
            <p className="text-gray-600">
            "This company transformed our business with their innovative solutions. Their team is highly skilled and dedicated to our success."
            </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Client 2" />
            <div className="ml-4">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-gray-600">Marketing Director, Creative Agency</p>
            </div>
            </div>
            <p className="text-gray-600">
            "Their expertise in web development and UX/UI design helped us launch a highly successful marketing campaign. We couldn't be happier."
            </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Client 3" />
            <div className="ml-4">
                <h3 className="text-xl font-bold">Alice Johnson</h3>
                <p className="text-gray-600">Product Manager, SaaS Company</p>
            </div>
            </div>
            <p className="text-gray-600">
            "Their team delivered a top-notch product on time and on budget. We highly recommend their services."
            </p>
        </div>
        </div>
    </div>
</section>

    </div>
  )
}
