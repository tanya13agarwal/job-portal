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
    console.log(formData);
  };

  return (
    <div id="contact" className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Form Section */}
        <div className="relative p-6 w-full md:w-1/2 z-10 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label>
              <p className="mb-2 text-sm font-medium text-gray-700">Full Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </label>

            <label>
              <p className="mb-2 text-sm font-medium text-gray-700">Email Address</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
                required
              />
            </label>

            <label>
              <p className="mb-2 text-sm font-medium text-gray-700">Subject</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Subject"
                required
              />
            </label>

            <label>
              <p className="mb-2 text-sm font-medium text-gray-700">Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-customDarkBlue text-white active:scale-95 rounded-lg hover:border hover:text-black hover:bg-white hover:border-customDarkBlue transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-[#EAE4DD] w-full md:w-1/2 flex flex-col gap-4 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Information</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <p className="font-semibold text-gray-700">Location:</p>
              <span className="text-gray-600">
                27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad - 201015
              </span>
            </div>
            <div className="flex items-start gap-2">
              <p className="font-semibold text-gray-700">Email:</p>
              <span className="text-gray-600">tpo@akgec.ac.in</span>
            </div>
            <div className="flex items-start gap-2">
              <p className="font-semibold text-gray-700">Phone:</p>
              <span className="text-gray-600">8744052891-93, 7290034978, 2466066</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
