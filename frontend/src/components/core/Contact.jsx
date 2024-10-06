import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent. Thank you!');
  };

  return (
    <div className="bg-gradient-to-t from-customBeige to-customDarkBlue h-screen flex items-center justify-center relative">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-lg mr-8 z-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-600">Your Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full mb-3 p-2 border border-gray-300 rounded" 
            placeholder="Your Name" 
            required 
          />

          <label className="block mb-2 text-gray-600">Your Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full mb-3 p-2 border border-gray-300 rounded" 
            placeholder="Your Email" 
            required 
          />

          <label className="block mb-2 text-gray-600">Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className="w-full mb-3 p-2 border border-gray-300 rounded" 
            placeholder="Subject" 
            required 
          />

          <label className="block mb-2 text-gray-600">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full mb-3 p-2 border border-gray-300 rounded" 
            placeholder="Your Message" 
            required 
          ></textarea>

          <button type="submit" className="w-full py-2 px-4 bg-customDarkBlue text-white rounded hover:bg-customBlue">
            Send Message
          </button>
        </form>
      </div>


      <div className="w-1/3 h-full flex flex-col justify-center p-10 text-white">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p>Location: 27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201015</p>
        <p>Email:tpo@akgec.ac.in</p>
        <p>Phone: 8744052891-93 7290034978, 2466066</p>
      </div>
    </div>
  );
};

export default Contact;
