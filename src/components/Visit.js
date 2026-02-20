import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

const projectOptions = [
  { label: "🏡 Ved Puram Phase-2", value: "Ved Puram Phase-2" },
  { label: "🌇 Dwarika Residency", value: "Dwarika Residency" },
  { label: "🏙️ Adinath Vinayak City", value: "Adinath Vinayak City" },
  { label: "📚 Takshshila", value: "Takshshila" },
  { label: "🌆 Adinath's Vaishali City", value: "Adinath's Vaishali City" },
  { label: "🌄 Adinath's Shorya City", value: "Adinath's Shorya City" }
];

function Visit() {
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
        throw new Error('Network error');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="visit-form-container py-5 px-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 className='text-center text-black mb-3'>🏠 Book a Site Visit</h2>
      <p className='text-center text-muted mb-4'>Choose your dream project and we’ll arrange a guided tour just for you.</p>

      {submitted ? (
        <p className="success text-center text-success">✅ Thank you! We'll contact you soon to schedule your visit.</p>
      ) : (
        <form
          ref={formRef}
          className={`form card p-4 shadow ${formInView ? 'animate' : ''}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="👤 Your Full Name"
              {...register("name", { required: 'Name is required' })}
            />
            {errors.name && <p className="text-danger small">{errors.name.message}</p>}
          </div>

          <div className="form-group mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="📧 Email Address"
              {...register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email'
                }
              })}
            />
            {errors.email && <p className="text-danger small">{errors.email.message}</p>}
          </div>

          <div className="form-group mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="📞 Contact Number"
              {...register("contact", { required: 'Contact number is required' })}
            />
            {errors.contact && <p className="text-danger small">{errors.contact.message}</p>}
          </div>

          <div className="form-group mb-3">
            <select
              className="form-control"
              defaultValue=""
              {...register("project", { required: 'Please select a project' })}
            >
              <option value="" disabled>🏘️ Select Project or Colony</option>
              {projectOptions.map((project, index) => (
                <option key={index} value={project.value}>{project.label}</option>
              ))}
            </select>
            {errors.project && <p className="text-danger small">{errors.project.message}</p>}
          </div>

          <div className="form-group mb-4">
            <textarea
              className="form-control"
              placeholder="📝 Preferred date, time or any message..."
              {...register("message", { required: 'Message is required' })}
            />
            {errors.message && <p className="text-danger small">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Booking...' : '📅 Book My Visit'}
          </button>
        </form>
      )}
    </div>
  );
}

export default Visit;
