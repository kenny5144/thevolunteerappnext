"use client";
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Engage Section*/}
      <div className="w-full bg-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="py-20 flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Students, Connecting Communities</h2>
              <p className="text-lg text-gray-700 mb-8">
               Empower your community, enrich your experience, and make a difference.
              </p>
            </div>
            <div className="flex-1">
              <Image src="https://i.pinimg.com/564x/27/35/3b/27353b942ffbae8368473774fe11458a.jpg" alt="Feature Image 3" width={500} height={400} className="mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      {/* Track Section (Image on the Left) */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="py-20 flex flex-col lg:flex-row-reverse items-center"> {/* Changed to lg:flex-row-reverse */}
            <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Track</h2>
              <p className="text-lg text-gray-700 mb-8">
                Effortlessly track your community service hours and progress towards graduation requirements.
              </p>
            </div>
            <div className="flex-1">
              <Image src="https://i.pinimg.com/564x/86/8a/28/868a288bbb828d8d7d715de3e3870946.jpg" alt="Feature Image 1" width={500} height={400} className="mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Section (Image on the Right) */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="py-20 flex flex-col lg:flex-row items-center"> {/* Changed to lg:flex-row */}
            <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover</h2>
              <p className="text-lg text-gray-700 mb-8">
                Explore a wide range of community service opportunities to make a positive impact.
              </p>
            </div>
            <div className="flex-1">
              <Image src="https://i.pinimg.com/564x/c3/d2/1d/c3d21d2637fdb34d203105ee100033ea.jpg" alt="Feature Image 2" width={500} height={400} className="mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="w-full bg-gray-800 text-white text-center py-32">
        <h1 className="text-5xl font-extrabold mb-6">Find a Community Service</h1>
        <p className="text-xl mb-8">
          Join our platform to easily find community service opportunities and track your progress.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700">Login</button>
          <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500">Sign Up</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-50 py-24">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between text-sm text-gray-700">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Partners</h4>
              <ul>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sitemap</h4>
              <ul>
                <li><a href="#" className="hover:underline">Advertise</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
                <li><a href="#" className="hover:underline">Feedback</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <p className="mb-4">Join our mailing list to receive updates and exclusive offers.</p>
              <form>
                <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded mb-2 w-full" />
                <button type="submit" className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-500">Subscribe</button>
              </form>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-700 hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="w-full bg-gray-800 py-4">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Relume. All rights reserved. 
          <a href="#" className="hover:underline mx-2 text-gray-400">Privacy Policy</a> 
          <a href="#" className="hover:underline mx-2 text-gray-400">Terms of Service</a> 
          <a href="#" className="hover:underline mx-2 text-gray-400">Cookie Settings</a></p>
        </div>
      </div>
    </>
  );
}
