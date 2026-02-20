import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xeojgvqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-section">
        {submitted ? (
          <p className="success-message">Thank you for your message. We will get back to you soon.</p>
        ) : (
          <form ref={formRef} className={`contact-form ${formInView ? 'fade-in' : ''}`} onSubmit={handleSubmit(onSubmit)}> 
            <h6 className='text-start'>Book Your 🏡 HOME/PLOT</h6><br />
            <div className="input-group">
              <input type="text" placeholder="Your Name" {...register("name", { required: 'Name is required' })} />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" {...register("email", { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' } })} />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="input-group">
              <input type="tel" placeholder="Phone" {...register("contact", { required: 'Contact is required', pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit phone number' } })} />
              {errors.contact && <p className="error-message">{errors.contact.message}</p>}
            </div>
            <div className="input-group">
              <input type="text" placeholder="Address" {...register("address", { required: 'Address is required' })} />
              {errors.address && <p className="error-message">{errors.address.message}</p>}
            </div>
            <div className="input-group">
              <input type="text" placeholder="Pin Code" {...register("pincode", { required: 'Pin Code is required', pattern: { value: /^[0-9]{6}$/, message: 'Enter a valid 6-digit pin code' } })} />
              {errors.pincode && <p className="error-message">{errors.pincode.message}</p>}
            </div>
            <div className="input-group">
              <textarea placeholder="Message" {...register("message", { required: 'Message is required' })}></textarea>
              {errors.message && <p className="error-message">{errors.message.message}</p>}
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? <span className="loading-spinner"></span> : 'SEND A MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;