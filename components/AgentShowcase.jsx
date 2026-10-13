'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Star, 
  Bot, 
  FileText, 
  Filter, 
  PhoneCall 
} from 'lucide-react';
import './AgentShowcase.css';

// 5 Agents requested by user:
// 1. Google Reviews Agent (Video 2 + Booking Thumbnail)
// 2. Chat Support Agent (Video 1 + Chat Support Thumbnail)
// 3. Quoting Agent (Placeholder)
// 4. Lead Generating Agent (Placeholder)
// 5. Voice Agent (Placeholder)
const AGENTS_LIST = [
  {
    id: 'google-reviews',
    title: 'Google Reviews Agent',
    icon: Star,
    badge: 'Reputation & Booking Engine',
    headline: 'Autonomously turn 5-star customer experiences into Google reviews & booked appointments.',
    desc: 'Informs customers of your real-time availability, lets them book appointments on their preferred date, and automatically directs satisfied clients to your Google Business Profile with a 1-tap review link.',
    metrics: '3.8x More 5-Star Reviews · Catches 100% of negative reviews before public posting',
    howItWorks: [
      'Triggers when a job/service is marked completed in your system and confirms next booking availability.',
      'Sends a non-pushy friendly SMS: "We are open for your slot — how was your experience with us today?"',
      'If score is 4 or 5: Instantly directs them to your Google Business Profile with a 1-tap review link.',
      'If score is 1 to 3: Diverts them to a private owner feedback form so you can resolve it first.',
      'AI automatically crafts thoughtful, keyword-rich owner responses for your 1-tap approval.'
    ],
    diagram: 'Job Completed → Booking Prompt → Sentiment Filter → [Google Map Review OR Private Resolution Form]',
    techComponents: ['n8n Engine', 'Google Business API', 'Twilio SMS', 'Calendar Webhook'],
    video: {
      webm: 'https://res.cloudinary.com/dy2y2aolp/video/upload/q_auto,f_webm/v1791747809/genraldemo-1.webm',
      mp4: 'https://res.cloudinary.com/dy2y2aolp/video/upload/q_auto,f_mp4/v1791747809/genraldemo-1.mp4'
    },
    thumbnail: 'https://res.cloudinary.com/dy2y2aolp/image/upload/v1791748584/Your_AI_Booking_Agent.png'
  },
  {
    id: 'chat-support',
    title: 'Chat Support Agent',
    icon: Bot,
    badge: '24/7 Live Concierge',
    headline: '24/7 autonomous chatbot that answers inquiries, qualifies leads, and syncs to your CRM.',
    desc: 'Connects directly to your website. Answers complex service questions using your custom knowledge base, captures verified contact details, and notifies your team in real time.',
    metrics: '<1s Response Time · 92% Autonomous Resolution · 24/7/365 Coverage',
    howItWorks: [
      'Engages inbound website visitors with instant conversational natural language understanding.',
      'Answers questions on pricing, turnaround times, and service areas based on your custom documentation.',
      'Captures visitor contact info and qualifies urgency, service scope, and timeline.',
      'Hands off seamlessly to human staff or books a calendar slot when requested.',
      'Logs entire conversation transcript directly into your CRM or Slack/WhatsApp channel.'
    ],
    diagram: 'Web Visitor → Knowledge AI → Lead Qualification → CRM / Live Escalation',
    techComponents: ['n8n AI Agent', 'OpenAI / Claude API', 'Vector Knowledge Base', 'CRM Webhook'],
    video: {
      webm: 'https://res.cloudinary.com/dy2y2aolp/video/upload/q_auto,f_webm/v1791747954/n8n-chatboard-agent_1.webm',
      mp4: 'https://res.cloudinary.com/dy2y2aolp/video/upload/q_auto,f_mp4/v1791747954/n8n-chatboard-agent_1.mp4'
    },
    thumbnail: 'https://res.cloudinary.com/dy2y2aolp/image/upload/f_auto/q_auto/AI_Chat_Support_Agent_Banner.png'
  },
  {
    id: 'quoting',
    title: 'Quoting Agent',
    icon: FileText,
    badge: 'Revenue Velocity',
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
    diagram: 'Web Lead/Email → AI Spec Parser → Rate Matrix → PDF Generator → Instant Email Delivery',
    techComponents: ['n8n Workflow', 'PDF Engine', 'Dynamic Pricing Matrix', 'Stripe Deposit Link'],
    video: null,
    thumbnail: null
  },
  {
    id: 'lead-generating',
    title: 'Lead Generating Agent',
    icon: Filter,
    badge: 'Pipeline Ingestion',
    headline: 'Scrape, verify, and enrich high-intent local business leads on complete autopilot.',
    desc: 'Stops leads from slipping through the cracks. Ingests leads instantly from every marketing channel, validates emails and phone numbers, scrubs duplicates, and pushes them straight into your operational CRM.',
    metrics: 'Instant webhook intake (< 2 seconds) · 100% duplicate elimination',
    howItWorks: [
      'Monitors incoming webhooks from Meta Ads, Google Ads, website forms, and partner directories.',
      'Performs carrier and HLR phone lookup to verify live mobile lines vs landlines.',
      'Enriches data with company information, social links, and geographical radius.',
      'Pushes cleanly formatted records directly into Airtable, HubSpot, GoHighLevel, or Google Sheets.'
    ],
    diagram: 'Multi-Channel Ingestion → Live Phone/Email Validation → CRM Deduplication → Auto-Assign',
    techComponents: ['n8n Pipeline', 'HLR Carrier Lookup', 'Enrichment API', 'CRM Integration'],
    video: null,
    thumbnail: null
  },
  {
    id: 'voice-agent',
    title: 'Voice Agent',
    icon: PhoneCall,
    badge: 'Telephony AI',
    headline: 'Natural conversational AI phone answering that qualifies callers and books calendar slots 24/7.',
    desc: 'Never lose a high-value customer to voicemail during busy hours or after-hours. Sub-600ms conversational latency telephony AI answers questions, quotes ballparks, and books appointments right on your calendar.',
    metrics: 'Sub-600ms conversational latency · 24/7/365 availability · Zero missed calls',
    howItWorks: [
      'Answers inbound missed calls within 2 rings with a warm, natural human-like voice.',
      'Answers questions on pricing, turnaround times, and service areas based on your custom knowledge base.',
      'Gathers customer details, address, and problem description.',
      'Books a confirmed inspection or appointment directly into your Google Calendar or CRM.',
      'Sends you an instant audio recording and executive transcript of the call.'
    ],
    diagram: 'Inbound Call → Twilio/Voice Engine → Live AI Conversation → Calendar Booking & SMS',
    techComponents: ['Twilio Telephony', 'Deepgram / ElevenLabs Voice', 'LLM Dialog Engine', 'Calendar Sync'],
    video: null,
    thumbnail: null
  }
];

