// CustomerAnalysis.js
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CustomerAnalysis = () => {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);


  const [pdfFile, setPdfFile] = useState(null); // New state for PDF file

const handlePdfFileChange = (event) => {
  setPdfFile(event.target.files[0]);
};

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Processing...',
      text: 'Please wait while we analyze the data',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    // Form Data to send to the server
    const formData = new FormData();
    formData.append('file', file);
    formData.append('pdfFile', pdfFile);
    formData.append('prompt', prompt);

    try {
      const response = await fetch('https://rocketbusiness.azurewebsites.net/customeranalysis', {
        method: 'POST',
        body: formData,
      });

      Swal.close(); // Close the loading Swal

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        setAnalysisResult(result.analysisResult); // Update state with the results of the analysis
        Swal.fire('Success!', 'Analysis complete!', 'success');
      } else {
        Swal.fire('Oops...', 'Failed to perform analysis. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error', 'An error occurred while processing your request.', 'error');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Customer Data Analysis</h1>
        
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file-upload">
              Upload CSV File
            </label>
            <input id="file-upload" type="file" accept=".csv" onChange={handleFileChange} className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
              Prompt for Analysis
            </label>
            <textarea id="prompt" rows="4" onChange={handlePromptChange} placeholder="Enter prompt for analysis..." className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Analyze Data
            </button>
          </div>

          <div className="mb-4">
  <label htmlFor="pdf-upload" className="block text-gray-700 text-sm font-bold mb-2">
    Upload PDF File
  </label>
  <input 
    id="pdf-upload" 
    type="file" 
    accept=".pdf" 
    onChange={handlePdfFileChange}
    className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  />
</div>
        </form>

        {/* Results section */}
        {analysisResult && (
          <div className="rounded border p-4">
            <h2 className="text-xl font-bold mb-2">Analysis Result:</h2>
            <p className="text-gray-700">{analysisResult}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CustomerAnalysis;
