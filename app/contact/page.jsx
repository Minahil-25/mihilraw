'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Calendar,
  Send
} from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || 'website';
  const initialPackage = searchParams.get('package') || '';
  const initialProject = searchParams.get('project') || '';

  const [selectedService, setSelectedService] = useState('website');
  const [budget, setBudget] = useState('$1,500 – $3,000');
  const [timeline, setTimeline] = useState('2 – 4 Weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: initialProject ? `Interested in build similar to ${initialProject}` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      if (initialService.includes('auto')) setSelectedService('automation');
      else if (initialService.includes('app')) setSelectedService('webapp');
      else if (initialService.includes('vibe')) setSelectedService('vibe-code');
      else setSelectedService('website');
    }
  }, [initialService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    { id: 'website', label: 'High-Speed Website' },
    { id: 'automation', label: 'AI Business Automations' },
    { id: 'webapp', label: 'Custom Web App / MVP' },
    { id: 'vibe-code', label: 'Fix Vibe-Coded App / Site' },
    { id: 'full-package', label: 'Website + Automation Bundle' }
  ];

  const budgetTiers = [
    '< $1,500',
    '$1,500 – $3,000',
    '$3,000 – $5,000',
    '$5,000 – $10,000+'
  ];

  const timelines = [
    'Urgent (< 1 week)',
    '2 – 4 Weeks',
    '1 – 2 Months',
    'Flexible'
  ];

  const faqs = [
    {
      q: 'How fast can you deliver a high-speed website?',
      a: 'Standard custom hand-coded website builds take between 10 to 14 days from kickoff to live deployment, including all local SEO and schema configurations.'
    },
    {
      q: 'What does "fixing vibe-coded apps" entail?',
      a: 'We audit prototypes generated in Cursor, v0, Bolt, or Lovable, fix broken auth, resolve Supabase/PostgreSQL schema issues, eliminate infinite re-renders, and harden the codebase for production.'
    },
    {
      q: 'Do I own the code and automation workflows?',
      a: 'Yes, 100%. We do not lock you into proprietary monthly SaaS platforms. You own the Next.js repository, the database, and the n8n automation workflows.'
    },
    {
      q: 'What happens after launch?',
      a: 'Every build comes with 30 days of warranty and post-launch monitoring to guarantee peak performance, uptime, and proper search engine indexing.'
    }
  ];

  return (
    <div style={{ padding: '70px 0 100px' }}>
      <div className="wrap">
        <div className="section-head" style={{ maxWidth: '780px' }}>
          <div className="eyebrow">Start A Build</div>
          <h1 style={{ fontSize: 'clamp(38px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
            Tell us about your project. We respond in <span style={{ color: 'var(--yellow)' }}>under 2 hours</span>.
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-dim)' }}>
            No sales reps, no endless discovery committees. You will talk directly to the engineers building your website, automation, or application.
          </p>
        </div>

        <div className="contact-grid">
          {/* FORM PANEL */}
          <div className="form-panel">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(245, 197, 24, 0.15)',
                  border: '1px solid var(--yellow)',
                  color: 'var(--yellow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '15px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Thank you, <strong style={{ color: '#fff' }}>{formData.name || 'friend'}</strong>. We have received your project details for <strong style={{ color: 'var(--yellow)' }}>{services.find(s => s.id === selectedService)?.label}</strong>. An engineer will review your requirements and reach out within 2 hours.
                </p>
                <div style={{
                  background: '#0a0a0c',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  marginBottom: '24px',
                  textAlign: 'left'
                }}>
                  <div>Target Budget: <span style={{ color: 'var(--yellow)' }}>{budget}</span></div>
                  <div>Target Timeline: <span style={{ color: 'var(--yellow)' }}>{timeline}</span></div>
                  <div>Direct Contact: <span style={{ color: '#fff' }}>{formData.email || 'Provided via form'}</span></div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* SERVICE SELECTOR CHIPS */}
                <div className="form-group">
                  <label className="form-label">1. Select Primary Service</label>
                  <div className="chip-group">
                    {services.map((srv) => (
                      <button
                        type="button"
                        key={srv.id}
                        className={`chip ${selectedService === srv.id ? 'active' : ''}`}
                        onClick={() => setSelectedService(srv.id)}
                      >
                        {srv.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BUDGET SELECTOR CHIPS */}
                <div className="form-group">
                  <label className="form-label">2. Estimated Budget Range</label>
                  <div className="chip-group">
                    {budgetTiers.map((b) => (
                      <button
                        type="button"
                        key={b}
                        className={`chip ${budget === b ? 'active' : ''}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* TIMELINE SELECTOR CHIPS */}
                <div className="form-group">
                  <label className="form-label">3. Target Timeline</label>
                  <div className="chip-group">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`chip ${timeline === t ? 'active' : ''}`}
                        onClick={() => setTimeline(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DETAILS FIELDS */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company / Business Name</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. Northside Care"
                      className="form-control"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Work Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Project Overview or Existing URL</label>
                  <textarea
                    id="notes"
                    placeholder="Tell us what you want to achieve, any current site pain points, or specific automations/agents you require..."
                    className="form-control"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={16} /> Send Project Details
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR INFO */}
          <div>
            <div style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              marginBottom: '28px'
            }}>
              <div className="eyebrow" style={{ marginBottom: '14px' }}>Direct Communication</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '18px' }}>
                Fast, straightforward collaboration.
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(245,197,24,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Rapid Response Guarantee</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '13px' }}>Inquiries answered within 2 hours during active business hours.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(245,197,24,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Direct Email</div>
                    <a href="mailto:hello@mihilraw.com" style={{ color: 'var(--yellow)', fontSize: '13.5px', textDecoration: 'underline' }}>hello@mihilraw.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(245,197,24,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Code Ownership &amp; NDA</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '13px' }}>Mutual non-disclosure and full IP assignment on every project.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS ACCORDION / LIST */}
            <div style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '18px' }}>
                Frequently Asked Questions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: i !== faqs.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: '14px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>
                      {faq.q}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.5, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="wrap" style={{ padding: '100px 0', textAlign: 'center' }}>Loading contact configurator...</div>}>
      <ContactForm />
    </Suspense>
  );
}
