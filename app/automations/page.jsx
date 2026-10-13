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
import AgentShowcase from '@/components/AgentShowcase';

export default function AutomationsPage() {
  const [activeTab, setActiveTab] = useState('google-reviews');

  const agents = [
    {
      id: 'google-reviews',
      title: 'Google Reviews Agent',
      badge: 'Reputation & Booking Engine',
      icon: Star,
      headline: 'Autonomously turn 5-star customer experiences into Google reviews & booked appointments.',
      desc: 'Informs customers of your availability, enables automated calendar booking, and routes happy clients directly to your Google Business Profile with a 1-tap review link.',
      metrics: '3.8x More 5-Star Reviews · Catches 100% of negative reviews before public posting'
    },
    {
      id: 'chat-support',
      title: 'Chat Support Agent',
      badge: '24/7 Live Concierge',
      icon: Bot,
      headline: '24/7 autonomous chatbot that answers inquiries, qualifies leads, and syncs to your CRM.',
      desc: 'Embeds directly onto your website. Answers complex service questions using your custom knowledge base, captures verified contact details, and notifies your team in real time.',
      metrics: '<1s Response Time · 92% Autonomous Resolution · 24/7/365 Coverage'
    },
    {
      id: 'quoting',
      title: 'Quoting Agent',
      badge: 'Revenue Velocity',
      icon: FileText,
      headline: 'Extract job specs from emails or forms and deliver a polished branded PDF quote in under 60 seconds.',
      desc: 'Speed to lead is everything. While your competitors take 2 days to draft an estimate, your AI Quoting Agent validates measurements, calculates labor and materials, and emails an itemized PDF quote instantly.',
      metrics: 'Average turnaround 42 seconds · 68% higher close rate than slow quotes'
    },
    {
      id: 'lead-generating',
      title: 'Lead Generating Agent',
      badge: 'Pipeline Ingestion',
      icon: Filter,
      headline: 'Scrape, verify, and enrich high-intent local business leads on complete autopilot.',
      desc: 'Stops leads from slipping through the cracks. Ingests leads instantly from every marketing channel, validates emails and phone numbers, scrubs duplicates, and pushes them straight into your operational CRM.',
      metrics: 'Instant webhook intake (< 2 seconds) · 100% duplicate elimination'
    },
    {
      id: 'voice-agent',
      title: 'Voice Agent',
      badge: 'Telephony AI',
      icon: PhoneCall,
      headline: 'Natural conversational AI phone answering that qualifies callers and books calendar slots 24/7.',
      desc: 'Never lose a high-value customer to voicemail during busy hours or after-hours. Sub-600ms conversational latency telephony AI answers questions, quotes ballparks, and books appointments right on your calendar.',
      metrics: 'Sub-600ms conversational latency · 24/7/365 availability · Zero missed calls'
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
          <div style={{ maxWidth: '1000px', margin: '0 auto 36px', textAlign: 'center' }}>
            <div className="badge" style={{ marginBottom: '12px' }}>Interactive Agent Console</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '14px' }}>
              Experience Our Autonomous Agents Live
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
              Watch live screen recordings and workflow demos. Switch between agents to see instant execution streams.
            </p>
          </div>

          <AgentShowcase activeTab={activeTab} onTabChange={setActiveTab} />
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
