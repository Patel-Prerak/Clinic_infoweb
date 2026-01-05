import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call (replace with actual backend endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the form data to your backend
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setStatus('success');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 border-2 border-slate-50 relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-3xl -mr-16 -mt-16 group-focus-within:bg-primary-100 transition-colors duration-500" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-black text-slate-700 mb-3 uppercase tracking-widest pl-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Dr. Rajesh Kumar"
            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-bold placeholder:text-slate-300 ${errors.name
              ? 'border-red-500 bg-red-50/30'
              : 'border-slate-100 bg-slate-50/50 focus:border-primary-500 focus:bg-white'
              } focus:outline-none focus:ring-4 focus:ring-primary-500/10`}
          />
          {errors.name && (
            <div className="flex items-center mt-3 text-red-600 font-bold text-xs pl-1">
              <AlertCircle size={14} className="mr-2" />
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-black text-slate-700 mb-3 uppercase tracking-widest pl-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="doctor@example.com"
            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-bold placeholder:text-slate-300 ${errors.email
              ? 'border-red-500 bg-red-50/30'
              : 'border-slate-100 bg-slate-50/50 focus:border-primary-500 focus:bg-white'
              } focus:outline-none focus:ring-4 focus:ring-primary-500/10`}
          />
          {errors.email && (
            <div className="flex items-center mt-3 text-red-600 font-bold text-xs pl-1">
              <AlertCircle size={14} className="mr-2" />
              {errors.email}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-black text-slate-700 mb-3 uppercase tracking-widest pl-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91-98765-43210"
            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-bold placeholder:text-slate-300 ${errors.phone
              ? 'border-red-500 bg-red-50/30'
              : 'border-slate-100 bg-slate-50/50 focus:border-primary-500 focus:bg-white'
              } focus:outline-none focus:ring-4 focus:ring-primary-500/10`}
          />
          {errors.phone && (
            <div className="flex items-center mt-3 text-red-600 font-bold text-xs pl-1">
              <AlertCircle size={14} className="mr-2" />
              {errors.phone}
            </div>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-black text-slate-700 mb-3 uppercase tracking-widest pl-1">
            Inquiry Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 font-bold appearance-none cursor-pointer ${errors.subject
              ? 'border-red-500 bg-red-50/30'
              : 'border-slate-100 bg-slate-50/50 focus:border-primary-500 focus:bg-white'
              } focus:outline-none focus:ring-4 focus:ring-primary-500/10`}
          >
            <option value="">Select Priority...</option>
            <option value="general">General Consultation</option>
            <option value="pricing">Pricing & Licensing</option>
            <option value="support">Deployment Support</option>
            <option value="partnership">Strategic Partnership</option>
          </select>
          {errors.subject && (
            <div className="flex items-center mt-3 text-red-600 font-bold text-xs pl-1">
              <AlertCircle size={14} className="mr-2" />
              {errors.subject}
            </div>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-black text-slate-700 mb-3 uppercase tracking-widest pl-1">
          Detailed Requirements
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your clinic volume and specific requirements..."
          rows={5}
          className={`w-full px-6 py-4 rounded-[2rem] border-2 transition-all duration-300 font-bold placeholder:text-slate-300 resize-none ${errors.message
            ? 'border-red-500 bg-red-50/30'
            : 'border-slate-100 bg-slate-50/50 focus:border-primary-500 focus:bg-white border-primary-500'
            } focus:outline-none focus:ring-4 focus:ring-primary-500/10`}
        />
        {errors.message && (
          <div className="flex items-center mt-3 text-red-600 font-bold text-xs pl-1">
            <AlertCircle size={14} className="mr-2" />
            {errors.message}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group/btn w-full bg-slate-900 hover:bg-primary-600 disabled:bg-slate-400 text-white font-black py-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl hover:shadow-primary-600/30 hover:-translate-y-1 active:scale-95"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <span className="uppercase tracking-widest">Processing...</span>
          </>
        ) : (
          <>
            <span className="uppercase tracking-widest text-lg">Send Message</span>
            <Send size={24} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      {/* Success/Error Notifications */}
      <div className="relative">
        {submitted && status === 'success' && (
          <div className="flex items-start gap-4 p-6 bg-green-50 border-2 border-green-100 rounded-3xl animate-in slide-in-from-top-6 duration-500">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="font-black text-green-900 text-lg">Message Transmission Confirmed!</p>
              <p className="text-green-800 font-medium mt-1">
                Our experts will analyze your requirements and reach out within 24 hours.
              </p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start gap-4 p-6 bg-red-50 border-2 border-red-100 rounded-3xl animate-in slide-in-from-top-6 duration-500">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="font-black text-red-900 text-lg">Transmission Interrupted</p>
              <p className="text-red-800 font-medium mt-1">
                A system error occurred. Please try again or call <span className="font-bold underline">6350462627</span> directly.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="flex items-center justify-center gap-4 pt-4 opacity-50">
        <div className="h-px bg-slate-200 grow" />
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
          Secured by Deploy-X Infrastructure
        </p>
        <div className="h-px bg-slate-200 grow" />
      </div>
    </form>
  );
}
