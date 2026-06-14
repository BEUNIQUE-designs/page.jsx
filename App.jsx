import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Initialize EmailJS with your public key
emailjs.init('dvUl0DWmSQXKchem0');

export default function JudgedLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Send email via EmailJS
      emailjs.send('service_rfmkx0i', '__ejs-test-mail-service__', {
        to_email: email,
        message: `New waitlist signup: ${email}`
      }).then(() => {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000);
      }).catch((error) => {
        console.error('Email send failed:', error);
        alert('Something went wrong. Try again!');
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 0, 110, 0.15) 25%, rgba(255, 0, 110, 0.15) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.15) 75%, rgba(255, 0, 110, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 110, 0.15) 25%, rgba(255, 0, 110, 0.15) 26%, transparent 27%, transparent 74%, rgba(255, 0, 110, 0.15) 75%, rgba(255, 0, 110, 0.15) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating neon orbs */}
      <div className="fixed top-20 left-20 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none animate-pulse" style={{ background: 'radial-gradient(circle, #FF006E, transparent)' }}></div>
      <div className="fixed bottom-40 right-32 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none animate-pulse" style={{ background: 'radial-gradient(circle, #00D9FF, transparent)' }}></div>
      <div className="fixed top-1/2 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #39FF14, transparent)', animation: 'float 6s ease-in-out infinite' }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes neon-flicker {
          0%, 100% { text-shadow: 0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 30px #FF006E; }
          50% { text-shadow: 0 0 5px #FF006E, 0 0 10px #FF006E; }
        }
        @keyframes pulse-neon {
          0%, 100% { box-shadow: 0 0 20px #FF006E, inset 0 0 20px rgba(255, 0, 110, 0.3); }
          50% { box-shadow: 0 0 40px #FF006E, inset 0 0 40px rgba(255, 0, 110, 0.5); }
        }
        .glitch {
          animation: glitch 0.3s infinite;
          position: relative;
        }
        .glitch::before {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          top: -2px;
          color: #00D9FF;
          opacity: 0.7;
          z-index: -1;
        }
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          top: 2px;
          color: #39FF14;
          opacity: 0.7;
          z-index: -1;
        }
        .neon-text {
          color: #FF006E;
          text-shadow: 0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 30px rgba(255, 0, 110, 0.8);
        }
        .neon-border {
          border: 2px solid #FF006E;
          box-shadow: 0 0 20px rgba(255, 0, 110, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.1);
        }
        .neon-cyan {
          color: #00D9FF;
          text-shadow: 0 0 10px #00D9FF, 0 0 20px #00D9FF;
        }
        .neon-lime {
          color: #39FF14;
          text-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 text-center">
        <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-none" style={{ animation: 'neon-flicker 3s ease-in-out infinite' }}>
          <span className="neon-text">JUDGED</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          The definition of insanity is repeating the same mistakes.
          <br />
          <span className="neon-text font-black text-2xl md:text-3xl">The definition of JUDGED is finally understanding why.</span>
        </p>
        
        <p className="text-2xl md:text-3xl font-black max-w-2xl mx-auto mb-12" style={{
          background: 'linear-gradient(135deg, #FF006E, #00D9FF, #39FF14)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Get called out. Get the verdict.<br />
          <span className="text-4xl md:text-5xl tracking-wider">READY..SET..GET JUDGED!!</span>
        </p>

        {/* Verdict cards preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {[
            { title: 'SHOULD I QUIT?', verdict: 'NOT YET', color: '#FF006E' },
            { title: 'SHOULD I TEXT THEM?', verdict: 'BLOCK THEM', color: '#00D9FF' },
            { title: 'SHOULD I MOVE?', verdict: 'YES. TOMORROW.', color: '#39FF14' }
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg neon-border backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
              style={{ borderColor: card.color, boxShadow: `0 0 20px ${card.color}40` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className="text-gray-400 text-sm mb-3 font-mono">{card.title}</p>
              <p className="text-3xl font-black" style={{ color: card.color, textShadow: `0 0 20px ${card.color}` }}>
                {card.verdict}
              </p>
              <p className="text-xs text-gray-500 mt-3">+ the real reason you're here</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Roast Section */}
      <section className="relative py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg neon-border" style={{ borderColor: '#FF1493' }}>
          <h2 className="text-3xl font-black mb-6 neon-text">Here's What Happens:</h2>
          
          <div className="space-y-6 text-gray-300">
            <div className="border-l-4 border-cyan-400 pl-4">
              <p className="font-bold text-cyan-400 mb-2">STEP 1: You Admit It</p>
              <p>Type the decision you've been avoiding. Don't worry about sounding smart.</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <p className="font-bold text-pink-500 mb-2">STEP 2: We Roast You</p>
              <p>Before we answer, we hold up the mirror. <span className="italic">All of it.</span> The pattern you refuse to see. The excuse you've been telling yourself. The real reason.</p>
            </div>

            <div className="border-l-4 border-lime-400 pl-4">
              <p className="font-bold text-lime-400 mb-2">STEP 3: The Verdict</p>
              <p>A clean, honest, no-BS answer. Not YES or NO. The actual truth.</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-bold text-purple-500 mb-2">STEP 4: Your Action Plan</p>
              <p>3 things you do THIS WEEK. The hard conversation you've been avoiding. The one mindset shift that changes everything.</p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4">
              <p className="font-bold text-yellow-400 mb-2">STEP 5: Share Your Shame</p>
              <p>Get a beautiful verdict card to post. Watch your friends freak out because it's also describing them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="relative py-20 px-4 md:px-8">
        <h2 className="text-4xl font-black text-center mb-16 neon-text">Why This Actually Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-gray-900 rounded-lg">
            <p className="text-5xl font-black mb-4 neon-cyan">📊</p>
            <h3 className="text-xl font-bold mb-3 neon-cyan">Gets Smarter Over Time</h3>
            <p className="text-gray-400">After 5-10 verdicts, it recognizes YOUR pattern. Not just your problem — the pattern that keeps creating it.</p>
          </div>

          <div className="p-8 bg-gray-900 rounded-lg">
            <p className="text-5xl font-black mb-4 neon-lime">🚀</p>
            <h3 className="text-xl font-bold mb-3 neon-lime">Actually Shareable</h3>
            <p className="text-gray-400">Every verdict becomes a moment. People post these. They tag friends. They say "this is literally me."</p>
          </div>

          <div className="p-8 bg-gray-900 rounded-lg">
            <p className="text-5xl font-black mb-4 neon-cyan">💪</p>
            <h3 className="text-xl font-bold mb-3 neon-cyan">Transforms You</h3>
            <p className="text-gray-400">Not a tool. A therapist + life coach + brutal best friend. People swear by it.</p>
          </div>

          <div className="p-8 bg-gray-900 rounded-lg">
            <p className="text-5xl font-black mb-4 neon-lime">🔥</p>
            <h3 className="text-xl font-bold mb-3 neon-lime">The Gift That Hits Different</h3>
            <p className="text-gray-400">"Buy this for your friend who won't stop dating losers." $19.99. Self-marketing loop engaged.</p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="relative py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 rounded-lg neon-border" style={{ borderColor: '#FF006E' }}>
            <h2 className="text-4xl font-black text-center mb-6 neon-text">Join the Waitlist</h2>
            <p className="text-center text-gray-300 mb-10">
              Get <span className="font-bold neon-lime">1 free verdict</span> when JUDGED launches. See if we're right about you.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:border-pink-500 focus:outline-none transition"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-4 font-black text-lg uppercase tracking-wider rounded-lg transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FF006E, #00D9FF, #39FF14)',
                    boxShadow: '0 0 30px rgba(255, 0, 110, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)',
                    color: '#000'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.8), 0 0 100px rgba(0, 217, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)';
                  }}
                >
                  Get My Free Verdict
                </button>
              </form>
            ) : (
              <div className="text-center p-8 bg-gray-800 rounded-lg border-2 border-lime-400">
                <p className="text-3xl font-black neon-lime mb-2">✓ YOU'RE IN.</p>
                <p className="text-gray-300">Check your email for your free verdict. We're brutal. You'll love it.</p>
              </div>
            )}

            <p className="text-center text-xs text-gray-500 mt-8">
              No spam. No fake urgency. Just the truth.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>JUDGED © 2025. We don't apologize for anything.</p>
      </footer>
      <SpeedInsights />
    </div>
  );
      }
