import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const Test = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual API key
  const YOUR_GEMINI_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  // Check Node.js version (optional, but recommended)
  // if (process.version.slice(1).split('.')[0] < 18) {
  //   console.error('Error: Node.js version must be >= 18. Please upgrade.');
  //   return null; // Handle version incompatibility (optional)
  // }

  // Installation (optional, can be done outside React component)
  // npm install @google/generative-ai

  const handleGenerateResponse = async () => {
    setLoading(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(YOUR_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

      const generationConfig = {
        temperature: 0.9, // Controls randomness (0 = deterministic, 1 = creative)
        topK: 1, // Controls beam search (higher = less diverse)
        topP: 1, // Controls nucleus sampling (higher = less risky)
        maxOutputTokens: 2048, // Maximum output length
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          { role: 'user', parts: [{ text: 'hi' }] },
          { role: 'model', parts: [{ text: 'Hello there! How can I assist you today?' }] },
          { role: 'user', parts: [{ text: 'hello' }] },
          { role: 'model', parts: [{ text: 'Hello! How are you doing today? Is there anything I can help you with?' }] },
        ],
      });

      const result = await chat.sendMessage(prompt); // Use user prompt here
      const response = result.response;

      setGeneratedContent(response.text());
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      <button onClick={handleGenerateResponse} disabled={loading || prompt.trim() === ''}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {generatedContent && (
        <div>
          <strong>Generated Response:</strong>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
