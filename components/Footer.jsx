'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#', // Replace with your Instagram link later
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: '#', // Replace with your LinkedIn link later
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: '#', // Replace with your YouTube link later
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="eyebrow">Ready to ship something real?</div>
            <h2>Have a build, automation, or app in mind?</h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link href="/websites" className="btn btn-ghost btn-lg">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="foot-cols">
          <div>
            <Link href="/" className="logo" style={{ marginBottom: '16px' }}>
              mihilraw<span></span>
            </Link>
            <p style={{ color: 'var(--text-dim)', fontSize: '14px', maxWidth: '280px', marginTop: '12px' }}>
              Deep-tier digital engineering for businesses that refuse to settle for slow templates and manual tasks.
            </p>
            
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--yellow)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              <Clock size={14} /> Quick response within 2 hours
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="foot-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/websites">High-Speed Websites</Link></li>
              <li><Link href="/automations">Business Automations</Link></li>
              <li><Link href="/webapps">Custom Web Apps & MVPs</Link></li>
              <li><Link href="/webapps#vibe-code">Fix Vibe-Coded Apps</Link></li>
              <li><Link href="/#packages">All Packages</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>AI Agents</h4>
            <ul>
              <li><Link href="/automations#google-reviews">Google Reviews Agent</Link></li>
              <li><Link href="/automations#quoting">Quoting Agent (60s PDF)</Link></li>
              <li><Link href="/automations#agent-loop">Agent-in-the-Loop</Link></li>
              <li><Link href="/automations#lead-collector">Leads Collecting Agent</Link></li>
              <li><Link href="/automations#voice-agent">AI Voice Agents (24/7)</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#process">Our Process</Link></li>
              <li><Link href="/#reviews">Client Reviews</Link></li>
              <li><Link href="/webapps#taskearn">Task Earn Pro Case Study</Link></li>
              <li><Link href="/contact">Book Strategy Call</Link></li>
              <li><a href="mailto:hello@mihilraw.com">hello@mihilraw.com</a></li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>&copy; {new Date().getFullYear()} mihilraw. Hand-coded without bloated builders.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/contact">Inquire</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
