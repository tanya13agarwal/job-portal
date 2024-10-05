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
    <div className="contact-section bg-customBeige p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-customDarkBlue mb-4">Contact Us</h2>
      <p className="text-lg text-customBlue mb-6">Let's get in touch!</p>
      <div className="text-customDarkBlue mb-6">
        <p><strong>Location:</strong> 27th Km Milestone, Delhi-Meerut Expressway, Ghaziabad - 201015</p>
        <p><strong>Email:</strong> tpo@akgec.ac.in</p>
        <p><strong>Call:</strong> 8744052891-93, 7290034978, 2466066</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full p-3 border border-customBlue rounded-md focus:outline-none focus:ring-2 focus:ring-customDarkBlue"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="w-full p-3 border border-customBlue rounded-md focus:outline-none focus:ring-2 focus:ring-customDarkBlue"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={handleChange}
          required
          className="w-full p-3 border border-customBlue rounded-md focus:outline-none focus:ring-2 focus:ring-customDarkBlue"
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleChange}
          required
          className="w-full p-3 border border-customBlue rounded-md focus:outline-none focus:ring-2 focus:ring-customDarkBlue"
        />
        <button
          type="submit"
          className="w-full bg-customBlue text-white p-3 rounded-md hover:bg-customDarkBlue transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
