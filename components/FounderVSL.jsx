'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  User, 
  Zap,
  Layers,
  Bot
} from 'lucide-react';

export default function FounderVSL() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18); // 18% progress mockup default
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { time: '0:00', label: 'The Problem with Page Builders', desc: 'Why slow bloated WordPress templates lose 70% of potential calls.' },
    { time: '1:45', label: 'Our 3 Specialized Capabilities', desc: 'Sub-0.8s Next.js engineering, pre-launch Local SEO, and 24/7 AI agents.' },
    { time: '3:30', label: 'How We Build & Deploy in Days', desc: 'Our 5-step zero-fluff delivery pipeline and live client architecture.' },
    { time: '5:10', label: 'Guaranteed 30-Day Warranty', desc: 'What happens after launch — full optimization & zero-downtime support.' }
  ];

  // Simulated playback timer when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setProgress(Math.max(0, Math.min(100, pos * 100)));
  };

  return (
    <section className="founder-vsl-section" id="founder-vsl">
      {/* Radiant Floating Background Ambient Shade (matches 3D card ambient atmosphere) */}
      <div className="vsl-ambient-shade" />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-head" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: '800px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={13} style={{ color: 'var(--yellow)' }} />
            Founder Briefing &amp; Brand Overview
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 12px' }}>
            Who We Are &amp; <span style={{ color: 'var(--yellow)' }}>How We Build Differently.</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '15.5px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            A 5-minute unfiltered walkthrough from our founder on why we reject generic templates, how our 3 core pillars work, and the exact software pipeline we engineer for high-growth businesses.
          </p>
        </div>

        {/* 16:9 Landscape Video Panel with Floating Hover Elevation */}
        <div className="vsl-landscape-wrapper">
          <div 
            className={`vsl-landscape-panel ${isPlaying ? 'is-playing' : ''}`}
            onClick={togglePlay}
          >
            {/* Cinematic Video Background Stage & Poster */}
            <div className="vsl-poster-canvas">
              {/* Dark Gradient Backdrop with Ambient Grid */}
              <div className="vsl-canvas-grid" />

              {/* Founder Video Simulation Graphic / Studio Atmosphere */}
              <div className="vsl-studio-graphics">
                {/* Glowing Aura Spheres */}
                <div className="vsl-glow-orb-left" />
                <div className="vsl-glow-orb-right" />

                {/* Simulated Audio Visualizer Wavebars (animates when playing) */}
                {isPlaying && (
                  <div className="vsl-audio-waves">
                    {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 45, 85, 60].map((h, i) => (
                      <span 
                        key={i} 
                        className="wave-bar" 
                        style={{ 
                          height: `${h}%`,
                          animationDelay: `${i * 0.08}s` 
                        }} 
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Video Header Overlay: Founder Identification Badge */}
              <div className="vsl-top-bar" onClick={(e) => e.stopPropagation()}>
                <div className="founder-badge">
                  <div className="founder-avatar-wrap">
                    <span className="founder-initials">M</span>
                    <span className="founder-live-dot" />
                  </div>
                  <div>
                    <div className="founder-name">Mihil • Founder Introduction &amp; Walkthrough</div>
                    <div className="founder-title">Brand Story &amp; What We Do • 1080p 60FPS</div>
                  </div>
                </div>

                <div className="vsl-format-pill">
                  <span className="rec-dot" />
                  <span>FOUNDER VSL</span>
                </div>
              </div>

              {/* Center Play / Pause Indicator */}
              <div className="vsl-center-trigger">
                <div className={`vsl-play-orb ${isPlaying ? 'playing' : ''}`}>
                  {isPlaying ? (
                    <Pause size={28} style={{ color: '#000' }} />
                  ) : (
                    <Play size={28} style={{ color: '#000', marginLeft: '3px' }} />
                  )}
                </div>
                {!isPlaying && (
                  <div className="vsl-trigger-caption">
                    <span className="badge-text">Click to Play Briefing</span>
                    <span className="time-text">5:48 HD</span>
                  </div>
                )}
              </div>

              {/* Bottom Video Controls Scrubber Bar */}
              <div className="vsl-bottom-controls" onClick={(e) => e.stopPropagation()}>
                {/* Interactive Timeline Scrubber */}
                <div className="vsl-scrubber-track" onClick={handleSeek}>
                  <div 
                    className="vsl-scrubber-fill" 
                    style={{ width: `${progress}%` }} 
                  />
                  <div 
                    className="vsl-scrubber-thumb" 
                    style={{ left: `${progress}%` }} 
                  />
                </div>

                {/* Control Action Buttons */}
                <div className="vsl-controls-row">
                  <div className="controls-left">
                    <button 
                      onClick={togglePlay} 
                      className="vsl-ctrl-btn"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                    </button>
                    <span className="vsl-timestamp">
                      {isPlaying ? `0${Math.floor((progress / 100) * 5)}:${Math.floor(((progress / 100) * 348) % 60).toString().padStart(2, '0')}` : '01:05'} / 05:48
                    </span>
                  </div>

                  <div className="controls-right">
                    <button 
                      onClick={() => setIsMuted(!isMuted)} 
                      className="vsl-ctrl-btn"
                      aria-label="Toggle mute"
                    >
                      {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                    </button>
                    <button 
                      className="vsl-ctrl-btn"
                      aria-label="Fullscreen"
                      onClick={() => alert("Full screen playback mode")}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Key Takeaways & Chapter Markers Bar */}
        <div className="vsl-chapters-container">
          <div className="vsl-chapters-header">
            <span className="cap">Video Chapters &amp; Key Topics</span>
            <span className="total-runtime">4 Major Milestones</span>
          </div>

          <div className="vsl-chapters-grid">
            {chapters.map((ch, idx) => (
              <div 
                key={idx} 
                className={`vsl-chapter-card ${activeChapter === idx ? 'active' : ''}`}
                onClick={() => {
                  setActiveChapter(idx);
                  setProgress((idx / chapters.length) * 100 + 5);
                  setIsPlaying(true);
                }}
              >
                <div className="chapter-timestamp">
                  <Clock size={12} />
                  <span>{ch.time}</span>
                </div>
                <h4>{ch.label}</h4>
                <p>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="vsl-cta-strip">
          <div className="vsl-cta-text">
            <h3>Ready to Build Your Revenue Engine?</h3>
            <p>Skip the agency runaround. Speak directly with our lead engineer about your project.</p>
          </div>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
            Book a Technical Call <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
