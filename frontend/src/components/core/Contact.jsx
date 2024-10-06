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
    console.log(formData)
    // alert('Your message has been sent. Thank you!');
  };

  return (
    <div id='contact' className="p-10">
      <div className="bg-gradient-to-t bg-white h-screen flex items-center justify-evenly relative">
        <div className="relative w-full max-w-sm p-6 bg-[#EAE4DD] rounded-lg shadow-lg mr-8 z-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-600">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full mb-3 p-2 border border-gray-300 rounded" 
              placeholder="abcd" 
              required 
            />

            <label className="block mb-2 text-gray-600">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full mb-3 p-2 border border-gray-300 rounded" 
              placeholder="abcd@efg.com" 
              required 
            />

            <label className="block mb-2 text-gray-600">Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className="w-full mb-3 p-2 border border-gray-300 rounded" 
              placeholder="Placement enquiry" 
              required 
            />

            <label className="block mb-2 text-gray-600">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full mb-3 p-2 border border-gray-300 rounded" 
              placeholder="Enter your message..." 
              required 
            ></textarea>

            <button type="submit" className="w-full py-2 px-4 bg-customDarkBlue text-white rounded hover:scale-105 transition-all duration-200">
              Send Message
            </button>
          </form>
        </div>


        <div className="w-1/3 bg-[#EAE4DD] flex flex-col gap-1 justify-center  p-10 ">
          <h2 className="text-2xl font-bold mb-4">Contact Information :-</h2>
          <div className='flex flex-col gap-1'>
            <div className='flex items-start gap-2 '>
              <p className='text-lg font-semibold '>Location:</p>
              <span className=''>27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201015</span>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-lg font-semibold'>Email:</p>
              <span>tpo@akgec.ac.in</span>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-lg font-semibold'>Phone:</p>
              <span>8744052891-93 7290034978, 2466066</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
