/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  Lock,
  Menu,
  X,
  PlayCircle,
  Users,
  Star
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/10 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-black uppercase tracking-[0.2em] mb-10 animate-pulse shadow-2xl">
            <Zap className="w-5 h-5 fill-current" />
            THE FUTURE OF TRADING IS HERE
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black leading-[0.85] mb-6 text-red-600 uppercase italic drop-shadow-xl tracking-tighter">
            MASTER THE MARKETS <br />
            <span className="text-red-500 underline decoration-[8px]">WITH AI PRECISION</span>
          </h1>
          <p className="text-base md:text-xl text-red-600 font-black mb-8 max-w-3xl mx-auto leading-tight uppercase tracking-tighter italic">
            Leverage the power of advanced algorithms to automate your trading strategy. 
            Join a community of sophisticated investors using our proven technology to optimize their portfolios.
          </p>
          <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            <motion.a 
              href="https://t.me/fxbotvest"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="bg-red-600 text-white w-full py-5 rounded-2xl font-black text-lg md:text-2xl uppercase italic flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all active:scale-95 shadow-2xl shadow-red-600/60 border-b-6 border-red-800"
            >
              GET STARTED TODAY <ArrowRight className="w-6 h-6 stroke-[3px]" />
            </motion.a>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-red-600 bg-red-100 overflow-hidden shadow-xl">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-red-600 font-black text-lg uppercase italic tracking-widest">TRUSTED BY <span className="text-red-700 underline decoration-4">12,000+</span> WEALTHY INVESTORS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced AI Algorithms",
      description: "Our bots analyze millions of data points per second to identify high-probability trade setups before the market moves."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Reliable Cloud Infra",
      description: "24/7 uptime with ultra-low latency execution. Your bots trade even while you sleep, hosted on enterprise-grade servers."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Dashboard",
      description: "Monitor your growth in real-time. Transparent reporting on every trade, profit, and bot performance metric."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure & Transparent",
      description: "Your funds stay in your control. We use industry-standard encryption and never have direct access to your principal."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-red-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-2xl font-display font-black mb-2 text-red-600 uppercase italic">WHY WE ARE THE #1 CHOICE</h2>
          <p className="text-red-800 font-black text-xs max-w-2xl mx-auto uppercase">WE HAVE THE SECRET SAUCE TO UNLIMITED WEALTH. DON'T BE LEFT BEHIND!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 rounded-3xl bg-white border-4 border-red-600 hover:bg-red-600 hover:text-white transition-all group shadow-[0_20px_50px_rgba(220,38,38,0.2)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-white group-hover:text-red-600 transition-all mb-6">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase italic">{f.title}</h3>
              <p className="text-base font-black leading-tight uppercase">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in seconds with just an email and password."
    },
    {
      number: "02",
      title: "Complete Profile",
      description: "Fill in your details to secure your account and verify your identity."
    },
    {
      number: "03",
      title: "Fund Your Wallet",
      description: "Deposit funds securely using our multiple supported payment methods."
    },
    {
      number: "04",
      title: "Invest & Choose Duration",
      description: "Invest any amount and select the trading duration that fits your goals."
    },
    {
      number: "05",
      title: "Track Daily Returns",
      description: "Monitor your investment performance with real-time daily return updates."
    },
    {
      number: "06",
      title: "Automatic Credits",
      description: "Daily returns are automatically credited to your account balance."
    },
    {
      number: "07",
      title: "Full Transparency",
      description: "View every trade and transaction with our 100% transparent ledger."
    },
    {
      number: "08",
      title: "Flexible Withdrawals",
      description: "Withdraw your profits daily or leave them to accumulate for higher growth."
    },
    {
      number: "09",
      title: "Rewarding Referrals",
      description: "Earn direct and indirect commissions from your downlines' activities."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-2xl font-display font-black mb-2 text-red-600 uppercase italic">9 STEPS TO FINANCIAL FREEDOM</h2>
          <p className="text-red-800 font-black text-xs max-w-2xl mx-auto uppercase tracking-tighter">FOLLOW THE BLUEPRINT. GET THE RESULTS. NO EXCUSES!</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border-4 border-red-100 hover:border-red-600 transition-all shadow-2xl group"
            >
              <div className="text-5xl font-display font-black text-red-600 mb-4 group-hover:scale-110 transition-transform">{s.number}</div>
              <h3 className="text-2xl font-black mb-3 text-red-600 uppercase italic">{s.title}</h3>
              <p className="text-base text-red-900 font-black leading-tight uppercase">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const resultImages = [
    '/images/result1.png',
    '/images/result2.png',
    '/images/result3.png',
    '/images/result4.png',
  ];

  const [payouts, setPayouts] = useState([
    { id: 1, user: 'Alex M.', amount: 8250.00, time: 'Just now' },
    { id: 2, user: 'Sarah K.', amount: 12400.50, time: '2 mins ago' },
    { id: 3, user: 'John D.', amount: 15100.20, time: '5 mins ago' },
    { id: 4, user: 'Elena R.', amount: 6450.00, time: '12 mins ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const names = [
        'Michael B.', 'Jessica W.', 'David L.', 'Emma S.', 'Robert T.', 'Olivia P.', 'William H.',
        'Sophia G.', 'James C.', 'Isabella M.', 'Benjamin K.', 'Charlotte D.', 'Daniel F.', 'Mia L.',
        'Alexander V.', 'Amelia J.', 'Ethan R.', 'Harper T.', 'Matthew B.', 'Evelyn S.', 'Lucas N.',
        'Abigail W.', 'Mason P.', 'Emily K.', 'Logan H.', 'Elizabeth C.', 'Sebastian D.', 'Avery F.',
        'Jack L.', 'Scarlett V.', 'Liam O.', 'Noah B.', 'Oliver Q.', 'Elijah X.', 'Lucas Z.',
        'Mason Y.', 'Logan W.', 'Ethan U.', 'Aiden T.', 'James S.', 'Sebastian R.', 'Mohammed Q.',
        'Jackson P.', 'Samuel O.', 'David N.', 'Carter M.', 'Wyatt L.', 'Jayden K.', 'John J.',
        'Owen I.', 'Dylan H.', 'Luke G.', 'Gabriel F.', 'Anthony E.', 'Isaac D.', 'Grayson C.',
        'Jack B.', 'Julian A.', 'Levi Z.', 'Christopher Y.', 'Joshua X.', 'Andrew W.', 'Lincoln V.',
        'Mateo U.', 'Ryan T.', 'Jaxon S.', 'Nathan R.', 'Aaron Q.', 'Isaiah P.', 'Thomas O.',
        'Charles N.', 'Josiah M.', 'Hudson L.', 'Christian K.', 'Hunter J.', 'Connor I.', 'Eli H.',
        'Ezra G.', 'Aaron F.', 'Landon E.', 'Adrian D.', 'Jonathan C.', 'Nolan B.', 'Jeremiah A.'
      ];
      const newPayout = {
        id: Date.now(),
        user: names[Math.floor(Math.random() * names.length)],
        amount: +(Math.random() * 25000 + 5000).toFixed(2),
        time: 'Just now'
      };
      setPayouts(prev => [newPayout, ...prev.slice(0, 3)]);
    }, 5000); // Slightly faster updates as requested "quickly" but with more names
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="results" className="py-20 px-6 bg-red-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-3xl font-display font-black mb-2 text-white uppercase italic drop-shadow-lg">WE ARE PRINTING MONEY!</h2>
          <p className="text-white font-black text-sm max-w-2xl mx-auto uppercase">SEE THE LIVE CASH FLOW! OUR MEMBERS ARE WINNING BIG!</p>
        </div>

        {/* Live Payout Ticker */}
        <div className="mb-12 p-8 bg-white rounded-[3rem] border-8 border-red-400 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-4 rounded-full bg-red-600 animate-ping" />
            <span className="text-sm font-black uppercase tracking-[0.4em] text-red-600">LIVE WEALTH FEED</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {payouts.map((p) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="p-6 rounded-3xl bg-red-50 border-4 border-red-100 flex items-center justify-between shadow-xl"
                >
                  <div>
                    <p className="text-sm text-red-800 font-black uppercase">{p.user}</p>
                    <p className="text-2xl font-display font-black text-green-600">${p.amount.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-red-400 font-black uppercase">{p.time}</p>
                    <div className="text-xs text-white font-black uppercase tracking-widest bg-green-500 px-3 py-1 rounded-full shadow-lg">PAID</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultImages.map((src, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl bg-surface-muted border border-black/5 overflow-hidden relative group shadow-sm"
            >
              <img 
                src={src} 
                alt={`Trading Result ${i + 1}`} 
                className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Fallback for placeholder
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/result${i}/600/800`;
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-xs font-black uppercase tracking-widest text-red-600 bg-white px-2 py-1 rounded shadow-lg">Verified Result</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://t.me/fxbotvest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-black text-lg uppercase italic hover:underline drop-shadow-lg"
          >
            See More Live Results <ArrowRight className="w-5 h-5 stroke-[3px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

const SimpleFooter = () => {
  return (
    <footer className="py-20 px-6 border-t-8 border-red-600 bg-red-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
            <TrendingUp className="w-8 h-8" />
          </div>
          <span className="text-4xl font-display font-black tracking-tighter text-red-600 italic">FxBotVest</span>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-red-600 font-black uppercase italic">© 2026 FxBotVest AI Technologies. WE ARE THE FUTURE OF WEALTH.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white">
      <main>
        <Hero />
        
        <Features />
        <Results />
        <HowItWorks />
        
        {/* CTA Section */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto glass rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden border-8 border-red-600 shadow-[0_30px_60px_rgba(220,38,38,0.15)]">
            <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -z-10" />
            <h2 className="text-xl md:text-4xl font-display font-black mb-4 text-red-600 uppercase italic leading-none">Don't Wait! <br />Your Wealth Awaits!</h2>
            <p className="text-red-800 font-black max-w-xl mx-auto mb-8 text-xs md:text-base uppercase tracking-tighter leading-tight italic">Spots are filling up FAST! Join the elite 1% of investors today and start printing cash!</p>
            <motion.a 
              href="https://t.me/fxbotvest"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block bg-red-600 text-white w-full max-w-md py-4 rounded-xl font-black text-base md:text-xl uppercase italic hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all active:scale-95 shadow-xl border-b-4 border-red-800"
            >
              SECURE YOUR SPOT NOW!
            </motion.a>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
}
