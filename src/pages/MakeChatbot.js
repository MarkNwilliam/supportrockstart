// src/pages/MakeChatbot.js
import React, { useState, useEffect } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Swal from 'sweetalert2';


const MakeChatbot = () => {
  const [file, setFile] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [chatbotType, setChatbotType] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait while we upload your files',
      icon: 'info',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    const formData = new FormData();
    formData.append('files', file);
    formData.append('business_name', businessName);
    formData.append('agent_name', chatbotType); // Make sure this matches what your backend expects
    formData.append('description', businessDescription);
  
    try {
      const response = await fetch('https://rocketbusiness.azurewebsites.net/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        Swal.fire('Success!', 'Your chatbot has been created.', 'success');
        
        // Retrieve existing chatbots from local storage or initialize an empty array
        const existingChatbots = JSON.parse(localStorage.getItem('chatbots')) || [];
  
        // Create a new chatbot object with the received data
        const newChatbot = {
          unique_id: result.unique_id,
          businessName: businessName,
          chatbotType: chatbotType,
          businessDescription: businessDescription,
          // You can add more details here if needed
        };
  
        // Add the new chatbot to the existing array
        existingChatbots.push(newChatbot);
  
        // Store the updated array back to local storage
        localStorage.setItem('chatbots', JSON.stringify(existingChatbots));
  
    
      } else {
        throw new Error('An error occurred while uploading the documents.');
      }
    } catch (error) {
      Swal.fire('Error!', error.message, 'error');
    }
  };
  
  return (
    <>
  <Header />
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Create Your Chatbot</h2>

        <div className="mb-4">
          <label htmlFor="fileUpload" className="block text-gray-700 text-sm font-bold mb-2">
            Upload File (TXT or PDF)
          </label>
          <input
            id="fileUpload"
            type="file"
            accept=".txt, .pdf"
            onChange={handleFileChange}
            className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">
            Business Name
          </label>
          <input
            id="businessName"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chatbotType" className="block text-gray-700 text-sm font-bold mb-2">
            Chatbot Type
          </label>
          <select
  id="chatbotType"
  value={chatbotType}
  onChange={(e) => setChatbotType(e.target.value)}
  className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
>
  <option value="">Select a type</option>
  <option value="customerQ&A">Customer Q&A</option>
  <option value="salesAgent">Sales Agent</option>
  <option value="customerInterview">Customer Interview</option>
  <option value="employeeQ&A">Employee Q&A</option>
</select>

        </div>

        <div className="mb-6">
          <label htmlFor="businessDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Business Description
          </label>
          <textarea
            id="businessDescription"
            value={businessDescription}
            onChange={(e) => setBusinessDescription(e.target.value)}
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Chatbot
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default MakeChatbot;
