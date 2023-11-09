// MyChatbots.js
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyChatbots = () => {
  // Retrieve the chatbots array from local storage
  const chatbots = JSON.parse(localStorage.getItem('chatbots')) || [];



  const handleShare = (unique_id) => {
    const chatbotUrl = `${window.location.origin}/chat/${unique_id}`;
    navigator.clipboard.writeText(chatbotUrl).then(() => {
      // Notify user that the link has been copied
      toast.success('Link copied to clipboard');
    }, (err) => {
      console.error('Could not copy link: ', err);
      toast.error('Failed to copy link');
    });
  };

  // Function to render chatbot details as a card
  const renderChatbots = () => {
    return chatbots.map((chatbot, index) => (
      <div key={index} className="bg-white shadow rounded-lg p-6 m-4">
        <h3 className="text-xl font-bold mb-2">{chatbot.businessName}</h3>
        <p className="mb-2"><strong>Type:</strong> {chatbot.chatbotType}</p>
        <p className="mb-4"><strong>Description:</strong> {chatbot.businessDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">ID: {chatbot.unique_id}</span>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
              onClick={() => handleShare(chatbot.unique_id)}
            >
              Share
            </button>
            <a
              href={`/chat/${chatbot.unique_id}`}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              View
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-6">My Chatbots</h1>
          <div className="flex flex-wrap -m-4">
            {renderChatbots()}
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default MyChatbots;
