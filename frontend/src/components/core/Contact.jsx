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
      <div className="flex items-center w-full justify-between relative">
        <div className="relative  p-6 w-[40%] mr-8 z-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <label className='mb-2'>
              <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>Full Name</p>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                className='w-full rounded-[0.5rem] p-[12px] border-none' 
                placeholder="abcd" 
                required 
              />
            </label>

            <label className='mb-2'>
              <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>Email Address</p>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                className='w-full rounded-[0.5rem] p-[12px] border-none' 
                placeholder="abcd@efg.com" 
                required 
              />
            </label>

            <label className='mb-2'>
              <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>Subject</p>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                className='w-full rounded-[0.5rem] p-[12px] border-none' 
                placeholder="Placement enquiry" 
                required 
              />
            </label>

            <label className='mb-2'>
              <p className='mb-1 text-[0.875rem] leading-[1.375rem] '>Message</p>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                className='w-full rounded-[0.5rem] p-[12px] border-none' 
                placeholder="Enter your message..." 
                required 
              ></textarea>
            </label>

            <button type="submit" className="w-full py-2 px-4 bg-customDarkBlue text-white rounded hover:scale-95 transition-all duration-200">
              Send Message
            </button>
          </form>
        </div>


        <div className="bg-[#EAE4DD] w-[50%] flex flex-col gap-1 justify-center  p-10 ">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Contact Information</h2>
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
