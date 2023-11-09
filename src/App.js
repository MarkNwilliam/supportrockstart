import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MakeChatbot  from './pages/MakeChatbot';
import MyChatbots from './pages/MyChatbots';
import ChatInterface from './pages/ChatInterface'; 
import CustomerAnalysis from './pages/CustomerAnalysis'
import Pricing from './pages/Pricing'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="makechatbot" element={<MakeChatbot />} />
      <Route path="mychatbots" element={<MyChatbots />} />
      <Route path="chat/:unique_doc_id" element={<ChatInterface />} /> 
      <Route path="customer-analysis" element={<CustomerAnalysis />} /> 
      <Route path="pricing" element={<Pricing />} /> 
      {/* Define more routes as needed */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
