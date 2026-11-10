import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Globe, Heart, Shield, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Feedback');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold text-[#ff2e93] px-3.5 py-1.5 rounded-full bg-[#ff2e93]/10 border border-[#ff2e93]/30 inline-block mb-4">
          WORLDWIDE SUPPORT
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
          Contact KLONE Team
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Need help cloning a complex layout, have feature requests, or want to report an extraction edge-case? Our worldwide developer community is here 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        {/* Support Channels */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-[#0c0c18] border border-[#202036]">
            <div className="w-10 h-10 rounded-xl bg-[#ff2e93]/15 text-[#ff2e93] border border-[#ff2e93]/30 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Direct Email</h3>
            <p className="text-xs text-slate-400 mb-3">
              Direct response within 2 hours for developer questions.
            </p>
            <a
              href="mailto:support@kloner.app"
              className="text-xs font-mono text-[#00ff88] hover:underline"
            >
              support@kloner.app
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-[#0c0c18] border border-[#202036]">
            <div className="w-10 h-10 rounded-xl bg-[#ffe600]/15 text-[#ffe600] border border-[#ffe600]/30 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Global Community</h3>
            <p className="text-xs text-slate-400 mb-3">
              Join 250,000+ designers sharing cloned templates & prompt recipes.
            </p>
            <span className="text-xs font-mono text-[#ffe600]">
              discord.gg/kloner-community
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-[#0c0c18] border border-[#202036]">
            <div className="w-10 h-10 rounded-xl bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Legal & DMCA</h3>
            <p className="text-xs text-slate-400 mb-3">
              Inquiries regarding fair use, copyright, and DMCA takedowns.
            </p>
            <a
              href="mailto:legal@kloner.app"
              className="text-xs font-mono text-slate-300 hover:underline"
            >
              legal@kloner.app
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 p-8 rounded-3xl bg-[#0c0c18] border border-[#202036]">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out! A ticket has been created and our team will get back to <span className="text-[#ffe600] font-mono">{email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#18182c] border border-[#2e2e48] text-xs font-bold text-slate-200 hover:text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Send an Instant Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below and we will get back to you promptly.
              </p>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full bg-[#121222] border border-[#242440] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#ff2e93]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#121222] border border-[#242440] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#ff2e93]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">INQUIRY TYPE</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#121222] border border-[#242440] rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#ffe600]"
                >
                  <option value="General Feedback">General Feedback & Praise</option>
                  <option value="URL Issue">Assistance with a specific URL</option>
                  <option value="Feature Request">Feature Request / Suggestion</option>
                  <option value="Partnership">Hosting / Ecosystem Partnership</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist you with cloning or customizing your website?"
                  className="w-full bg-[#121222] border border-[#242440] rounded-xl p-4 text-xs text-white outline-none focus:border-[#00ff88]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff2e93] via-[#ff007f] to-[#ffe600] text-black font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
