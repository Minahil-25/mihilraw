'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Play, ExternalLink, Zap, Bot, Layers } from 'lucide-react';
import PackagesSection from '@/components/PackagesSection';
import ConstellationGrid from '@/components/ui/constellation-grid';
import ShinyText from '@/components/ShinyText';
import { CircularCarousel } from '@/components/ui/circular-carousel';
import { TiltCard } from '@/components/ui/tilt-card';
import ProcessReeler from '@/components/ProcessReeler';
import FounderVSL from '@/components/FounderVSL';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 'design',
      title: 'Design',
      detail: 'A site built around how customers actually decide who to call, not a generic brochure.',
      x: '16.07%',
      y: '11.29%',
      delay: '0s'
    },
    {
      id: 'build',
      title: 'Build',
      detail: 'Hand-coded, mobile-first, since most local searches turn into a same-day visit.',
      x: '60.71%',
      y: '25.81%',
      delay: '1.1s'
    },
    {
      id: 'rank',
      title: 'Rank',
      detail: 'Local SEO wired in before launch: Google Business Profile, map pack, review flow.',
      x: '26.79%',
      y: '51.61%',
      delay: '2.2s'
    },
    {
      id: 'automate',
      title: 'Automate',
      detail: 'Missed-call text-back, booking reminders, and review requests running on their own.',
      x: '67.86%',
      y: '67.74%',
      delay: '3.3s'
    },
    {
      id: 'live',
      title: 'Live',
      detail: 'Ships already ranking locally and already automated, not a static handoff.',
      x: '33.93%',
      y: '90.32%',
      delay: '4.4s',
      isLive: true
    }
  ];

  const reviewsData = [
    {
      id: '1',
      title: 'R. Kaur',
      tag: 'Web & Local SEO',
      description: "They didn't just hand us a website: Search Console was already reporting impressions in week one, and phone calls increased immediately.",
      role: 'Founder, Apex Auto Care',
      avatar: 'RK',
      stars: '★★★★★'
    },
    {
      id: '2',
      title: 'D. Malik',
      tag: 'AI Quoting Bot',
      description: 'The quoting agent alone changed our business. Prospects get an itemized PDF quote in their inbox in 45 seconds while our competitors take 2 days.',
      role: 'Operations Director, Horizon HVAC',
      avatar: 'DM',
      stars: '★★★★★'
    },
    {
      id: '3',
      title: 'S. Ahmed',
      tag: 'Code Rescue',
      description: 'Our Cursor-generated prototype was crashing constantly. mihilraw came in, refactored the database, fixed auth, and had us production-ready in 8 days.',
      role: 'Co-Founder, Task Workflow SaaS',
      avatar: 'SA',
      stars: '★★★★★'
    },
    {
      id: '4',
      title: 'Dr. L. Chen',
      tag: 'Dental Portal',
      description: 'Online booking completion is noticeably higher without our front desk returning missed calls all day. The setup was smooth and straightforward.',
      role: 'Lead Dentist, Vantage Dental Group',
      avatar: 'LC',
      stars: '★★★★★'
    },
    {
      id: '5',
      title: 'E. Morales',
      tag: 'Speed & UX',
      description: 'Mobile page speed is night and day compared to our old WordPress site. Clients actually browse our service menu and book directly on their phones.',
      role: 'Studio Director, Kestrel Salon & Spa',
      avatar: 'EM',
      stars: '★★★★★'
    },
    {
      id: '6',
      title: 'M. Vance',
      tag: 'Review Agent',
      description: 'Automated review requests sent over 50 real 5-star Google ratings without us having to manually chase customers down after every completed job.',
      role: 'Owner, Oakmoor Repair Services',
      avatar: 'MV',
      stars: '★★★★★'
    }
  ];

  const handleStepHover = (id) => setActiveStep(id);
  const handleStepLeave = () => setActiveStep(null);

  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          <ConstellationGrid showOverlayText={false} />
        </div>
        <div className="wrap">
          <div className="hero-copy">
            <div className="eyebrow">Websites · local SEO · AI automation for local business</div>
            <h1>
              <ShinyText
                text="Design. Build. Rank. Automate."
                speed={2.5}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
              />
            </h1>

            <p className="lede">
              mihilraw builds websites for businesses the deep way: hand-coded, not templated, with local SEO wired in before launch, then AI automations that answer calls, draft quotes, and collect reviews so you don&apos;t have to.
            </p>

            <div className="cta-row">
              <Link href="/contact" className="btn btn-primary">
                Start a project <ArrowRight size={15} />
              </Link>
              <a href="#packages" className="btn btn-ghost">
                View Packages &amp; Pricing ↓
              </a>
            </div>
          </div>

          <div className="canvas-frame">
            <div className="flow-wrap" id="flowWrap">
              <svg viewBox="0 0 560 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <path id="p1" className="connector" d="M 90,70 C 220,70 200,170 340,160" />
                <path id="p2" className="connector" d="M 340,160 C 420,160 260,290 150,320" />
                <path id="p3" className="connector" d="M 150,320 C 230,330 290,410 380,420" />
                <path id="p4" className="connector" d="M 380,420 C 430,430 260,540 190,560" />

                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '0s' }} d="M 90,70 C 220,70 200,170 340,160" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '0.8s' }} d="M 340,160 C 420,160 260,290 150,320" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '1.6s' }} d="M 150,320 C 230,330 290,410 380,420" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '2.4s' }} d="M 380,420 C 430,430 260,540 190,560" />
              </svg>

              {steps.map((s) => (
                <div
                  key={s.id}
                  className={`node ${activeStep === s.id ? 'active' : ''} ${s.isLive ? 'node-live' : ''}`}
                  style={{
                    left: s.x,
                    top: s.y,
                    '--sheen-delay': s.delay
                  }}
                  onMouseEnter={() => handleStepHover(s.id)}
                  onMouseLeave={handleStepLeave}
                  onClick={() => setActiveStep(activeStep === s.id ? null : s.id)}
                >
                  <div className="n-title">
                    <span className="dot"></span>
                    {s.title}
                  </div>
                  <div className="n-detail">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* TRUSTED MARQUEE */}
      <section className="trusted">
        <div className="wrap">
          <span className="cap">Building for</span>
          <div className="marquee">
            <div className="marquee-track">
              <span>Task Earn Pro</span>
              <span>valorantedit.com</span>
              <span>Ragon Solutions</span>
              <span>Northside Auto Care</span>
              <span>Kestrel Salon</span>
              <span>Vantage Dental</span>
              <span>Oakmoor Repair</span>
              <span>Driftpoint Clinic</span>
              <span>Task Earn Pro</span>
              <span>valorantedit.com</span>
              <span>Ragon Solutions</span>
              <span>Northside Auto Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE 3 PILLARS / WHAT WE DO */}
      <section className="what-we-do-section">
        <div className="what-we-do-shade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-head">
            <div className="eyebrow">What We Do</div>
            <h2>Three specialized capabilities, zero fluff.</h2>
            <p>We solve the real bottleneck: getting traffic, capturing the lead instantly, and building software that actually scales.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <TiltCard
              className="floating-tilt-card"
              tiltLimit={14}
              scale={1.03}
              perspective={1100}
              spotlight={true}
            >
              <div className="card-content-inner">
                <div>
                  <div className="card-header-row">
                    <div className="card-icon-badge">
                      <Zap size={22} />
                    </div>
                    <span className="card-step-tag">Service 01</span>
                  </div>
                  <h3>High-Speed Websites</h3>
                  <p>
                    Hand-coded with Next.js and optimized HTML5. Loads in under 0.8 seconds, wired directly with Google Business Profile &amp; local search signals.
                  </p>
                  <div className="feature-pills">
                    <span className="feature-pill">&lt;0.8s Load</span>
                    <span className="feature-pill">Local SEO</span>
                    <span className="feature-pill">Mobile-First</span>
                  </div>
                </div>
                <Link href="/websites" className="link-arrow">
                  Explore Website Engineering &amp; VSL <ArrowRight size={15} />
                </Link>
              </div>
            </TiltCard>

            <TiltCard
              className="floating-tilt-card"
              tiltLimit={14}
              scale={1.03}
              perspective={1100}
              spotlight={true}
            >
              <div className="card-content-inner">
                <div>
                  <div className="card-header-row">
                    <div className="card-icon-badge">
                      <Bot size={22} />
                    </div>
                    <span className="card-step-tag">Service 02</span>
                  </div>
                  <h3>Business Automations &amp; AI Agents</h3>
                  <p>
                    Deploy Google Reviews agents, automated 60-second quoting bots, lead aggregators, and 24/7 AI voice responders that save 20+ hours weekly.
                  </p>
                  <div className="feature-pills">
                    <span className="feature-pill">60s Quoting Bot</span>
                    <span className="feature-pill">Review Agents</span>
                    <span className="feature-pill">24/7 AI Voice</span>
                  </div>
                </div>
                <Link href="/automations" className="link-arrow">
                  See Our 5 Autonomous Agents <ArrowRight size={15} />
                </Link>
              </div>
            </TiltCard>

            <TiltCard
              className="floating-tilt-card"
              tiltLimit={14}
              scale={1.03}
              perspective={1100}
              spotlight={true}
            >
              <div className="card-content-inner">
                <div>
                  <div className="card-header-row">
                    <div className="card-icon-badge">
                      <Layers size={22} />
                    </div>
                    <span className="card-step-tag">Service 03</span>
                  </div>
                  <h3>Web Apps, MVPs &amp; Vibe-Code Rescue</h3>
                  <p>
                    Fullstack SaaS systems like Task Earn Pro. Plus emergency refactoring for &quot;vibe-coded&quot; prototypes (Cursor, v0, Lovable) that are stuck or broken.
                  </p>
                  <div className="feature-pills">
                    <span className="feature-pill">Next.js &amp; DB</span>
                    <span className="feature-pill">Task Earn Pro</span>
                    <span className="feature-pill">Code Rescue</span>
                  </div>
                </div>
                <Link href="/webapps" className="link-arrow">
                  View SaaS Builds &amp; Code Rescue <ArrowRight size={15} />
                </Link>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3D PROCESS CORRIDOR */}
      <ProcessReeler />

      {/* FOUNDER VSL & BRAND OVERVIEW */}
      <FounderVSL />

      {/* PORTFOLIO / WORK HIGHLIGHTS */}
      <section className="portfolio" id="portfolio">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Proven Results</div>
            <h2>Selected Builds &amp; Pipelines</h2>
            <p>From high-ticket agency web applications to automated revenue engines.</p>
          </div>

          <div className="port-grid">
            <div className="port-card">
              <div>
                <div className="tag">Fullstack SaaS</div>
                <h3>Task Earn Pro</h3>
                <p>A comprehensive CRM &amp; worker dashboard system built end-to-end with authentication, real-time queues, data models, and team views.</p>
              </div>
              <Link href="/webapps#taskearn" className="link-arrow">
                Read case study &rarr;
              </Link>
            </div>

            <div className="port-card">
              <div>
                <div className="tag">Speed &amp; SEO Rebuild</div>
                <h3>valorantedit.com</h3>
                <p>Re-engineered architecture with advanced schema, core web vitals speed optimization, and search indexing fixes.</p>
              </div>
              <Link href="/websites" className="link-arrow">
                View website case study &rarr;
              </Link>
            </div>

            <div className="port-card">
              <div>
                <div className="tag">Agency Showcase</div>
                <h3>Ragon Solutions</h3>
                <p>A modern digital presence for a UGC &amp; video production studio with silky motion graphics and high-conversion client forms.</p>
              </div>
              <Link href="/websites" className="link-arrow">
                Explore showcase &rarr;
              </Link>
            </div>

            <div className="port-card">
              <div>
                <div className="tag">AI Automation</div>
                <h3>n8n Autonomous Lead Pipelines</h3>
                <p>High-volume client acquisition workflows with intelligent data enrichment and automated quote generation in under 60 seconds.</p>
              </div>
              <Link href="/automations" className="link-arrow">
                See automation architecture &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION (HOMEPAGE) */}
      <PackagesSection />

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '720px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Client Feedback</div>
            <h2>Built for business owners who demand results.</h2>
            <p>Hear from clients whose operations and customer pipelines run on mihilraw code.</p>
          </div>

          <div className="reviews-carousel-wrap">
            <CircularCarousel items={reviewsData} autoPlay={true} autoPlayInterval={4500} />
          </div>
        </div>
      </section>
    </div>
  );
}
