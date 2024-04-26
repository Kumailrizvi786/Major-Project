import React, { useState, useRef } from 'react';
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
  const fileInputRef = useRef(null); // Reference to file input element

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

  // Function to handle file input change
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return; // Return if no file selected

    const fileType = file.type;
    const reader = new FileReader();

    reader.onload = async (event) => {
      let fileContent = '';
      if (fileType === 'text/plain') {
         toast.success('Text file imported successfully');
        fileContent = event.target.result;
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // const docxFile = await readDocx(event.target.result);
        // fileContent = docxFile.toString();
        console.log('Docx file reading not implemented yet');
        toast.error('Docx file reading not implemented yet');
      } else if (fileType === 'application/pdf') {
        // const pdfFile = await readPDF(event.target.result);
        toast.error('PDF file reading not implemented yet');
        // fileContent = pdfFile.text;
        console.log('PDF file reading not implemented yet');
      }
      setImportedText(fileContent);
    };

    // Use readAsText to read text files
    reader.readAsText(file);
};


  // Function to open file picker dialog
  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  // Function to fetch content from URL and update state
  const importContentFromUrl = async (url) => {
    toast.success('Fetching content from URL...');
    try {
      // Fetch content from URL
      // Handle different file formats and setImportedText accordingly
    } catch (error) {
      console.error('Error fetching content:', error);
      toast.error('Failed to fetch content. Please try again.');
    }
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
              <Button onClick={openFilePicker} variant="ghost" icon={<IoDocumentTextOutline />}>
                Import from File <FaFileImport />
              </Button>
              <input ref={fileInputRef} type="file" accept=".txt,.docx,.pdf" onChange={handleFileInputChange} style={{ display: 'none' }} />
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
