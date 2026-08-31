'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check, Play, ExternalLink } from 'lucide-react';
import PackagesSection from '@/components/PackagesSection';

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 'design',
      title: 'Design',
      detail: 'A site built around how customers actually decide who to call, not a generic brochure.',
      x: '90px',
      y: '70px',
      delay: '0s'
    },
    {
      id: 'build',
      title: 'Build',
      detail: 'Hand-coded, mobile-first — since most local searches turn into a same-day visit.',
      x: '340px',
      y: '160px',
      delay: '1.1s'
    },
    {
      id: 'rank',
      title: 'Rank',
      detail: 'Local SEO wired in before launch — Google Business Profile, map pack, review flow.',
      x: '150px',
      y: '320px',
      delay: '2.2s'
    },
    {
      id: 'automate',
      title: 'Automate',
      detail: 'Missed-call text-back, booking reminders, and review requests — running on their own.',
      x: '380px',
      y: '420px',
      delay: '3.3s'
    },
    {
      id: 'live',
      title: 'Live',
      detail: 'Ships already ranking locally and already automated — not a static handoff.',
      x: '190px',
      y: '560px',
      delay: '4.4s',
      isLive: true
    }
  ];

  const handleStepHover = (id) => setActiveStep(id);
  const handleStepLeave = () => setActiveStep(null);

  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <div className="eyebrow">Websites · local SEO · AI automation for local business</div>
            <h1>
              <span
                className={`word ${activeStep === 'design' ? 'active' : ''}`}
                onMouseEnter={() => handleStepHover('design')}
                onMouseLeave={handleStepLeave}
              >
                Design.
              </span>{' '}
              <span
                className={`word ${activeStep === 'build' ? 'active' : ''}`}
                onMouseEnter={() => handleStepHover('build')}
                onMouseLeave={handleStepLeave}
              >
                Build.
              </span>{' '}
              <span
                className={`word ${activeStep === 'rank' ? 'active' : ''}`}
                onMouseEnter={() => handleStepHover('rank')}
                onMouseLeave={handleStepLeave}
              >
                Rank.
              </span>{' '}
              <span
                className={`word ${activeStep === 'automate' ? 'active' : ''}`}
                onMouseEnter={() => handleStepHover('automate')}
                onMouseLeave={handleStepLeave}
              >
                Automate.
              </span>
            </h1>

            <p className="lede">
              mihilraw builds websites for businesses the deep way — hand-coded, not templated — with local SEO wired in before launch, then AI automations that answer calls, draft quotes, and collect reviews so you don&apos;t have to.
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
                <path id="p3" className="connector" d="M 150,320 C 60,340 300,400 380,420" />
                <path id="p4" className="connector" d="M 380,420 C 440,440 260,540 190,560" />

                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '0s' }} d="M 90,70 C 220,70 200,170 340,160" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '0.8s' }} d="M 340,160 C 420,160 260,290 150,320" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '1.6s' }} d="M 150,320 C 60,340 300,400 380,420" />
                <path className="connector-pulse" pathLength="100" style={{ animationDelay: '2.4s' }} d="M 380,420 C 440,440 260,540 190,560" />
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
          <span className="cap">Building for —</span>
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

      {/* CORE 3 PILLARS */}
      <section style={{ padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What We Do</div>
            <h2>Three specialized capabilities, zero fluff.</h2>
            <p>We solve the real bottleneck: getting traffic, capturing the lead instantly, and building software that actually scales.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="port-card">
              <div>
                <div className="tag">Service 01</div>
                <h3>High-Speed Websites</h3>
                <p>
                  Hand-coded with Next.js and optimized HTML5. Loads in under 0.8 seconds, wired directly with Google Business Profile &amp; local search signals.
                </p>
              </div>
              <Link href="/websites" className="link-arrow">
                Explore Website Engineering &amp; VSL <ArrowRight size={15} />
              </Link>
            </div>

            <div className="port-card">
              <div>
                <div className="tag">Service 02</div>
                <h3>Business Automations &amp; AI Agents</h3>
                <p>
                  Deploy Google Reviews agents, automated 60-second quoting bots, lead aggregators, and 24/7 AI voice responders that save 20+ hours weekly.
                </p>
              </div>
              <Link href="/automations" className="link-arrow">
                See Our 5 Autonomous Agents <ArrowRight size={15} />
              </Link>
            </div>

            <div className="port-card">
              <div>
                <div className="tag">Service 03</div>
                <h3>Web Apps, MVPs &amp; Vibe-Code Rescue</h3>
                <p>
                  Fullstack SaaS systems like Task Earn Pro. Plus emergency refactoring for &quot;vibe-coded&quot; prototypes (Cursor, v0, Lovable) that are stuck or broken.
                </p>
              </div>
              <Link href="/webapps" className="link-arrow">
                View SaaS Builds &amp; Code Rescue <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION (HOMEPAGE) */}
      <PackagesSection />

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How a project runs</div>
            <h2>Five steps, in order — nothing skipped.</h2>
            <p>Every milestone is transparent, accountable, and designed to generate measurable business results.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="num">01</div>
              <h3>Design</h3>
              <p>We map the pages your customers and Google both need, then design around conversion — not template trends.</p>
            </div>
            <div className="step-card">
              <div className="num">02</div>
              <h3>Build</h3>
              <p>Hand-coded, mobile-first. No page-builder ceiling, and no slow site losing you same-day local searches.</p>
            </div>
            <div className="step-card">
              <div className="num">03</div>
              <h3>Rank</h3>
              <p>Google Business Profile optimized, map-pack signals in place, review flow set up — before the site goes live.</p>
            </div>
            <div className="step-card">
              <div className="num">04</div>
              <h3>Automate</h3>
              <p>Missed-call text-back, quoting agents, review requests — running automatically once you&apos;re live.</p>
            </div>
            <div className="step-card">
              <div className="num">05</div>
              <h3>Launch &amp; Scale</h3>
              <p>You get an asset that&apos;s already ranking locally and already automated, not a blank slate with a launch date.</p>
            </div>
          </div>
        </div>
      </section>

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
                <p>A comprehensive CRM &amp; worker dashboard system built end-to-end — authentication, real-time queues, data models, and team views.</p>
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

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Client Feedback</div>
            <h2>Built for business owners who demand results.</h2>
            <p>Hear from clients whose operations and customer pipelines run on mihilraw code.</p>
          </div>

          <div className="review-grid">
            <div className="review-card">
              <div>
                <div className="stars">★★★★★</div>
                <p>&quot;They didn&apos;t just hand us a website — Search Console was already reporting impressions in week one, and phone calls increased immediately.&quot;</p>
              </div>
              <div className="who">
                <div className="avatar">RK</div>
                <div>
                  <div className="name">R. Kaur</div>
                  <div className="role">Founder, Apex Auto Care</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div>
                <div className="stars">★★★★★</div>
                <p>&quot;The quoting agent alone changed our business. Prospects get an itemized PDF quote in their inbox in 45 seconds while our competitors take 2 days.&quot;</p>
              </div>
              <div className="who">
                <div className="avatar">DM</div>
                <div>
                  <div className="name">D. Malik</div>
                  <div className="role">Operations Director, Horizon HVAC</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div>
                <div className="stars">★★★★★</div>
                <p>&quot;Our Cursor-generated prototype was crashing constantly. mihilraw came in, refactored the database, fixed auth, and had us production-ready in 8 days.&quot;</p>
              </div>
              <div className="who">
                <div className="avatar">SA</div>
                <div>
                  <div className="name">S. Ahmed</div>
                  <div className="role">Co-Founder, Task Workflow SaaS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
