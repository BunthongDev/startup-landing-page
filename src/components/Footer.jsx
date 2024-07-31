import React from 'react'

export default function Footer() {
  return (
    <div className='Footer'>
      <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:flex lg:justify-between">
                <div className="lg:w-1/3">
                    <h3 className="text-2xl font-bold">About Us</h3>
                    <p className="mt-4 text-gray-400">
                    We are a tech startup dedicated to providing innovative solutions to help businesses succeed. Our team of experts is committed to delivering top-notch services in web development, mobile development, UX/UI design, system development, and game development.
                    </p>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <h3 className="text-2xl font-bold">Quick Links</h3>
                    <ul className="mt-4">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                    <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <h3 className="text-2xl font-bold">Newsletter</h3>
                    <p className="mt-4 text-gray-400">
                    Subscribe to our newsletter to get the latest updates and news.
                    </p>
                    <form className="mt-4 flex flex-col sm:flex-row">
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md text-gray-800" />
                    <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">Subscribe</button>
                    </form>
                </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center lg:text-left">
                <p className="text-gray-400">
                    © 2024 Your Company. All rights reserved.
                </p>
                </div>
            </div>
        </footer>

    </div>
  )
}
