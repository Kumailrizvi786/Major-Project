import React, { useEffect, useState } from 'react';
import webgazer from 'webgazer';
import { Button, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function EyeTrackingComponent() {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const initWebGazer = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true);
        webgazer.setRegression('ridge');
        webgazer.setTracker('clmtrackr');
        webgazer.showPredictionPoints(true);
        webgazer.begin();
      } catch (err) {
        console.error('Error initializing WebGazer:', err);
      }
    };

    if (!hasPermission) {
      initWebGazer();
    }

    return () => {
      webgazer.pause();
    };
  }, [hasPermission]);

  const handleStartTracking = () => {
    if (hasPermission) {
      webgazer.resume();
      toast.success("Eye tracking started");
    }
  };

  const handleStopTracking = () => {
    webgazer.pause();
    toast.success("Eye tracking paused");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex">
      <div className="flex-1">
        {/* Breadcrumbs */}
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-2"><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link to="/eye-tracking" className="text-blue-500 hover:underline">Eye Tracking</Link></li>
          </ul>
        </nav>

        {/* Heading */}
        <Heading size={1} className="text-3xl font-bold mb-6">Eye Tracking Component</Heading>

        {/* Permission message (optional) */}
        {!hasPermission && <p className="mb-6">Requesting webcam permission...</p>}

        {/* Start and Stop Buttons (disabled if no permission) */}
        <div className="flex space-x-4">
          <Button onClick={handleStartTracking} disabled={!hasPermission} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Start Tracking</Button>
          <Button onClick={handleStopTracking} disabled={!hasPermission} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Stop Tracking</Button>
        </div>
      </div>
      {/* Camera window */}
      <div className="flex-1 flex justify-end">
        <video id="webgazerVideoFeed" autoPlay style={{ width: '300px', height: 'auto', border: '2px solid #000' }}></video>
      </div>
    </div>
  );
}

export default EyeTrackingComponent;
