'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Layers, 
  Wrench, 
  Flame, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Database, 
  Lock, 
  Cpu, 
  AlertTriangle,
  Code2
} from 'lucide-react';

export default function WebAppsPage() {
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '80px 0 50px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '820px' }}>
            <div className="eyebrow">Fullstack Systems &amp; MVP Engineering</div>
            <h1 style={{ fontSize: 'clamp(38px, 5vw, 62px)', fontWeight: 800, lineHeight: 1.08, marginBottom: '24px' }}>
              We build custom web apps like <span style={{ color: 'var(--yellow)' }}>Task Earn Pro</span>, and rescue broken &quot;vibe-coded&quot; prototypes.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '36px' }}>
              Whether you need a high-performance SaaS MVP shipped in 3 weeks, a custom internal workflow system, or emergency surgical refactoring on an AI-generated prototype that won&apos;t scale, we build software that holds up under real production traffic.
            </p>
            <div className="cta-row">
              <Link href="/contact?service=webapp" className="btn btn-primary btn-lg">
                Build My Web App / MVP <ArrowRight size={16} />
              </Link>
              <a href="#vibe-code" className="btn btn-ghost btn-lg">
                Fix My Vibe-Coded App ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY: TASK EARN PRO */}
      <section style={{ padding: '40px 0 80px' }} id="taskearn">
        <div className="wrap">
          <div style={{
            background: 'linear-gradient(165deg, #161619 0%, #0d0d10 70%, #050507 100%)',
            border: '1px solid var(--border-hi)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge">Featured Flagship Build</span>
                  <span className="tag" style={{ margin: 0 }}>Fullstack SaaS Platform</span>
                </div>

                <h2 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, marginBottom: '18px' }}>
                  Task Earn Pro: Operational CRM &amp; Worker Rewards Architecture
                </h2>

                <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: 1.65, marginBottom: '24px' }}>
                  A ground-up SaaS application built for high-throughput distributed task dispatching, real-time worker payout calculations, role-based admin oversight, and verifiable audit logging.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--yellow)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginBottom: '4px' }}>REAL-TIME QUEUE</div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Zero-latency WebSockets state syncing</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--yellow)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginBottom: '4px' }}>FINANCIAL ENGINE</div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Stripe Connect + automated escrow splits</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--yellow)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginBottom: '4px' }}>SECURITY &amp; RBAC</div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Multi-tenant row-level database security</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--yellow)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginBottom: '4px' }}>ADMIN CONTROL</div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>Instant audit logs and dispute resolution tools</div>
                  </div>
                </div>

                <Link href="/contact?project=Task+Earn+Pro" className="btn btn-primary">
                  Inquire About Similar SaaS Builds <ArrowRight size={15} />
                </Link>
              </div>

              {/* ARCHITECTURE CARD */}
              <div style={{
                background: '#07070a',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '30px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px'
              }}>
                <div style={{ color: 'var(--yellow)', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={16} /> // TASK EARN PRO STACK
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-dim)' }}>
                  <div>
                    <span style={{ color: 'var(--text)' }}>Framework:</span> Next.js App Router (React 19 Server Components)
                  </div>
                  <div>
                    <span style={{ color: 'var(--text)' }}>Database:</span> PostgreSQL with Supabase Row Level Security (RLS)
                  </div>
                  <div>
                    <span style={{ color: 'var(--text)' }}>Auth:</span> Multi-provider OAuth + Magic Links + MFA
                  </div>
                  <div>
                    <span style={{ color: 'var(--text)' }}>Payments:</span> Stripe Billing, Webhook idempotency, Payouts
                  </div>
                  <div>
                    <span style={{ color: 'var(--text)' }}>State:</span> Server Actions + optimistic UI updates
                  </div>
                  <div>
                    <span style={{ color: 'var(--text)' }}>Hosting:</span> Edge Network deployment with global latency &lt; 40ms
                  </div>
                </div>

                <div style={{
                  marginTop: '24px',
                  padding: '12px 14px',
                  background: 'rgba(245, 197, 24, 0.08)',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  color: 'var(--yellow)',
                  fontSize: '12px'
                }}>
                  ✅ Shipped in 21 days from blank repo to paying users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SERVICE: FIXING VIBE-CODED APPS & WEBSITES */}
      <section style={{ background: 'rgba(18,18,21,0.5)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '90px 0' }} id="vibe-code">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow" style={{ color: '#ff6b6b' }}>Emergency Engineering Service</div>
            <h2>Fixing &amp; Refactoring &quot;Vibe-Coded&quot; Apps &amp; Websites</h2>
            <p>
              Did you use Cursor, v0, Lovable, Bolt.new, or ChatGPT to build an initial prototype, and now it&apos;s a tangled knot of runtime bugs, infinite loops, and unexplainable database errors? We step in and rescue it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px' }}>
              <div style={{ color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '12px' }}>
                <AlertTriangle size={18} /> The &quot;Vibe Coding&quot; Wall
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: 1.6 }}>
                AI code generators are incredible for the first 80%, but catastrophic for the last 20%. They duplicate state, produce phantom API calls, skip edge cases, and leak sensitive environment variables.
              </p>
            </div>

            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px' }}>
              <div style={{ color: 'var(--yellow)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '12px' }}>
                <Wrench size={18} /> Our Surgical Refactoring
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: 1.6 }}>
                We don&apos;t throw away your progress. We inspect your git history, isolate the working UI components, rewrite the brittle backend hooks, normalize your database schema, and seal security holes.
              </p>
            </div>

            <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px' }}>
              <div style={{ color: 'var(--yellow)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '12px' }}>
                <ShieldCheck size={18} /> Production Hardening
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: 1.6 }}>
                Add automated test coverage, proper type safety, secure auth flows, rate limiting, and a clean Git repository your future developers can actually understand and expand.
              </p>
            </div>
          </div>

          {/* CODE BEFORE VS AFTER VISUAL */}
          <div className="rescue-grid">
            <div className="code-box bad">
              <div className="label" style={{ color: '#ff6b6b' }}>
                <AlertTriangle size={14} /> FRAGILE VIBE-CODED PROTOTYPE
              </div>
              <pre style={{ margin: 0, overflowX: 'auto' }}>
{`// ❌ Spaghetti useEffect soup & unauthenticated API
useEffect(() => {
  fetch('/api/users/all') // No auth checks!
    .then(r => r.json())
    .then(d => {
      setUsers(d); // Causes re-render loop
      localStorage.setItem('user_secret', d.token);
    });
}, [users]); // Infinite API flood!
// 12 redundant context providers
// Broken Supabase foreign key relationships`}
              </pre>
            </div>

            <div className="code-box good">
              <div className="label" style={{ color: 'var(--yellow)' }}>
                <CheckCircle2 size={14} /> MIHILRAW REFACTORED PRODUCTION CODE
              </div>
              <pre style={{ margin: 0, overflowX: 'auto' }}>
{`// ✅ Next.js Server Action + Supabase RLS Policy
export async function getVerifiedUserData() {
  const supabase = await createServerClient();
  const { data: { user }, error: authErr } = await supabase.auth.getUser();
  if (!user || authErr) throw new UnauthorizedError();

  // Scoped query secured by database Row-Level Security
  return await db.users.findUnique({
    where: { id: user.id },
    select: { id: true, role: true, profile: true }
  });
}`}
              </pre>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/contact?service=vibe-code-rescue" className="btn btn-primary btn-lg">
              Get an Emergency Code Review &amp; Rescue Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOM INTERNAL BUSINESS SYSTEMS */}
      <section style={{ padding: '90px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Enterprise Scalability</div>
            <h2>Custom Internal Systems That Replace Clunky Off-The-Shelf SaaS</h2>
            <p>Off-the-shelf software charges per user and forces you into rigid workflows. We build tools that mold to how you actually operate.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            <div className="step-card">
              <div className="num">01</div>
              <h3>Client Portals &amp; Work Delivery</h3>
              <p>Branded portals where clients track milestones, upload assets, approve deliverables, and pay invoices without messy email threads.</p>
            </div>

            <div className="step-card">
              <div className="num">02</div>
              <h3>Inventory &amp; Dispatch Dashboards</h3>
              <p>Real-time fleet tracking, parts inventory alerts, job assignment algorithms, and barcode/QR scanning directly in the browser.</p>
            </div>

            <div className="step-card">
              <div className="num">03</div>
              <h3>Automated Billing &amp; Invoicing Engines</h3>
              <p>Self-generating invoices mapped to complex tiered commission rules, multi-party payouts, and real-time reconciliation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '40px 0 90px' }}>
        <div className="wrap">
          <div style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border-hi)',
            borderRadius: 'var(--radius-lg)',
            padding: '50px',
            textAlign: 'center'
          }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Engineering Partner</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
              Have an app idea or a codebase that needs saving?
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-dim)' }}>
              Speak directly with an engineer, not a salesperson. We will audit your architecture and give you an honest technical plan.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?service=webapp" className="btn btn-primary btn-lg">
                Discuss Your Web App Project <ArrowRight size={16} />
              </Link>
              <Link href="/#packages" className="btn btn-ghost btn-lg">
                View Pricing &amp; Package Tiers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
