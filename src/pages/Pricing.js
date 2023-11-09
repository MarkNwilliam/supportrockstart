// Pricing.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Pricing = () => {
  return (
    <>
    <Header />
    <section className="py-20 bg-gray-100 text-gray-700">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold text-lg uppercase text-indigo-600">Pricing</span>
          <h2 className="text-4xl font-bold lg:text-5xl mt-2">Choose your best plan</h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">

     
<div className="flex flex-wrap items-stretch -mx-4 justify-center">
  {/* Basic Plan */}
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Basic</h3>
      <p className="flex-grow text-gray-600 mb-4">Perfect for individuals and small teams just getting started.</p>
      <span className="text-4xl font-bold mb-4">$0 <span className="text-lg">/mo</span></span>
      <ul className="text-sm mb-8">
        <li className="mb-2">Up to 500 interactions</li>
        <li className="mb-2">Email Support</li>
        <li className="mb-2">Basic Analytics</li>
      </ul>
      <Link to="/signup-basic" className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Get Started</Link>
    </div>
  </div>

  {/* Pro Plan */}
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Pro</h3>
      <p className="flex-grow text-gray-600 mb-4">Ideal for growing businesses that need more advanced features.</p>
      <span className="text-4xl font-bold mb-4">$49 <span className="text-lg">/mo</span></span>
      <ul className="text-sm mb-8">
        <li className="mb-2">Up to 5,000 interactions</li>
        <li className="mb-2">Priority Email Support</li>
        <li className="mb-2">Advanced Analytics</li>
        <li className="mb-2">Custom Integrations</li>
      </ul>
      <Link to="/signup-pro" className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300">Get Started</Link>
    </div>
  </div>

  {/* Enterprise Plan */}
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
      <p className="flex-grow text-gray-600 mb-4">For large organizations requiring a full suite of capabilities and custom solutions.</p>
      <span className="text-4xl font-bold mb-4">Custom</span>
      <ul className="text-sm mb-8">
        <li className="mb-2">Unlimited interactions</li>
        <li className="mb-2">24/7 Phone Support</li>
        <li className="mb-2">Dedicated Account Manager</li>
        <li className="mb-2">Onboarding & Training</li>
        <li className="mb-2">Custom Features & Development</li>
      </ul>
      <Link to="/contact-sales" className="mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">Contact Sales</Link>
    </div>
  </div>
</div>

          {/* Pricing Cards Here */}



          {/* ... */}


        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Pricing;
