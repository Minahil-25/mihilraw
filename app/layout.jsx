import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'mihilraw | design, build, rank, automate',
  description: 'mihilraw builds custom hand-coded websites, high-speed business automations, and scalable web apps that rank, convert, and grow without breaking.',
  keywords: 'web design, web development, local SEO, business automations, n8n, AI voice agents, Task Earn Pro, vibe code fix, MVP development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
