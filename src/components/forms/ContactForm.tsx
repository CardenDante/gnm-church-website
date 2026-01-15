'use client';

import { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

type SubmitStatus = 'success' | 'error' | null;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      //  submission logic placeholder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // clear status message 
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <label className="text-gray-700 font-medium flex items-center gap-2">
          <User className="w-4 h-4" />
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0477BF] focus:border-transparent outline-none transition"
          placeholder="John Doe"
        />
      </div>
      
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-gray-700 font-medium flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0477BF] focus:border-transparent outline-none transition"
          placeholder="john@example.com"
        />
      </div>
      
      {/* Subject Field */}
      <div className="space-y-2">
        <label className="text-gray-700 font-medium flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0477BF] focus:border-transparent outline-none transition"
          placeholder="How can we help you?"
        />
      </div>
      
      {/* Message Field */}
      <div className="space-y-2">
        <label className="text-gray-700 font-medium flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0477BF] focus:border-transparent outline-none transition resize-none"
          placeholder="Type your message here..."
        ></textarea>
      </div>
      
      {/* Submit Button  */}
      <div className="space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0477BF] to-[#0496C7] text-white font-semibold py-3.5 px-6 rounded-lg hover:from-[#0368A3] hover:to-[#0477BF] transition-all duration-300 transform  shadow disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
        
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm font-medium text-center">
              Message sent successfully. We'll get back to you soon.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium text-center">
              Something went wrong. Please try again or contact us directly.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