export default function AgentShowcase({ activeTab: externalTab, onTabChange }) {
  const [internalTab, setInternalTab] = useState('google-reviews');
  const activeTab = externalTab !== undefined ? externalTab : internalTab;

  // Video playback controls state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [durationFormatted, setDurationFormatted] = useState('0:00');

  // DOM Refs
  const videoRef = useRef(null);
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);
  const tabsRef = useRef({});
  const ripplesRef = useRef([]);
  const animFrameId = useRef(null);

  const currentAgent = AGENTS_LIST.find((a) => a.id === activeTab) || AGENTS_LIST[0];

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds) || !seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --------------------------------------------------------------------------
  // WATER RIPPLE ENGINE (Simulates dropping a rock in water on tab change)
  // --------------------------------------------------------------------------
  const triggerRipple = useCallback((originX, originY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newWave = {
      x: originX,
      y: originY,
      birth: performance.now(),
      maxDuration: 1350,
      speed: 480,
      frequency: 0.045,
      maxRadius: Math.max(canvas.width, canvas.height) * 1.3
    };

    ripplesRef.current.push(newWave);

    if (!animFrameId.current) {
      renderRipples();
    }
  }, []);

  const renderRipples = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = performance.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ripplesRef.current = ripplesRef.current.filter((wave) => {
      const elapsed = now - wave.birth;
      return elapsed < wave.maxDuration;
    });

    if (ripplesRef.current.length === 0) {
      animFrameId.current = null;
      return;
    }

    ripplesRef.current.forEach((wave) => {
      const elapsed = now - wave.birth;
      const progressRatio = elapsed / wave.maxDuration;
      const currentRadius = (elapsed / 1000) * wave.speed;
      const envelope = Math.pow(1 - progressRatio, 1.8);

      const ringCount = 4;
      const ringSpacing = 34;

      for (let i = 0; i < ringCount; i++) {
        const ringR = currentRadius - i * ringSpacing;
        if (ringR <= 0) continue;

        const ringProgress = Math.max(0, 1 - (ringR / wave.maxRadius));
        const ringAlpha = envelope * ringProgress * 0.55 * (1 - i * 0.18);

        if (ringAlpha <= 0.005) continue;

        // Wave Crest (Bright refraction sheen / caustic highlight)
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, ringR, 0, Math.PI * 2);
        ctx.lineWidth = Math.max(1.5, 5 * (1 - progressRatio));
        ctx.strokeStyle = `rgba(255, 255, 255, ${ringAlpha * 0.85})`;
        ctx.stroke();

        // Wave Ambient Glow (Golden amber water dispersion)
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, ringR + 2, 0, Math.PI * 2);
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = `rgba(245, 197, 24, ${ringAlpha * 0.35})`;
        ctx.stroke();

        // Wave Trough (Subtle refraction dark shadow)
        if (ringR > 4) {
          ctx.beginPath();
          ctx.arc(wave.x, wave.y, ringR - 2.5, 0, Math.PI * 2);
          ctx.lineWidth = 2;
          ctx.strokeStyle = `rgba(0, 0, 0, ${ringAlpha * 0.4})`;
          ctx.stroke();
        }
      }

      // Initial rock drop splash bloom
      if (progressRatio < 0.22) {
        const splashProgress = progressRatio / 0.22;
        const splashR = 24 * splashProgress;
        const splashAlpha = (1 - splashProgress) * 0.65;

        const grad = ctx.createRadialGradient(wave.x, wave.y, 0, wave.x, wave.y, splashR);
        grad.addColorStop(0, `rgba(255, 255, 255, ${splashAlpha})`);
        grad.addColorStop(0.5, `rgba(245, 197, 24, ${splashAlpha * 0.5})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, splashR, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    animFrameId.current = requestAnimationFrame(renderRipples);
  }, []);

  // Handle Tab Change (both content and video update together)
  const handleTabChange = (agentId) => {
    if (agentId === activeTab) return;
    if (onTabChange) {
      onTabChange(agentId);
    } else {
      setInternalTab(agentId);
    }
    setIsPlaying(true);
    setProgress(0);

    // Calculate ripple origin from clicked tab coordinate
    const tabEl = tabsRef.current[agentId];
    const vpEl = viewportRef.current;
    if (tabEl && vpEl) {
      const tabRect = tabEl.getBoundingClientRect();
      const vpRect = vpEl.getBoundingClientRect();
      const relativeX = tabRect.left + tabRect.width / 2 - vpRect.left;
      triggerRipple(Math.max(20, Math.min(vpRect.width - 20, relativeX)), 0);
    } else if (vpEl) {
      const vpRect = vpEl.getBoundingClientRect();
      triggerRipple(vpRect.width / 2, 0);
    }
  };

  // Sync ripple if externalTab changes from outside (e.g. bottom grid button click)
  useEffect(() => {
    if (externalTab !== undefined) {
      setIsPlaying(true);
      setProgress(0);
      const tabEl = tabsRef.current[externalTab];
      const vpEl = viewportRef.current;
      if (tabEl && vpEl) {
        const tabRect = tabEl.getBoundingClientRect();
        const vpRect = vpEl.getBoundingClientRect();
        const relativeX = tabRect.left + tabRect.width / 2 - vpRect.left;
        triggerRipple(Math.max(20, Math.min(vpRect.width - 20, relativeX)), 0);
      }
    }
  }, [externalTab, triggerRipple]);

  // Video Event Handlers
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
      setCurrentTimeFormatted(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDurationFormatted(formatTime(videoRef.current.duration));
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = percentage * videoRef.current.duration;
    setProgress(percentage * 100);
  };

  // Canvas Resize Observer
  useEffect(() => {
    const vpEl = viewportRef.current;
    const canvas = canvasRef.current;
    if (!vpEl || !canvas) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.resetTransform();
          ctx.scale(dpr, dpr);
        }
      }
    });

    resizeObserver.observe(vpEl);

    return () => {
      resizeObserver.disconnect();
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div className="agent-showcase-wrapper">
      {/* ====================================================================
          1. THE SINGLE TOP NAVIGATION BAR (Switches both Content and Video)
          ==================================================================== */}
      <nav 
        className="agent-showcase-nav" 
        role="tablist" 
        aria-label="5 Autonomous AI Agents Navigation"
      >
        {AGENTS_LIST.map((agent) => {
          const IconComp = agent.icon;
          const isActive = activeTab === agent.id;
          return (
            <button
              key={agent.id}
              ref={(el) => (tabsRef.current[agent.id] = el)}
              role="tab"
              id={`agent-tab-${agent.id}`}
              aria-selected={isActive}
              aria-controls={`agent-panel-${agent.id}`}
              className={`agent-showcase-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleTabChange(agent.id)}
            >
              <IconComp size={16} className="tab-icon" />
              <span>{agent.title}</span>
            </button>
          );
        })}
      </nav>

      {/* ====================================================================
          2. CONTENT INFORMATION CARD (ON FRONT / FIRST)
          ==================================================================== */}
      <section 
        className="agent-info-card"
        role="tabpanel"
        id={`agent-panel-${currentAgent.id}`}
        aria-labelledby={`agent-tab-${currentAgent.id}`}
      >
        <div className="agent-info-grid">
          {/* Left Column: Details & Sequence */}
          <div>
            <div className="badge" style={{ marginBottom: '14px' }}>
              {currentAgent.badge}
            </div>
            <h3 className="agent-headline">
              {currentAgent.headline}
            </h3>
            <p className="agent-description">
              {currentAgent.desc}
            </p>

            <div className="agent-metric-box">
              <Zap size={16} />
              <span><strong>Performance Metric:</strong> {currentAgent.metrics}</span>
            </div>

            <div className="agent-sequence-label">Execution Sequence:</div>
            <ul className="agent-sequence-list">
              {currentAgent.howItWorks.map((step, idx) => (
                <li key={idx} className="agent-sequence-item">
                  <CheckCircle2 size={16} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Architecture Runtime & Deploy CTA */}
          <div className="agent-runtime-card">
            <div className="agent-runtime-header">
              <span style={{ color: 'var(--text-dim)', fontSize: '12px' }}>
                // ARCHITECTURE RUNTIME
              </span>
              <span style={{ color: 'var(--yellow)', fontSize: '11px' }}>
                ● LIVE WEBHOOK PIPELINE
              </span>
            </div>

            <div style={{ color: 'var(--text-dimmer)', marginBottom: '10px' }}>
              /* Logic flow */
            </div>
            <div className="agent-runtime-diagram">
              {currentAgent.diagram}
            </div>

            <div style={{ color: 'var(--text-dimmer)', marginBottom: '10px' }}>
              /* Tech Components */
            </div>
            <div className="agent-tech-pills">
              {currentAgent.techComponents.map((t) => (
                <span key={t} className="agent-tech-pill">
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
      </section>

      {/* ====================================================================
          3. INTERACTIVE VIDEO SECTION (AT THE BOTTOM)
          ==================================================================== */}
      <div 
        className="agent-video-viewport" 
        ref={viewportRef}
      >
        {currentAgent.video ? (
          <div className="agent-video-media-wrap">
            <video
              key={activeTab} // CRITICAL REACT OPTIMIZATION: Immediate cache flush & stream swap
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster={currentAgent.thumbnail}
              className="agent-video-player"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={currentAgent.video.webm} type="video/webm" />
              <source src={currentAgent.video.mp4} type="video/mp4" />
              Your browser does not support HTML5 video streaming.
            </video>

            {/* Clean, Simple Video Controls: Play/Pause, Mute, Scrubber Bar */}
            <div className="agent-video-controls">
              {/* Scrubbable Playing Bar */}
              <div 
                className="agent-video-progress-wrap" 
                onClick={handleSeek}
                title="Seek video"
              >
                <div className="agent-video-progress-track">
                  <div 
                    className="agent-video-progress-fill" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="agent-video-actions-row">
                <div className="agent-video-btn-group">
                  <button 
                    onClick={togglePlay} 
                    className="agent-control-btn"
                    title={isPlaying ? "Pause video" : "Play video"}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button 
                    onClick={toggleMute} 
                    className="agent-control-btn"
                    title={isMuted ? "Unmute audio" : "Mute audio"}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <span className="agent-video-time">
                    {currentTimeFormatted} / {durationFormatted}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Modern Dashed Placeholder for Agents with Video In Rendering (Tabs 3, 4, 5) */
          <div className="agent-video-placeholder">
            <div className="agent-placeholder-text">
              🤖 {currentAgent.title} Demo — Backend Engine Active, Video Uploading Soon.
            </div>
            <p className="agent-placeholder-subtext">
              {currentAgent.desc}
            </p>
            <div className="agent-placeholder-chip">
              <span>● n8n / API Pipeline Active</span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <span style={{ color: '#888' }}>Asset Rendering</span>
            </div>
          </div>
        )}

        {/* Water Ripple Effect Canvas Overlay */}
        <canvas 
          ref={canvasRef} 
          className="agent-ripple-canvas" 
          aria-hidden="true" 
        />
      </div>
    </div>
  );
}
