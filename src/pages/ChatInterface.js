import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ChatInterface = () => {
  const { unique_doc_id } = useParams(); // This pulls the ID from the URL
  const [userQuestion, setUserQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [businessName, setBusinessName] = useState('');

  const handleInputChange = (e) => {
    setUserQuestion(e.target.value);
  };

  useEffect(() => {
    const fetchBusinessName = async () => {
      try {
        const response = await fetch(`https://rocketbusiness.azurewebsites.net/business/${unique_doc_id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBusinessName(data.business_name);
      } catch (error) {
        console.error("Failed to fetch business name", error);
      }
    };

    fetchBusinessName();
  }, [unique_doc_id]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    // Add user's question to chat history
    const updatedChatHistory = [...chatHistory, { sender: 'user', text: userQuestion }];
    setChatHistory(updatedChatHistory);

    try {
      const response = await fetch(`https://rocketbusiness.azurewebsites.net/chat/${unique_doc_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_question: userQuestion }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Add chatbot's response to chat history
      setChatHistory(prev => [...prev, { sender: 'bot', text: data.response }]);
    } catch (error) {
      console.error("Could not fetch the chatbot's response", error);
    }

    // Clear input after sending
    setUserQuestion('');
  };

  return (
    <div className="container mx-auto p-4">
        
        {businessName && (
        <h2 className="text-center text-2xl font-semibold mb-4">
          {businessName}
        </h2>
      )}
      
      <div className="border p-4 rounded-lg">
        <div className="overflow-auto h-96 mb-4 p-4 bg-white rounded">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`my-2 p-2 rounded ${chat.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
              <span>{chat.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={userQuestion}
            onChange={handleInputChange}
            placeholder="Type your question..."
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
