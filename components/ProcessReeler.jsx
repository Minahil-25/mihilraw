'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Search, 
  Bot, 
  Rocket
} from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

const processSteps = [
  {
    id: '01',
    num: '01',
    phase: 'PHASE 01',
    tag: 'ARCHITECTURE',
    title: 'Customer Intent Architecture',
    subtitle: 'Page blueprints built around buyer psychology',
    description: 'We map the exact pages your customers and Google need, engineering layouts around high-intent local search queries.',
    icon: Layers,
    color: '#f5c518',
    metrics: [
      { label: 'Intent Accuracy', val: '99.4%' },
      { label: 'Blueprint Delivery', val: '48h' }
    ],
    features: ['High-Intent Flow', 'Figma UX Blueprint', 'Buyer Journey'],
    cardMedia: {
      headline: 'Searcher Intent Matrix',
      status: 'Engineered for Conversion',
      badge: 'Intent-First'
    }
  },
  {
    id: '02',
    num: '02',
    phase: 'PHASE 02',
    tag: 'ENGINEERING',
    title: 'Hand-Coded Next.js Build',
    subtitle: 'Sub-0.8s load speed with zero page-builder bloat',
    description: 'Hand-coded, mobile-first with Next.js 16 and semantic HTML5. No slow page builders losing you same-day search calls.',
    icon: Zap,
    color: '#3b82f6',
    metrics: [
      { label: 'Core Web Vitals', val: '95+ Guaranteed' },
      { label: 'Load Time', val: '< 0.8s' }
    ],
    features: ['Semantic HTML5', 'Next.js 16 App Router', 'Zero Bloat'],
    cardMedia: {
      headline: 'Next.js 16 Core Engine',
      status: 'Sub-0.8s Hydration',
      badge: 'Ultra Fast'
    }
  },
  {
    id: '03',
    num: '03',
    phase: 'PHASE 03',
    tag: 'LOCAL DOMINANCE',
    title: 'Local SEO & Map-Pack Signals',
    subtitle: 'Rank on Google Maps before launch date',
    description: 'Google Business Profile optimized, geotagged metadata, LocalBusiness schema injection, and review generation wired in.',
    icon: Search,
    color: '#10b981',
    metrics: [
      { label: 'Map-Pack Signals', val: '100% Wired' },
      { label: 'Local Visibility', val: 'Top 3' }
    ],
    features: ['Google Business Sync', 'Schema JSON-LD', 'Map-Pack Signals'],
    cardMedia: {
      headline: 'Google Maps Top 3 Engine',
      status: 'Signals Active Pre-Launch',
      badge: 'Local SEO'
    }
  },
  {
    id: '04',
    num: '04',
    phase: 'PHASE 04',
    tag: 'INTELLIGENT AGENTS',
    title: 'Automate & AI Lead Agents',
    subtitle: 'Never miss a lead with 60s quoting bots & voice AI',
    description: 'Missed-call instant SMS text-back, 60-second automated quoting bots, and 24/7 AI voice handlers that capture leads on autopilot.',
    icon: Bot,
    color: '#a855f7',
    metrics: [
      { label: 'Lead Response', val: '< 60 sec' },
      { label: 'Time Saved/Wk', val: '20+ hrs' }
    ],
    features: ['Missed-Call SMS', 'AI Voice Responder', 'CRM Webhook Sync'],
    cardMedia: {
      headline: '24/7 Autonomous Agent',
      status: 'Instant Lead Capture',
      badge: 'AI Agents'
    }
  },
  {
    id: '05',
    num: '05',
    phase: 'PHASE 05',
    tag: 'DEPLOYMENT & REVENUE',
    title: 'Live, Ranking & Scaling',
    subtitle: 'Ships live ranking locally and already automated',
    description: 'You get a revenue asset that is already ranking on Google, already converting traffic, and already running on autopilot with warranty.',
    icon: Rocket,
    color: '#f5c518',
    metrics: [
      { label: 'Uptime SLA', val: '99.99%' },
      { label: 'Optimization', val: '30 Days Inc.' }
    ],
    features: ['Zero-Downtime Deploy', 'Instant Indexing', 'Full Warranty'],
    cardMedia: {
      headline: 'Production Revenue Engine',
      status: 'Live & Ranking',
      badge: 'Live Asset'
    }
  }
];

