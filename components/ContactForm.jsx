"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function ContactForm() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  const httpMethods = {
    POST: 'POST',
    GET: 'GET',
    // ... other methods
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      let response = await fetch('/api/users', {
        cache: "no-store",
        method: httpMethods.POST,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      response = await response.json()
      if (response.success) {
        alert(response.message)
        setResponseMessage(responseMessage)
        router.push("/contact/submission")
      }
      else {
        alert(response.message)
      }

    } catch (error) {
      alert('Could not save User! ')
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="text-center">
        <h2 className="heading-secondary md:text-6xl text-4xl -mt-[3rem] uppercase inline-block text-transparent tracking-wide mb-[6rem]">
          Contact Us
        </h2>
      </div>
      <div className="form__group">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="form__input"
          minLength={3}
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name" className="form__label">
          Full Name
        </label>
      </div>

      <div className="form__group">
        <input
          minLength={10}
          maxLength={10}
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone number"
          className="form__input"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="phone" className="form__label">
          Phone number
        </label>
      </div>

      <div className="form__group">
        <textarea
          name="message"
          id="message"
          className="form__input"
          placeholder="Your Message or Order for us..."
          rows={8}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="message" className="form__label">
          Your Message or Order
        </label>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="block mx-auto text-3xl border-2 rounded-xl border-black px-5 py-3 hover:border-white hover:bg-amber-900 hover:text-white"
        >
          Submit
        </button>
      </div>
      {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
    </form>
  );
}
