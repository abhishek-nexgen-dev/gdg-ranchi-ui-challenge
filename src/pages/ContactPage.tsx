import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Mail, MapPin, Send, AlertCircle, CheckCircle, Info, RefreshCw } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'General Inquiry',
        message: ''
      });
      setErrors({});
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'General Inquiry',
      message: ''
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-gray-800 font-sans pb-12">
      {/* Header Banner */}
      <div className="bg-[#1e1b4b] text-white py-8 px-4 border-b-4 border-yellow-400 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-yellow-400 text-black px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider">
            COMMUNICATIONS &amp; FEEDBACK
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-serif text-yellow-300">
            Contact GDG Ranchi Organizers
          </h1>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-2xl mx-auto">
            Have a question, want to propose a technical talk, sponsor community refreshments, or host an event at your college campus? Send us a message!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Contact Information Cards */}
          <div className="space-y-4">
            <div className="bg-[#fefce8] p-4 border-3 border-yellow-800 shadow-[3px_3px_0px_#854d0e]">
              <h3 className="text-base font-bold text-yellow-900 font-serif border-b border-yellow-300 pb-1 mb-2">
                📍 Community Meetup Hub
              </h3>
              <div className="space-y-2 text-xs text-gray-700 font-sans">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>GDG Ranchi Chapter</strong>
                    <br />
                    Aryabhatta Auditorium / Tech Park
                    <br />
                    Ranchi, Jharkhand - 834001, India
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-yellow-200">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold">Email (Demo):</span>
                    <br />
                    <code className="text-xs font-mono bg-yellow-100 px-1">
                      contact@gdgranchi.example.com
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Meetup Schedule Card */}
            <div className="bg-[#eff6ff] p-4 border-2 border-blue-800 shadow-[3px_3px_0px_#1e40af]">
              <h3 className="text-sm font-bold text-blue-900 font-serif mb-1">
                📅 Meetup Timing
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Regular meetups occur on the <strong>2nd or 3rd Saturday</strong> of each month. Exact venues are confirmed 2 weeks in advance.
              </p>
            </div>

            {/* UI Makeover Alert Notice */}
            <div className="bg-[#fff1f2] border-2 border-red-500 p-3 text-xs text-red-900 shadow-xs">
              <div className="font-bold flex items-center gap-1 font-mono">
                <Info className="w-4 h-4 text-red-600" />
                <span>Challenge Starter Note:</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-red-800">
                This form validates user inputs on the client side. Submissions will display a demonstration confirmation banner without sending real emails.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Inconsistent, Outdated Elements */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 border-3 border-black shadow-[5px_5px_0px_#000]">
              <h2 className="text-xl font-black font-serif text-gray-900 mb-1 border-b-2 border-black pb-2">
                Send Us a Message (Official Dispatch Form)
              </h2>
              <p className="text-xs text-gray-600 mb-4 font-sans">
                Please fill in all required fields accurately. Our organizing team reviews inquiries during weekly syncs.
              </p>

              {/* Success Feedback Banner */}
              {submittedData && (
                <div className="mb-6 bg-green-50 border-3 border-green-700 p-4 text-xs md:text-sm text-green-900 shadow-[3px_3px_0px_#15803d]">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-bold text-sm">
                        Demo Submission Received Successfully!
                      </div>
                      <p className="text-green-800 text-xs leading-relaxed">
                        Thank you <strong>{submittedData.name}</strong> ({submittedData.email})! Your message regarding <em>"{submittedData.subject}"</em> ({submittedData.category}) was validated by the client form.
                      </p>
                      <div className="mt-2 text-[11px] bg-green-100/80 p-2 border border-green-300 font-mono">
                        [DEMO MODE NOTICE]: No actual email was sent across the network as this is a frontend demonstration project for the GDG Ranchi UI Makeover Challenge.
                      </div>
                      <button
                        onClick={handleReset}
                        className="mt-2 text-xs font-bold text-green-900 underline flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" /> Submit Another Demo Message
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Your Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Singh"
                    className={`w-full p-2 border-2 text-xs ${
                      errors.name ? 'border-red-600 bg-red-50' : 'border-black bg-yellow-50/40'
                    }`}
                  />
                  {errors.name && (
                    <div className="text-red-600 text-[11px] mt-1 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full p-2 border-2 text-xs ${
                      errors.email ? 'border-red-600 bg-red-50' : 'border-black bg-yellow-50/40'
                    }`}
                  />
                  {errors.email && (
                    <div className="text-red-600 text-[11px] mt-1 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </div>
                  )}
                </div>

                {/* Topic / Category */}
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Inquiry Topic / Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 border-2 border-black bg-white text-xs font-bold"
                  >
                    <option value="General Inquiry">General Community Inquiry</option>
                    <option value="Call for Speakers">Call for Speakers (Propose a Talk)</option>
                    <option value="Sponsorship & Venue">Sponsorship or Venue Partnership</option>
                    <option value="Volunteering">Volunteering with GDG Ranchi</option>
                    <option value="Campus Club Collaboration">Campus Club Collaboration</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Subject Line <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Interested in speaking on Flutter at the next meetup"
                    className={`w-full p-2 border-2 text-xs ${
                      errors.subject ? 'border-red-600 bg-red-50' : 'border-black bg-yellow-50/40'
                    }`}
                  />
                  {errors.subject && (
                    <div className="text-red-600 text-[11px] mt-1 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message Box */}
                <div>
                  <label className="block font-bold text-gray-800 uppercase font-mono mb-1">
                    Detailed Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your detailed questions, talk abstract, or comments here..."
                    className={`w-full p-2 border-2 text-xs ${
                      errors.message ? 'border-red-600 bg-red-50' : 'border-black bg-yellow-50/40'
                    }`}
                  />
                  {errors.message && (
                    <div className="text-red-600 text-[11px] mt-1 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-gray-300">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-black text-xs uppercase px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Validating...' : 'Submit Message Form'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs uppercase px-4 py-2.5 border-2 border-gray-500"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
