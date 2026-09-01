'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PackagesSection() {
  const [billingCycle, setBillingCycle] = useState('one-time');

  const packages = [
    {
      id: 'website-foundation',
      name: 'Local Growth Website',
      badge: 'Core Website',
      tag: 'Hand-Coded Performance',
      price: '$450',
      period: 'one-time build',
      desc: 'Bespoke, hand-coded website designed around how real customers decide to call. Sub-second speed and local SEO wired before launch.',
      features: [
        'Custom Hand-Coded Architecture (Next.js / HTML5)',
        'Lighthouse 95+ Core Web Vitals Guaranteed',
        'Google Business Profile Optimization & Map Signals',
        'Local Schema Markup & Search Console Indexing',
        'Mobile-First Responsive Layout',
        'Conversion-optimized Inquiry Forms & Click-to-Call',
        'Direct Ownership & Zero Platform Lock-in'
      ],
      ctaText: 'Choose Local Growth',
      featured: false
    },
    {
      id: 'automation-bundle',
      name: 'Website + AI Automation Engine',
      badge: 'Most Popular',
      tag: 'Autonomous Operating System',
      price: '$1,000',
      period: 'complete bundle',
      desc: 'Complete growth bundle: $450 for the custom website and $550 for the AI automation bot (Google Reviews or Quoting Agent) that runs on autopilot.',
      features: [
        'Everything in Local Growth Website ($450 value)',
        'AI Automation Bot ($550 value: Google Reviews or Quoting Agent)',
        'Missed-Call Instant Text-Back System',
        'n8n / Webhook CRM Integration (Airtable, HubSpot, Notion)',
        'Leads Collecting Agent with duplicate scrubbing',
        'Full 30-day workflow fine-tuning and uptime monitoring',
        'Direct Ownership with Zero Monthly Platform Markups'
      ],
      ctaText: 'Deploy Growth Engine',
      featured: true
    },
    {
      id: 'custom-webapp',
      name: 'Custom Web App / MVP / Code Rescue',
      badge: 'Engineering Tier',
      tag: 'Fullstack Systems & SaaS',
      price: 'Custom',
      period: '',
      desc: 'Fullstack application development for SaaS MVPs (like Task Earn Pro), internal dashboards, or rescuing broken "vibe-coded" prototypes into production.',
      features: [
        'Fullstack Next.js / Supabase / PostgreSQL Architecture',
        'Auth, Role-Based Access Control & Database Schemas',
        'Agent-in-the-Loop Approval Workflows (Slack/WhatsApp)',
        'AI Voice Agent Integration (24/7 Phone Booking)',
        'Vibe-Code Rescue (Refactoring Cursor/v0/Lovable prototypes)',
        'Stripe Payments & Webhook Subscription Handling',
        'Deployment Pipeline & Production Scalability Hardening'
      ],
      ctaText: 'Customize your offer',
      featured: false
    }
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="wrap">
        <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 50px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Transparent Packages</div>
          <h2>Invest in systems that generate revenue daily.</h2>
          <p>
            No hidden fees, no opaque hourly billing, and no flimsy drag-and-drop templates that break under load. Pick your tier and launch in weeks.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.featured && (
                <div className="package-badge-top">{pkg.badge}</div>
              )}

              <div className="pkg-tag">{pkg.tag}</div>
              <h3 className="pkg-title">{pkg.name}</h3>
              <p className="pkg-desc">{pkg.desc}</p>

              <div className="pkg-price">
                {pkg.price}
                {pkg.period ? <span className="term">/ {pkg.period}</span> : null}
              </div>

              <ul className="package-features">
                {pkg.features.map((feat, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-ghost'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {pkg.ctaText} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
