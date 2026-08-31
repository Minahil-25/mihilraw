import Link from 'next/link';
import { ArrowRight, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

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
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--yellow)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              <Clock size={14} /> Quick response within 2 hours
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
          <span>© {new Date().getFullYear()} mihilraw. Hand-coded without bloated builders.</span>
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
