import React, { useState } from 'react';

export default function ContactMe() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-backend-rkev.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('The email is sent successfully'); // Popup message
        setFormData({ // Clear the form
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        console.log('Failed to send email');
        // Handle error - show error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error - show error message to the user
    }
  };
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title" style={{paddingBottom:"5px"}}>Get In Touch</p>
        <h1 className="skills-section--heading" style={{paddingBottom:"0px"}}>Contact Me</h1>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
              onChange={handleChange}
              value={formData.firstName}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              onChange={handleChange}
              value={formData.phoneNumber}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            onChange={handleChange}
            value={formData.message}
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      <hr className="divider"/>
    </section>
  );
}

import React, { useState } from 'react';

export default function ContactMe() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-backend-rkev.onrender.com/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('The email is sent successfully'); // Popup message
        setFormData({ // Clear the form
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        console.log('Failed to send email');
        // Handle error - show error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error - show error message to the user
    }
  };
  
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title" style={{paddingBottom:"5px"}}>Get In Touch</p>
        <h1 className="skills-section--heading" style={{paddingBottom:"0px"}}>Contact Me</h1>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
              onChange={handleChange}
              value={formData.firstName}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              onChange={handleChange}
              value={formData.phoneNumber}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            onChange={handleChange}
            value={formData.message}
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      <hr className="divider"/>
    </section>
  );
}
