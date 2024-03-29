import React from 'react'
import { toast } from 'react-hot-toast';
import { IoChatbubblesOutline } from 'react-icons/io5';

function Chatbot() {
    const handleOpenChatbot = () => {
        // Implement functionality to open chatbot or display tips
        toast.success('Opening chatbot...');
      };
  return (
    <div>
         {/* Floating button for chatbot or tips */}
      <div className="fixed bottom-8 right-8 z-10">
        <button
          className="bg-[#3859C7] text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center"
          onClick={handleOpenChatbot}
        >
          <IoChatbubblesOutline className="mr-2 text-lg" />
          Tips with chatbot
        </button>
      </div>
      
    </div>
  )
}

export default Chatbot
