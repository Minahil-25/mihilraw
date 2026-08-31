'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Websites', href: '/websites' },
    { label: 'Automations', href: '/automations' },
    { label: 'Web Apps', href: '/webapps' },
    { label: 'Packages', href: '/#packages' },
    { label: 'Process', href: '/#process' },
  ];

  return (
    <nav className="nav-bar">
      <div className="wrap">
        <Link href="/" className="logo">
          mihilraw<span></span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <Link href="/contact" className="btn btn-primary">
            Start a project <ArrowRight size={15} />
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: '#0d0d0f',
          borderBottom: '1px solid var(--border)',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: pathname === item.href ? 'var(--yellow)' : 'var(--text)',
                fontWeight: 600,
                fontSize: '15px'
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ marginTop: '8px', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Start a project
          </Link>
        </div>
      )}
    </nav>
  );
}
