import React from 'react'

export default function TeamSection() {
  return (
    <div className='TeamSection'>
        <section className="bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    Meet Our Team
                </h2>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
                    Our team of professionals is dedicated to your success.
                </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 1" />
                    <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Alice Johnson</h3>
                    <p className="text-gray-600">CEO</p>
                    <p className="mt-2 text-gray-600">
                        Alice is the visionary leader of our company with a passion for innovation and excellence.
                    </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 2" />
                    <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-gray-600">CTO</p>
                    <p className="mt-2 text-gray-600">
                        John is our tech guru, overseeing all technical aspects and driving our technology strategy.
                    </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 3" />
                    <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Jane Smith</h3>
                    <p className="text-gray-600">Lead Designer</p>
                    <p className="mt-2 text-gray-600">
                        Jane is our creative mind, crafting visually stunning and user-friendly designs.
                    </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 4" />
                    <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Michael Brown</h3>
                    <p className="text-gray-600">Project Manager</p>
                    <p className="mt-2 text-gray-600">
                        Michael ensures that all our projects are delivered on time and meet our high standards.
                    </p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 5" />
                    <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Emily Davis</h3>
                    <p className="text-gray-600">Marketing Head</p>
                    <p className="mt-2 text-gray-600">
                        Emily drives our marketing efforts, building our brand and connecting with clients.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}
