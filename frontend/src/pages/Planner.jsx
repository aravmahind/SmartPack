import React, { useState } from 'react';

const Planner = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { text: input, type: 'user' };
            const aiResponse = { text: `AI Response to: ${input}`, type: 'ai' };

            setMessages((prevMessages) => [...prevMessages, userMessage, aiResponse]);
            setInput('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <div className="h-80 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`mb-2 p-2 rounded-lg text-sm ${
                                message.type === 'user' ? 'bg-blue-100 text-blue-900 self-end' : 'bg-gray-200 text-gray-900 self-start'
                            }`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex items-center space-x-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your prompt..."
                        className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Planner;
