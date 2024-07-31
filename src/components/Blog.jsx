import React from 'react'

export default function Blog() {
  return (
    <div className='Blog'>
        <section className="bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                    Our Latest Blog Posts
                </h2>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600">
                    Stay updated with our latest insights and articles.
                </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <img className="h-48 w-full object-cover rounded-t-lg" src="https://via.placeholder.com/400x250" alt="Blog 1" />
                    <div className="mt-4">
                    <h3 className="text-2xl font-bold">How to Start with Web Development</h3>
                    <p className="mt-2 text-gray-600">
                        Discover the essential steps and tools you need to begin your journey in web development.
                    </p>
                    <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold">Read More</a>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <img className="h-48 w-full object-cover rounded-t-lg" src="https://via.placeholder.com/400x250" alt="Blog 2" />
                    <div className="mt-4">
                    <h3 className="text-2xl font-bold">Top 10 UX/UI Design Tips</h3>
                    <p className="mt-2 text-gray-600">
                        Learn from our experts on how to create stunning and user-friendly interfaces.
                    </p>
                    <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold">Read More</a>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <img className="h-48 w-full object-cover rounded-t-lg" src="https://via.placeholder.com/400x250" alt="Blog 3" />
                    <div className="mt-4">
                    <h3 className="text-2xl font-bold">The Future of Mobile Development</h3>
                    <p className="mt-2 text-gray-600">
                        Explore the latest trends and technologies shaping the future of mobile app development.
                    </p>
                    <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold">Read More</a>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}
