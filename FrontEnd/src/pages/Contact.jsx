import React from 'react';
import { Box, Card, Text, Heading, Button } from '@radix-ui/themes';
import { IoHomeOutline } from 'react-icons/io5';
import Breadcrumb from '../components/Breadcrumb';

const ContactUs = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbs} icon={IoHomeOutline} />

      {/* Contact Form */}
      <Card className="p-8 mt-8">
        <Heading size="4" className="mb-6">Contact Us</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" placeholder='Enter your name' />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder='Enter your email'/>
          </div>
          {/* Message Textarea */}
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Your Message</label>
            <textarea id="message" placeholder='Describe your query/feedback here' name="message" rows="5" className="w-full px-3 py-2 border rounded-md"></textarea>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</Button>
        </Box>
      </Card>
    </div>
  );
};

export default ContactUs;