export default function ProcessReeler() {
  const containerRef = useRef(null);
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  // Calculate responsive card dimensions to guarantee full vertical visibility
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? Math.min(windowWidth - 48, 330) : Math.min(360, Math.max(300, windowWidth * 0.26));
  const cardGap = isMobile ? 16 : 28;
  const pairWidth = isMobile ? cardWidth : cardWidth * 2 + cardGap;
  const initialOffset = (windowWidth - pairWidth) / 2;
  const totalTravel = (processSteps.length - (isMobile ? 1 : 2)) * (cardWidth + cardGap);
  const finalOffset = initialOffset - totalTravel;

  const translateX = useTransform(
    smoothProgress,
    [0, 1],
    [initialOffset, finalOffset]
  );

  const toggleAudio = (idx, e) => {
    e.stopPropagation();
    setActiveAudioIndex(activeAudioIndex === idx ? null : idx);
  };

  return (
    <section 
      ref={containerRef} 
      className="process-reeler-scroll-section"
      id="process"
      style={{
        position: 'relative',
        height: '320vh',
        background: '#0a0a0b'
      }}
    >
      {/* Sticky Viewport Container */}
      <div 
        className="process-sticky-corridor"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          maxHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0 16px',
          background: 'radial-gradient(ellipse 1100px 650px at 50% 40%, rgba(26, 26, 30, 0.6) 0%, rgba(10, 10, 11, 1) 100%)',
          zIndex: 10
        }}
      >
        {/* Background Ambient Glow Corridor */}
        <div className="process-ambient-backdrop" />

        {/* Section Header (Compact & Proportional) */}
        <div style={{ textAlign: 'center', zIndex: 20, maxWidth: '820px', width: '100%', padding: '0 20px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '4px', fontSize: '11px' }}>
            How a project runs
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 4px', lineHeight: 1.2 }}>
            Five steps, in order — <span style={{ color: 'var(--yellow)' }}>nothing skipped.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '13.5px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.4 }}>
            Scroll down to walk through the pipeline. Front cards pass out as milestones deploy.
          </p>
        </div>

        {/* Horizontal Sliding Cards Viewport Track */}
        <div 
          className="reeler-track-viewport"
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'visible',
            zIndex: 15,
            margin: 'auto 0'
          }}
        >
          <motion.div
            className="reeler-track"
            style={{
              display: 'flex',
              gap: `${cardGap}px`,
              x: translateX,
              willChange: 'transform'
            }}
          >
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isPlaying = activeAudioIndex === idx;

              return (
                <div
                  key={step.id}
                  style={{
                    flex: `0 0 ${cardWidth}px`,
                    width: `${cardWidth}px`
                  }}
                >
                  <TiltCard
                    className="reeler-card"
                    tiltLimit={10}
                    scale={1.02}
                    perspective={1200}
                    spotlight={true}
                    style={{
                      width: '100%',
                      borderRadius: '24px',
                      background: 'linear-gradient(175deg, rgba(28, 28, 33, 0.95) 0%, rgba(14, 14, 17, 0.98) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 25px -10px rgba(245, 197, 24, 0.08)',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Card Inner Top Glow */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '140px',
                        background: `radial-gradient(circle at 50% 0%, ${step.color}22, transparent 70%)`,
                        pointerEvents: 'none'
                      }} 
                    />

                    {/* Top Header Bar */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        zIndex: 20,
                        marginBottom: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span 
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '100px',
                            padding: '3px 10px',
                            fontSize: '10.5px',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '0.05em'
                          }}
                        >
                          STEP {step.num}
                        </span>
                        <span 
                          style={{
                            color: 'var(--yellow)',
                            fontSize: '10.5px',
                            fontFamily: 'var(--font-mono)',
                            letterSpacing: '0.08em',
                            fontWeight: 600
                          }}
                        >
                          {step.phase}
                        </span>
                      </div>

                      {/* Sound/Interactive Toggle Pill */}
                      <button
                        onClick={(e) => toggleAudio(idx, e)}
                        aria-label="Toggle card insight"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isPlaying ? 'var(--yellow)' : 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: isPlaying ? '#000' : '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
                      </button>
                    </div>

                    {/* Middle Visual Stage Box */}
                    <div 
                      className="reeler-visual-stage"
                      style={{
                        position: 'relative',
                        height: '135px',
                        borderRadius: '14px',
                        background: 'linear-gradient(160deg, #18181c 0%, #0d0d10 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        overflow: 'hidden',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}
                    >
                      {/* Ambient Grid */}
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                          backgroundSize: '14px 14px',
                          opacity: 0.5
                        }} 
                      />

                      {/* Top Visual Pill */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5 }}>
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'rgba(0, 0, 0, 0.65)',
                            backdropFilter: 'blur(8px)',
                            border: `1px solid ${step.color}44`,
                            padding: '3px 8px',
                            borderRadius: '100px',
                            fontSize: '10.5px',
                            color: step.color,
                            fontWeight: 600
                          }}
                        >
                          <IconComp size={12} />
                          <span>{step.cardMedia.badge}</span>
                        </div>

                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '9.5px',
                            fontFamily: 'var(--font-mono)',
                            color: '#9a9a9f',
                            background: 'rgba(0, 0, 0, 0.6)',
                            padding: '2px 6px',
                            borderRadius: '5px'
                          }}
                        >
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                          ACTIVE
                        </div>
                      </div>

                      {/* Center Graphical Label */}
                      <div style={{ zIndex: 5, textAlign: 'center', margin: 'auto 0' }}>
                        <div 
                          style={{
                            fontSize: '14.5px',
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '-0.01em',
                            marginBottom: '2px'
                          }}
                        >
                          {step.cardMedia.headline}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                          {step.cardMedia.status}
                        </div>
                      </div>

                      {/* Bottom Key Metrics Strip */}
                      <div 
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '6px',
                          zIndex: 5
                        }}
                      >
                        {step.metrics.map((m, mIdx) => (
                          <div 
                            key={mIdx}
                            style={{
                              background: 'rgba(0, 0, 0, 0.6)',
                              border: '1px solid rgba(255, 255, 255, 0.06)',
                              borderRadius: '6px',
                              padding: '4px 8px',
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <span style={{ fontSize: '9px', color: '#888890', textTransform: 'uppercase' }}>{m.label}</span>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: step.color, fontFamily: 'var(--font-mono)' }}>{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Info Section (Fully Visible & Unclipped) */}
                    <div style={{ zIndex: 20 }}>
                      <div 
                        style={{
                          fontSize: '10.5px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--yellow)',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '4px'
                        }}
                      >
                        {step.tag}
                      </div>

                      <h3 
                        style={{
                          fontSize: '17.5px',
                          fontWeight: 700,
                          color: '#fff',
                          lineHeight: 1.25,
                          margin: '0 0 6px',
                          letterSpacing: '-0.015em'
                        }}
                      >
                        {step.title}
                      </h3>

                      <p 
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-dim)',
                          lineHeight: 1.45,
                          margin: '0 0 10px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Feature Capsules */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {step.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            style={{
                              fontSize: '10px',
                              fontFamily: 'var(--font-mono)',
                              padding: '2px 7px',
                              borderRadius: '5px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              color: '#d0d0d5'
                            }}
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Capsule Navigation & Progress Bar */}
        <div 
          style={{
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(20, 20, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '100px',
              padding: '5px 16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <span style={{ fontSize: '11px', color: '#9a9a9f', fontFamily: 'var(--font-mono)' }}>
              PIPELINE PROGRESS
            </span>
            
            {/* Scroll Indicator Capsule bar */}
            <div 
              style={{
                width: '56px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '100px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div 
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  scaleX: smoothProgress,
                  transformOrigin: 'left',
                  background: 'var(--yellow)',
                  borderRadius: '100px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
