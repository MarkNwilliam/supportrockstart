// AboutPage.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation/landing2.json'; // Replace with your actual animation file
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer
 from '../components/footer';
function AboutPage() {
  return (
    <>
    <Header />
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap items-center justify-center -mx-4">
        {/* Animation Column */}
        <div className="px-4 w-full md:w-1/2">
          <Lottie animationData={animationData} className="w-full h-auto" />
        </div>

        {/* Feature List Column */}
        <div className="px-4 w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-center mb-4">About SupportSalesRockstar</h1>
          <p className="mb-4">
            SupportSalesRockstar is a tool designed to empower sales and support teams to excel in their roles. 
            Explore our features to enhance your customer interactions, streamline documentation, and gain insights from customer interviews and analysis.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Chatbots for Q&A - Automate responses and provide quick answers to customer queries.</li>
            <li className="mb-2">Documentation Assistance - Help customers find the information they need from your documents.</li>
            <li className="mb-2">Customer Interviews - Conduct automated interviews and gather feedback efficiently.</li>
            <li className="mb-2">Customer Analysis - Analyze customer data for insights and improve business strategies.</li>
          </ul>
          <div className="text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-700">Go back to Homepage</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutPage;
