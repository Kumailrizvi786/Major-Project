import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  TextField,
  TextArea,
} from '@radix-ui/themes';
import { MdOutlineSync } from "react-icons/md";
import { MdImportExport } from "react-icons/md";
import { IoHomeOutline, IoClipboard, IoDocumentTextOutline, IoPlay } from 'react-icons/io5';
import Breadcrumbs from '../../components/Breadcrumb';
import { FaFileImport, FaPaste } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function TextImportAndSyncPage() {
  const [importedText, setImportedText] = useState('');
  const [syncEnabled, setSyncEnabled] = useState(false);
  const [syncText, setSyncText] = useState('');
  const navigate = useNavigate();

  // Function to handle text import from clipboard
  const handleTextImportFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setImportedText(clipboardText);
    } catch (error) {
      console.error('Error reading from clipboard:', error);
    }
  };

  // Function to handle synchronization toggle
  const handleSyncToggle = () => {
    setSyncEnabled(!syncEnabled);
  };

  // Function to handle synchronization text change
  const handleSyncTextChange = (event) => {
    setSyncText(event.target.value);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImportedText(event.target.result);
    };
    reader.readAsText(file);
  };


  // Function to fetch content from URL and update state
 // Function to fetch content from URL and update state
const importContentFromUrl = async (url) => {
  toast.success('Fetching content from URL...');
  try {
    const response = await fetch(url);
    if (response.ok) {
      const htmlContent = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const textContent = getTextFromElement(doc.body); // Extract text content from HTML body
      toast.success('Content fetched successfully!');
      setImportedText(textContent);
    } else {
      console.error('Failed to fetch content:', response.status);
      toast.error('Failed to fetch content. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching content:', error);
    toast.error('Failed to fetch content. Please try again.');
  }
};

// Function to extract text content from HTML element
const getTextFromElement = (element) => {
  let textContent = '';
  if (element.nodeType === Node.TEXT_NODE) {
    textContent += element.textContent.trim() + ' ';
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    const tagName = element.tagName.toLowerCase();
    if (tagName === 'script' || tagName === 'style' || tagName === 'meta') {
      return ''; // Exclude script, style, and meta elements
    }
    for (const child of element.childNodes) {
      textContent += getTextFromElement(child);
    }
  }
  return textContent;
};



  // Function to sync text to server
  const syncTextToServer = () => {
    // Implement synchronization logic here if needed
    console.log('Syncing text to server:', syncText);
  };

  // Function to start reading
  const startReading = () => {
    // Implement reading functionality
    console.log('Start reading:', importedText);
    const generatedContent = importedText;
    navigate('/start-reading', { state: { generatedContent }});
  };

  // Function to clear the text area content
  const clearTextArea = () => {
    setImportedText('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Text Import and Sync', href: '/text-import-sync' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Text Import and Synchronization
      </Heading>
      <Card className="p-6 mb-8">
        <Flex justify="between" gap="4">
          <Box flex="1">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Import Text <MdImportExport className='inline' />
            </Heading>
            <Flex gap="4">
              <Button onClick={handleTextImportFromClipboard} variant="ghost" icon={<IoClipboard />}>
                Import from Clipboard <FaPaste />
              </Button>
              <label htmlFor="file-input">
                <input id="file-input" type="file" accept=".txt" onChange={handleFileInputChange} hidden />
                <Button as="span" variant="ghost" icon={<IoDocumentTextOutline />}>
                  Import from File <FaFileImport />
                </Button>
              </label>
            </Flex>
          </Box>
          <Box flex="1">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Sync Content From External Website <MdOutlineSync className='inline' />
            </Heading>
            <Button
              onClick={handleSyncToggle}
              variant={syncEnabled ? 'green' : 'red'}
              icon={syncEnabled ? <IoClipboard /> : <IoDocumentTextOutline />}
            >
              {syncEnabled ? 'Sync Enabled' : 'Enable Sync'}
            </Button>
            {syncEnabled && (
              <>
                <TextField.Root
                  className="mt-4 w-full"
                  value={syncText}
                  onChange={handleSyncTextChange}
                  placeholder="Enter URL to sync"
                />
                <Button onClick={() => importContentFromUrl(syncText)} className="mt-4" icon={<IoClipboard />}>
                  Sync Text
                </Button>
              </>
            )}
          </Box>
        </Flex>
        <TextArea
          className="mt-4 w-full"
          value={importedText}
          onChange={(event) => setImportedText(event.target.value)}
          placeholder="Imported text will appear here"
          rows={8}
        />
        <Button onClick={clearTextArea} className="mt-4" variant="red">Clear Text</Button>
      </Card>
      <Button onClick={startReading} icon={<IoPlay />} className="w-full mt-4" variant="blue">
        Start Reading
      </Button>
    </div>
  );
}

export default TextImportAndSyncPage;
