'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Play,
  X,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Search,
  Smartphone,
  ShieldAlert,
  Zap,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

export default function WebsitesPage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const websiteProjects = [
    {
      title: 'Northside Auto Care & Diagnostics',
      tag: 'Automotive & Local Repair',
      speed: '0.62s Load Time (Lighthouse 99)',
      summary: 'High-conversion local service hub with automated quote request modal, dynamic mechanic schedule sync, and 1-tap call routing.',
      before: 'WordPress site loading in 8.4s with 4 broken plugins losing mobile searchers.',
      after: 'Sub-second custom Next.js site ranking on local map pack within 21 days with 2X calls.'
    },
    {
      title: 'Kestrel Salon & Spa',
      tag: 'Luxury Salon & Spa Booking',
      speed: '0.74s Load Time (Lighthouse 100)',
      summary: 'Elegant dark-luxury aesthetic with mobile appointment scheduler, staff portfolios, and automated calendar reminder triggers.',
      before: 'Generic Wix template with no schema markup and uncompressed 12MB hero gallery.',
      after: 'Hand-crafted interactive showcase resulting in 3.4x online booking completion rate.'
    },
    {
      title: 'Ragon Solutions',
      tag: 'Agency Showcase & Video Engine',
      speed: '0.54s Load Time (Lighthouse 100)',
      summary: 'A high-performance Next.js web application for a UGC & short-form video production agency — with silky motion-driven reeler showcases and instant consultation bookings.',
      before: 'Generic portfolio template failing to showcase high-production video reels smoothly on mobile.',
      after: 'Bespoke Next.js & Framer Motion experience with interactive 2-card video reeler delivering +180% inbound agency inquiries.'
    },
    {
      title: 'valorantedit.com',
      tag: 'Media Platform & Digital Goods',
      speed: '0.69s Load Time (Lighthouse 99)',
      summary: 'High-traffic media download portal with instant preview rendering, search engine snippet indexing, and CDN edge delivery.',
      before: 'Heavy database lag causing 504 gateway timeouts on viral social spikes.',
      after: 'Zero downtime handling 100k+ monthly visits with sub-second asset delivery.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Customer Intent Architecture',
      desc: 'We analyze your local competitors and identify exactly what high-intent searchers look for before dialing your number.'
    },
    {
      num: '02',
      title: 'Conversion Wireframe & High-End UI',
      desc: 'No templates. We craft a bespoke visual identity using tailored dark or luxury palettes, crisp typography, and micro-interactions.'
    },
    {
      num: '03',
      title: 'Hand-Coded Next.js Engineering',
      desc: 'Clean, semantic HTML5, zero unnecessary scripts, and extreme performance optimization that Google’s mobile crawler loves.'
    },
    {
      num: '04',
      title: 'Local SEO Wiring Pre-Launch',
      desc: 'Google Business Profile linking, LocalBusiness schema injection, geotagged metadata, OpenGraph cards, and Search Console setup.'
    },
    {
      num: '05',
      title: 'Launch & Automation Hand-off',
      desc: 'Instant lead-capture webhooks, automated form alerts to your phone, and a 30-day post-launch optimization warranty.'
    }
  ];

  const websiteReviews = [
    {
      quote: "Before mihilraw, we had a WordPress site that took forever to load. Now our page loads instantly, and in just 3 weeks we went from invisible to top rankings on Google Maps for local auto repairs.",
      name: "Marcus Vance",
      role: "Owner, Northside Auto Care"
    },
    {
      quote: "The custom booking flow and high-speed showcase generated 38 consultation inquiries in our first month alone. Coded with extreme precision.",
      name: "Elena Rostova",
      role: "Founder, Kestrel Salon & Spa"
    },
    {
      quote: "They don't just design pretty websites, they engineer an automated sales asset. Our conversion rate from Google search doubled.",
      name: "Dr. Julian Hayes",
      role: "Practice Partner, Vantage Dental"
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ padding: '80px 0 50px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow">Custom Website Engineering</div>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.08, marginBottom: '24px' }}>
              We build websites that <span style={{ color: 'var(--yellow)' }}>rank at the top</span>, convert visitors into callers, and never break.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '36px' }}>
              Most local businesses waste thousands on sluggish WordPress templates packed with 40 plugins that crash and bleed mobile leads. We hand-code custom Next.js websites built around speed, local SEO hierarchy, and clear conversion triggers.
            </p>
            <div className="cta-row">
              <Link href="/contact?service=website" className="btn btn-primary btn-lg">
                Build My Website <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="btn btn-ghost btn-lg"
              >
                <Play size={16} style={{ fill: 'var(--yellow)', color: 'var(--yellow)' }} />
                Watch the 7-Min Breakdown
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VSL (VIDEO SALES LETTER) SECTION */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="wrap">
          <div className="vsl-container">
            <div
              className="vsl-hero-aspect"
              onClick={() => setVideoModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Play video sales letter"
            >
              {/* Fallback visual preview with high-tech dashboard styling */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #0e0e12 0%, #17171d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--yellow)',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid var(--border)'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f5c518', display: 'inline-block', boxShadow: '0 0 8px #f5c518' }}></span>
                  FEATURED VSL: THE LOCAL CONVERSION FORMULA
                </div>

                <div className="vsl-play-btn"></div>
                <div style={{
                  textAlign: 'center',
                  zIndex: 2,
                  maxWidth: '560px',
                  padding: '0 20px'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>
                    Why 90% of Local Business Websites Lose 70% of Potential Calls
                  </h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>
                    Click to watch our technical breakdown on mobile latency, map pack SEO, and automated lead capture. (7 mins)
                  </p>
                </div>
              </div>
            </div>

            <div className="vsl-content-bar">
              <div className="vsl-details">
                <h3>Video Sales Letter: The mihilraw Engineering Blueprint</h3>
                <p>Learn how we take local businesses from page 4 obscurity to dominant 3-pack rankings with hand-coded precision.</p>
              </div>
              <Link href="/contact?service=website" className="btn btn-primary">
                Claim Your Build Slot <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE VS MIHILRAW COMPARISON */}
      <section style={{ background: 'rgba(18,18,20,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 0', overflow: 'hidden' }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>The Standard vs. Our Standard</div>
            <h2>Why Hand-Coded Architecture Destroys Page Builders</h2>
            <p>Compare the reality of bloated page builders with a hand-engineered platform.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Left Box - The Usual Template Route (Animates from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(230, 70, 70, 0.04)',
                border: '1px solid rgba(230, 70, 70, 0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff6b6b', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '13.5px', letterSpacing: '0.04em' }}>
                <ShieldAlert size={18} /> THE USUAL TEMPLATE ROUTE
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14.5px', color: 'var(--text-dim)', margin: 0 }}>
                {[
                  '4-10 second load time with heavy plugin bloat',
                  '65% bounce rate on mobile users trying to call you',
                  'Zero custom schema markup or local SEO ranking signals',
                  'Constant WordPress update breaks and plugin security vulnerabilities',
                  'Trapped in recurring builder subscriptions and slow databases'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ lineHeight: 1.55 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Box - The Mihilraw Hand-Coded Route (Animates from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(245, 197, 24, 0.04)',
                border: '1px solid var(--yellow)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 30px',
                boxShadow: '0 0 30px rgba(245, 197, 24, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--yellow)', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-mono)', fontSize: '13.5px', letterSpacing: '0.04em' }}>
                <Zap size={18} /> THE MIHILRAW HAND-CODED ROUTE
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14.5px', color: 'var(--text)', margin: 0 }}>
                {[
                  'Sub-0.8s load times with perfect 95+ Core Web Vitals',
                  'Instant click-to-call mobile triggers capturing immediate visits',
                  'Deep LocalBusiness schema & Google Map-pack wiring',
                  'Rock-solid Next.js / HTML5 code that never breaks or gets hacked',
                  'You own 100% of your source code and data assets forever'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ lineHeight: 1.55 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORK EXAMPLES / CASE STUDIES */}
      <section style={{ padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Real Builds</div>
            <h2>Selected Website Case Studies</h2>
            <p>Every website we build is tested and verified for speed, ranking capability, and phone call conversion.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
            {websiteProjects.map((proj, idx) => (
              <TiltCard
                key={idx}
                className="port-card floating-tilt-card"
                tiltLimit={12}
                scale={1.02}
                perspective={1100}
                spotlight={true}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '18px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="tag">{proj.tag}</span>
                    <span className="badge" style={{ fontSize: '10.5px' }}>{proj.speed}</span>
                  </div>
                  <h3 style={{ fontSize: '21px', margin: '8px 0 12px' }}>{proj.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-dim)', marginBottom: '16px' }}>{proj.summary}</p>

                  <div style={{
                    background: 'rgba(0,0,0,0.35)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '14px',
                    fontSize: '13px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div>
                      <strong style={{ color: '#ff6b6b' }}>Before: </strong>
                      <span style={{ color: 'var(--text-dim)' }}>{proj.before}</span>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--yellow)' }}>After: </strong>
                      <span style={{ color: 'var(--text)' }}>{proj.after}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/contact?service=website&project=${encodeURIComponent(proj.title)}`} className="link-arrow">
                  Request a build like this <ArrowRight size={15} />
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS */}
      <section style={{ background: 'rgba(14,14,16,0.6)', borderTop: '1px solid var(--border)', padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Our Blueprint</div>
            <h2>The 5-Step Process to Ranking &amp; Converting</h2>
            <p>From initial market research to live local search dominance.</p>
          </div>

          <div className="steps-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="step-card">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section style={{ padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Client Results</div>
            <h2>What business owners say after switching</h2>
          </div>

          <div className="review-grid">
            {websiteReviews.map((rev, i) => (
              <div key={i} className="review-card">
                <div>
                  <div className="stars">★★★★★</div>
                  <p>&quot;{rev.quote}&quot;</p>
                </div>
                <div className="who">
                  <div className="avatar">{rev.name.charAt(0)}</div>
                  <div>
                    <div className="name">{rev.name}</div>
                    <div className="role">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="wrap">
          <div style={{
            background: 'linear-gradient(160deg, #1b1b1f 0%, #101013 100%)',
            border: '1px solid var(--border-hi)',
            borderRadius: 'var(--radius-lg)',
            padding: '50px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Limited Client Capacity</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
              Stop losing local customers to inferior competitors with better websites.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 32px', color: 'var(--text-dim)' }}>
              We build no more than 3 custom websites per month to ensure deep optimization and top-tier code quality.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=website" className="btn btn-primary btn-lg">
                Book Your Website Strategy Call <ArrowRight size={16} />
              </Link>
              <Link href="/#packages" className="btn btn-ghost btn-lg">
                Compare Package Tiers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="video-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border)' }}>
              <span className="badge" style={{ marginBottom: '8px' }}>mihilraw VSL Breakdown</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800 }}>The Local Engineering &amp; Conversion Masterclass</h3>
            </div>

            <div style={{ aspectRatio: '16/9', background: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Interactive simulated player for VSL */}
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'var(--yellow)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(245,197,24,0.5)'
                }}>
                  <Play size={28} style={{ fill: '#000', color: '#000', marginLeft: '4px' }} />
                </div>
                <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '8px' }}>Streaming mihilraw High-Definition VSL</h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px' }}>
                  Walkthrough covers: Local SEO map pack mechanics, sub-second TTFB optimization, and automated lead capture hooks.
                </p>
                <Link
                  href="/contact?service=website"
                  className="btn btn-primary"
                  onClick={() => setVideoModalOpen(false)}
                >
                  Schedule Your 15-Minute Build Audit <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
