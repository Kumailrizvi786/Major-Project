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
import { IoHomeOutline, IoClipboard, IoDocumentTextOutline, IoPlay, IoSyncCircleOutline } from 'react-icons/io5';
import Breadcrumbs from '../../components/Breadcrumb';
import { FaFileImport, FaPaste } from 'react-icons/fa';

function TextImportAndSyncPage() {
  const [importedText, setImportedText] = useState('');
  const [syncEnabled, setSyncEnabled] = useState(false);
  const [syncText, setSyncText] = useState('');

  // Function to handle text import from clipboard
  const handleTextImportFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setImportedText(clipboardText);
    } catch (error) {
      console.error('Error reading from clipboard:', error);
    }
  };

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImportedText(e.target.result);
    };
    reader.readAsText(file);
  };

  // Function to handle synchronization toggle
  const handleSyncToggle = () => {
    setSyncEnabled(!syncEnabled);
  };

  // Function to handle synchronization text change
  const handleSyncTextChange = (event) => {
    setSyncText(event.target.value);
  };

  // Function to simulate synchronization
  const syncTextToServer = () => {
    // Simulated synchronization to server
    // You can implement actual synchronization logic here
    console.log('Syncing text to server:', syncText);
  };

  // Function to start reading
  const startReading = () => {
    // Implement reading functionality
    console.log('Start reading:', importedText);
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
        <Flex justify="between" gap="4" >
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
              Synchronization <MdOutlineSync  className='inline' />
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
                  placeholder="Enter text to sync"
                />
                <Button onClick={syncTextToServer} className="mt-4" icon={<IoClipboard />}>
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
      </Card>
      <Button onClick={startReading} icon={<IoPlay />} className="w-full" variant="blue">
        Start Reading
      </Button>
    </div>
  );
}

export default TextImportAndSyncPage;
