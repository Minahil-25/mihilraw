'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Bot, 
  Star, 
  FileText, 
  UserCheck, 
  Filter, 
  PhoneCall, 
  Clock, 
  Zap, 
  Workflow, 
  CheckCircle2,
  Cpu,
  ChevronRight
} from 'lucide-react';

export default function AutomationsPage() {
  const [activeTab, setActiveTab] = useState('google-reviews');

  const agents = [
    {
      id: 'google-reviews',
      title: 'Google Reviews Agent',
      badge: 'Reputation & Map Pack',
      icon: Star,
      headline: 'Autonomously turn 5-star customer experiences into Google reviews on autopilot.',
      desc: 'Connects directly to your CRM, POS, or job completion trigger. Automatically sends a personalized SMS/WhatsApp to the client with smart sentiment routing.',
      metrics: '3.8x More 5-Star Reviews · Catches 100% of negative reviews before public posting',
      howItWorks: [
        'Triggers when a job/service is marked completed in your system.',
        'Sends a non-pushy friendly SMS asking: "How was your experience with us today?"',
        'If score is 4 or 5: Instantly directs them to your Google Business Profile with a 1-tap review link.',
        'If score is 1 to 3: Diverts them to a private owner feedback form so you can resolve it before it harms your public rating.',
        'AI automatically crafts and drafts thoughtful, keyword-rich owner responses for your approval.'
      ],
      diagram: 'Job Completed → SMS Trigger → Sentiment Filter → [Google Map Review OR Private Resolution Form]'
    },
    {
      id: 'quoting',
      title: 'Quoting Agent (60s Estimates)',
      badge: 'Revenue Velocity',
      icon: FileText,
      headline: 'Extract job specs from emails or forms and deliver a polished branded PDF quote in under 60 seconds.',
      desc: 'Speed to lead is everything. While your competitors take 2 days to draft an estimate, your AI Quoting Agent validates measurements, calculates labor and materials, and emails an itemized PDF quote instantly.',
      metrics: 'Average turnaround 42 seconds · 68% higher close rate than slow quotes',
      howItWorks: [
        'Ingests incoming inquiry from web form, email, or WhatsApp.',
        'Extracts customer dimensions, square footage, vehicle make, or service requirements.',
        'Runs dynamic pricing calculation based on your exact rates, materials, and profit margins.',
        'Compiles a crisp, branded PDF quote with terms, breakdown, and 1-click digital deposit link.',
        'Logs the quote in your CRM and notifies your team with a Slack/WhatsApp alert.'
      ],
      diagram: 'Web Lead/Email → AI Spec Parser → Rate Matrix → PDF Generator → Instant Email Delivery'
    },
    {
      id: 'agent-loop',
      title: 'Agent-in-the-Loop Safeguard',
      badge: 'Human + AI Supervision',
      icon: UserCheck,
      headline: 'Autonomous power with complete human control. The AI drafts; you approve with 1 tap.',
      desc: 'For high-ticket transactions or sensitive communications, fully autonomous bots can be risky. Agent-in-the-Loop performs 95% of the heavy lifting (research, drafting, math) and presents a 1-click approve button on Slack or WhatsApp.',
      metrics: 'Zero hallucination risk · Cuts human administrative time by 85%',
      howItWorks: [
        'AI processes inbound customer requests, drafts responses, or prepares custom contracts.',
        'Pings the business owner or ops manager with an interactive Slack/WhatsApp button: [Approve & Send] | [Edit Draft] | [Reject].',
        'Upon 1-tap approval, the agent immediately executes the action across external APIs.',
        'Learns owner tone and preferences over time for seamless alignment.'
      ],
      diagram: 'Complex Task → AI Research & Draft → Slack/WhatsApp 1-Tap Prompt → Instant Execution'
    },
    {
      id: 'lead-collector',
      title: 'Leads Collecting & Hygiene Agent',
      badge: 'Data Pipeline',
      icon: Filter,
      headline: 'Ingest leads from Meta, Google Ads, directories, and web forms into one clean pipeline.',
      desc: 'Stops leads from slipping through the cracks. Ingests leads instantly from every marketing channel, validates emails and phone numbers, scrubs duplicates, and pushes them straight into your operational CRM.',
      metrics: 'Instant webhook intake (&lt; 2 seconds) · 100% duplicate elimination',
      howItWorks: [
        'Monitors incoming webhooks from Meta Ads, Google Ads, website forms, and partner directories.',
        'Performs carrier and HLR phone lookup to verify live mobile lines vs landlines.',
        'Enriches data with company information, social links, and geographical radius.',
        'Pushes cleanly formatted records directly into Airtable, HubSpot, GoHighLevel, or Google Sheets.'
      ],
      diagram: 'Multi-Channel Ingestion → Live Phone/Email Validation → CRM Deduplication → Auto-Assign'
    },
    {
      id: 'voice-agent',
      title: 'AI Voice Agents (24/7 Phone Answering)',
      badge: 'Telephony AI',
      icon: PhoneCall,
      headline: 'Never lose a high-value customer to voicemail during busy hours or after-hours.',
      desc: 'Natural sounding, conversational AI voice agents that pick up when you are unavailable, answer common service questions, qualify urgency, and book appointments right on your calendar.',
      metrics: 'Sub-600ms conversational latency · 24/7/365 availability · Zero missed calls',
      howItWorks: [
        'Answers inbound missed calls within 2 rings with a warm, natural human-like voice.',
        'Answers questions on pricing, turnaround times, and service areas based on your custom knowledge base.',
        'Gathers customer details, address, and problem description.',
        'Books a confirmed inspection or appointment directly into your Google Calendar or CRM.',
        'Sends you an instant audio recording and executive transcript of the call.'
      ],
      diagram: 'Inbound Call → Twilio/Voice Engine → Live AI Conversation → Calendar Booking & SMS'
    }
  ];

  const currentAgent = agents.find((a) => a.id === activeTab) || agents[0];

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow">Autonomous Business Operations</div>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.08, marginBottom: '24px' }}>
              Quick business automations and <span style={{ color: 'var(--yellow)' }}>AI agents</span> that save 20+ hours every week.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '36px' }}>
              Stop doing manual data entry, playing phone tag for reviews, or spending evenings drafting quotes. We build custom autonomous agents that run client-side on n8n and modern APIs: fast to deploy, transparent, and completely owned by you.
            </p>
            <div className="cta-row">
              <Link href="/contact?service=automation" className="btn btn-primary btn-lg">
                Automate My Operations <ArrowRight size={16} />
              </Link>
              <a href="#agents-grid" className="btn btn-ghost btn-lg">
                Explore The 5 Agents ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE AGENT SHOWCASE / SIMULATOR */}
      <section style={{ padding: '40px 0 90px' }} id="interactive-demo">
        <div className="wrap">
          <div style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border-hi)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            {/* AGENT TABS */}
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              borderBottom: '1px solid var(--border)',
              background: '#0d0d10'
            }}>
              {agents.map((agent) => {
                const IconComponent = agent.icon;
                const isActive = activeTab === agent.id;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setActiveTab(agent.id)}
                    style={{
                      padding: '18px 24px',
                      background: isActive ? 'rgba(245, 197, 24, 0.08)' : 'transparent',
                      border: 'none',
                      borderBottom: isActive ? '2px solid var(--yellow)' : '2px solid transparent',
                      color: isActive ? 'var(--yellow)' : 'var(--text-dim)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s'
                    }}
                  >
                    <IconComponent size={17} />
                    {agent.title}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT */}
            <div style={{ padding: '40px 36px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '40px', alignItems: 'center' }}>
                <div>
                  <div className="badge" style={{ marginBottom: '14px' }}>{currentAgent.badge}</div>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '16px' }}>
                    {currentAgent.headline}
                  </h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                    {currentAgent.desc}
                  </p>

                  <div style={{
                    background: 'rgba(245, 197, 24, 0.05)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '14px 18px',
                    marginBottom: '26px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <Zap size={16} /> <strong>Performance Metric:</strong> {currentAgent.metrics}
                  </div>

                  <h4 style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dimmer)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                    Execution Sequence:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                    {currentAgent.howItWorks.map((step, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--yellow)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'var(--text)' }}>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* VISUAL DIAGRAM / CODE PREVIEW */}
                <div style={{
                  background: '#070709',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '28px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                    <span style={{ color: 'var(--text-dim)', fontSize: '12px' }}>// ARCHITECTURE RUNTIME</span>
                    <span style={{ color: 'var(--yellow)', fontSize: '11px' }}>● LIVE WEBHOOK PIPELINE</span>
                  </div>

                  <div style={{ color: 'var(--text-dimmer)', marginBottom: '12px' }}>/* Logic flow */</div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    padding: '16px',
                    borderRadius: '8px',
                    color: 'var(--yellow)',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {currentAgent.diagram}
                  </div>

                  <div style={{ color: 'var(--text-dimmer)', marginBottom: '10px' }}>/* Tech Components */</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {['n8n Workflow Engine', 'OpenAI / Claude API', 'Twilio SMS & Voice', 'Airtable / PostgreSQL', 'Webhooks'].map((t) => (
                      <span key={t} style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: 'var(--text)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=automation&agent=${encodeURIComponent(currentAgent.title)}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Deploy {currentAgent.title} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 5 AGENTS GRID */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }} id="agents-grid">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Production-Ready Solutions</div>
            <h2>The 5 Core Automations We Deploy</h2>
            <p>Each agent is customized to your exact business rules, rates, and software stack.</p>
          </div>

          <div className="agent-grid">
            {agents.map((agent) => {
              const IconComp = agent.icon;
              return (
                <div key={agent.id} className="agent-card">
                  <div>
                    <div className="agent-icon">
                      <IconComp size={24} />
                    </div>
                    <span className="metric-pill">{agent.badge}</span>
                    <h3>{agent.title}</h3>
                    <p>{agent.desc}</p>
                  </div>

                  <div>
                    <div className="agent-workflow-pill">
                      <Clock size={14} /> Deployment turnaround: 3-5 days
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab(agent.id);
                        document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--yellow)',
                        fontWeight: 600,
                        fontSize: '13.5px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '16px',
                        padding: 0
                      }}
                    >
                      View architecture &amp; test flow <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Custom Automation Card */}
            <div className="agent-card" style={{ background: 'linear-gradient(160deg, #1d1b14 0%, #101012 100%)', borderColor: 'var(--yellow)' }}>
              <div>
                <div className="agent-icon" style={{ background: 'var(--yellow)', color: '#000' }}>
                  <Cpu size={24} />
                </div>
                <span className="metric-pill" style={{ color: '#fff', background: 'rgba(245,197,24,0.2)' }}>Bespoke Engineering</span>
                <h3>Custom Workflow Engine</h3>
                <p>Have an unusual operational bottleneck? We connect proprietary CRMs, legacy databases, inventory systems, or bespoke API triggers.</p>
              </div>

              <div>
                <div className="agent-workflow-pill" style={{ color: 'var(--yellow)' }}>
                  <Workflow size={14} /> Tailored to your custom stack
                </div>
                <Link
                  href="/contact?service=custom-automation"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
                >
                  Request Custom Scope <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY N8N / CLIENT-SIDE AUTOMATION */}
      <section style={{ background: 'rgba(14,14,16,0.6)', borderTop: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Engineering Philosophy</div>
            <h2>Why We Never Trap You in Black-Box SaaS</h2>
            <p>Most agencies hook you on proprietary monthly platforms where you lose everything if you cancel. We build differently.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="step-card">
              <div className="num">01</div>
              <h3>100% Client-Owned Workflows</h3>
              <p>We deploy inside your own n8n instance or Make account. You hold the API keys, credentials, and source files.</p>
            </div>
            <div className="step-card">
              <div className="num">02</div>
              <h3>No Per-Seat Markup</h3>
              <p>Run 1,000 or 50,000 tasks without artificial price spikes. You only pay standard wholesale API costs (pennies per month).</p>
            </div>
            <div className="step-card">
              <div className="num">03</div>
              <h3>Bulletproof Error Handling</h3>
              <p>Every agent includes retry loops, fallback SMS notifications, and audit logging so a flaky API never halts your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border-hi)',
            borderRadius: 'var(--radius-lg)',
            padding: '50px',
            textAlign: 'center'
          }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>72-Hour Audit Kickoff</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
              Free up your team to do the work that actually generates profit.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-dim)' }}>
              Schedule a 20-minute automation audit call within 72 hours. We will map your manual bottlenecks and deploy custom agents to your stack in 3–5 days.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=automation" className="btn btn-primary btn-lg">
                Book My Automation Audit <ArrowRight size={16} />
              </Link>
              <Link href="/websites" className="btn btn-ghost btn-lg">
                Pair With a High-Speed Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
