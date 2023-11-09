// src/pages/HomePage.js
import { Link } from 'react-router-dom';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation/landing.json'; // Make sure this path is correct
import Header from '../components/header'
import Footer from '../components/footer'

function HomePage() {

    return (
    <>
   <Header />

 {/* Hero Section */}
<header className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
  <div className="w-full flex justify-center" style={{ maxWidth: '600px', maxHeight: '600px' }}> {/* Adjust maxWidth and maxHeight as needed */}
    <Lottie animationData={animationData} style={{ width: '50%', height: '50%' }} />
  </div>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 mt-8">Empower Your Business with AI</h1>
  <p className="text-base sm:text-lg mb-6 text-center mx-3">Leverage SupportSalesRockstar to enhance your customer interactions and boost sales.</p>
  <Link to="/makechatbot" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mt-4">Make a chatbot</Link>
</header>



   {/* Features Section */}
<section className="bg-white py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>

      {/* Customer Q&A Chatbot Feature */}
      <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-gray-100 mb-6">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Make a Chatbot</div>
          <p className="text-gray-700 text-base">
            Automate your customer service with our AI-powered hatbot, designed to provide instant answers and improve customer experience.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link to="/makechatbot" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Make a chatbot
          </Link>
        </div>
      </div>


      <div className="max-w-md w-full rounded overflow-hidden shadow-lg bg-gray-100 mb-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Customer Analysis</div>
                                <p className="text-gray-700 text-base">
                                    Dive deep into customer data to extract actionable insights. Understand customer behavior and preferences to make data-driven decisions that propel your business forward.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Link to="/customer-analysis" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Start Analysis
                                </Link>
                            </div>
                        </div>
      {/* Add more features as needed */}
    </div>
  </div>
</section>


 

  <Footer />
  </>
);
};

export default HomePage;