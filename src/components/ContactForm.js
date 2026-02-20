import React, { useState } from 'react';
import './ContactForm.css';
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
    <div className="contact-form-container py-5">
      <div className="contact-info"><br />
      
        <p className='text-start ms-2 text-black'>Talk With Us  <i className="fa fa-comments" aria-hidden="true"></i>        </p> 
        <h1 className='text-start ms-2'>
        From Vision to Reality – Let's Build Together!!</h1><br />
        <div className="social-icons ms-2">
          <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

          <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram ms-2"></i></a>

          <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube ms-2"></i></a>
          
          {/* <a href="https://www.google.com/search?kgmid=/g/11vp_f5w43&hl=en-IN&q=Dr.+Vaishali+Tandon&kgs=0b01d5c6f42a5fb0&shndl=30&shem=lrnole,ssic&source=sh/x/loc/osrp/m5/4#lrd=0x3974779af6cb7cef:0xe02e9fe2e36d2145,1,,,," aria-label="Google" target="_blank" rel="noopener noreferrer" ><i className="fab fa-google ms-2"></i></a> */} 

        </div>
      </div>
      <div className="contact-form">
        {submitted ? (
          <p className="success">Thank you for your message. We will get back to you soon.</p>
        ) : (
          <form ref={formRef} className={`form ${formInView ? 'animate' : ''}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input type="text" placeholder="Your name" {...register("name", { required: true })} />
              {errors.name && <p className="error">Name is required</p>}
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email address" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && <p className="error">Please enter a valid email address</p>}
            </div>
            <div className="form-group">
              <textarea placeholder="Message" {...register("message", { required: true })}></textarea>
              {errors.message && <p className="error">Message is required</p>}
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? <span className="spinner"></span> : 'SEND A MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
