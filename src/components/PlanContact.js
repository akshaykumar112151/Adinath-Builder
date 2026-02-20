import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';


function PlanContact() {
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
      <div className="contact-info">
        
        <h3 className='text-start ms-2 text-black'>Careers at Adinath Builder <i className="fa fa-comments" aria-hidden="true"></i></h3>
        
        <p className='text-start ms-2'>Build Your Future With Us</p>
        <h5 className='text-start ms-2'>At Adinath Builders, we don’t just construct buildings — we build dreams, careers, and legacies. With a legacy of excellence in construction and real estate development, we are always on the lookout for passionate, driven, and skilled professionals to join our team.</h5>
        <h5 className='text-start ms-2'>Whether you're an experienced expert or a budding talent, we offer a dynamic work environment, growth opportunities, and the chance to work on iconic projects that shape skylines and communities.</h5><br />


        <div className="social-icons ms-2">
        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

<a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram ms-2"></i></a>

<a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
<a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
<a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube ms-2"></i></a>
        </div>
      </div>
      <div className="contact-form"> Please Fill The Details  <br /><br />
        {submitted ? (
          <p className="success">Thank you for your message. We will get back to you soon.</p>
        ) : (
          <form ref={formRef} className={`form ${formInView ? 'animate' : ''}`} onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" placeholder="Your Full Name" {...register("name", { required: 'Name is required' })} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
        
          <div className="form-group">
            <input type="email" placeholder="Email Address" {...register("email", {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' }
            })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        
          <div className="form-group">
            <input type="text" placeholder="Contact Number" {...register("contact", { required: 'Contact number is required' })} />
            {errors.contact && <p className="error">{errors.contact.message}</p>}
          </div>
        
          <div className="form-group">
            <input type="text" placeholder="Position You Are Applying For" {...register("position", { required: 'Position is required' })} />
            {errors.position && <p className="error">{errors.position.message}</p>}
          </div>
        
          <div className="form-group">
            <input type="text" placeholder="Years of Experience" {...register("experience", { required: 'Experience is required' })} />
            {errors.experience && <p className="error">{errors.experience.message}</p>}
          </div>
        
          {/* <div className="form-group">
            <input type="file" accept=".pdf,.doc,.docx" {...register("resume")} />
          </div> */}
        
          <div className="form-group">
            <textarea placeholder="Tell us briefly why you're a good fit..." {...register("message", { required: 'Message is required' })}></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>
        
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? <span className="spinner"></span> : 'SUBMIT APPLICATION'}
          </button>
        </form>
        
        )}
      </div>
    </div>
  );
}

export default PlanContact;
