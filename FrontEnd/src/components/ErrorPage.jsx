import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops Bro! 404 Error</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Page Not Found, Click here to navigate <Link href="/" className='underline'>home</Link></h2>
      <p className="text-lg text-gray-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p className="text-lg text-gray-600 mt-2">Please check the URL you entered for any mistakes and try again.</p>
    </div>
  );
}

export default ErrorPage;
