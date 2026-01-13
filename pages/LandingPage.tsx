import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-landing-bg font-display text-slate-900 dark:text-white overflow-x-hidden">
      {/* Top Navigation */}
      <div className="fixed top-0 z-50 w-full glass-panel">
        <div className="flex h-16 items-center justify-between px-4 lg:px-10 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">Drive Sure</h2>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Solutions</a>
            <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Rewards</a>
            <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Marketplace</a>
            <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Claims</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogin}
              className="hidden sm:flex items-center justify-center h-9 px-4 rounded-full border border-white/10 bg-transparent text-white text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={handleLogin}
              className="flex items-center justify-center h-9 px-4 rounded-full bg-primary hover:bg-primary-dark transition-colors text-landing-bg text-sm font-bold neon-shadow gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              <span className="truncate">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Hero Text */}
            <div className="flex-1 flex flex-col gap-6 lg:max-w-[600px] z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Live Telematics V2.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                Insurance at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Speed of You</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-[540px]">
                Real-time telematics meets wallet-based premiums. Drive safer, stake rewards, and lower your costs instantly with our dynamic risk engine.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={handleLogin} className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-landing-bg font-bold text-base transition-all neon-shadow flex items-center gap-2">
                  <span>Start Driving</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <button className="h-12 px-8 rounded-lg bg-landing-surface border border-white/10 hover:border-white/20 text-white font-bold text-base transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  <span>Calculate Savings</span>
                </button>
              </div>
              <div className="flex gap-6 mt-8 pt-8 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">25k+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Active Drivers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">$4.2M</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Claims Paid</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">~18%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Avg. APY</span>
                </div>
              </div>
            </div>

            {/* Hero Visual / Dashboard */}
            <div className="flex-1 w-full relative group perspective-[1000px]">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-landing-surface shadow-2xl transition-transform duration-700 ease-out transform group-hover:rotate-y-2 group-hover:rotate-x-2">
                {/* Dashboard UI Mockup */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVpqH55eF-rte5T4FemVlAHMAl_LbYc6cE6elP1uH_e_Rd32Te_61pfHiV8g2RSYeQgORxrIAH3Du9_JmnWQvq9QNt_opobVniE7zaZ5V8ladL-Goz2K7cwG09m_5J56fXU4lhOvo69nGiyicnuEzRdkQQ0DabctYjM_N2dcjrE9sv51bm9iebApmdVhtHISAO4x0sbdTfJw7YVIPaOYyUIE2SacAjIV6iwy2jkIJpWgCO1b4c5cYk8_Aq0nPhl3ldRAxNcqlWyg')",
                    opacity: 0.4
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-landing-bg via-landing-bg/50 to-transparent"></div>

                {/* HUD Elements */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Vehicle Status</div>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span className="material-symbols-outlined text-sm">wifi_tethering</span>
                      ONLINE
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-3 flex gap-4">
                    <div>
                      <div className="text-xs text-slate-400">Battery</div>
                      <div className="text-white font-mono">82%</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Range</div>
                      <div className="text-white font-mono">240mi</div>
                    </div>
                  </div>
                </div>

                {/* Central Car Visualization (Wireframe Simulation) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-32 border border-primary/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-full h-full absolute border border-accent-blue/30 rounded-full scale-125 opacity-50"></div>
                    <span className="material-symbols-outlined text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">directions_car</span>
                    
                    {/* Data Lines */}
                    <div className="absolute -right-24 top-0 flex items-center gap-2">
                      <div className="w-12 h-[1px] bg-primary"></div>
                      <div className="bg-primary/20 backdrop-blur px-2 py-1 rounded text-xs text-primary font-mono border border-primary/50">Safe Braking</div>
                    </div>
                    <div className="absolute -left-24 bottom-0 flex items-center gap-2">
                      <div className="bg-accent-blue/20 backdrop-blur px-2 py-1 rounded text-xs text-accent-blue font-mono border border-accent-blue/50">Cornering: Good</div>
                      <div className="w-12 h-[1px] bg-accent-blue"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                  <div className="bg-landing-surface-highlight/80 backdrop-blur border border-white/10 p-3 rounded-lg">
                    <div className="text-xs text-slate-400">Current Score</div>
                    <div className="text-xl font-bold text-white">94/100</div>
                  </div>
                  <div className="bg-landing-surface-highlight/80 backdrop-blur border border-white/10 p-3 rounded-lg">
                    <div className="text-xs text-slate-400">Trip Savings</div>
                    <div className="text-xl font-bold text-primary">+$2.45</div>
                  </div>
                  <div className="bg-landing-surface-highlight/80 backdrop-blur border border-white/10 p-3 rounded-lg">
                    <div className="text-xs text-slate-400">Tokens Earned</div>
                    <div className="text-xl font-bold text-accent-blue">12.5 SPC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="w-full h-10 bg-primary overflow-hidden flex items-center">
        <div className="ticker-wrap">
          <div className="ticker-move">
            <div className="ticker-item">LIVE: USER #8821 SAVED 15% ON PREMIUM</div>
            <div className="ticker-item">TOKENS MINTED: 1,042 SPC</div>
            <div className="ticker-item">NEW SAFE DRIVER BADGE AWARDED TO J. DOE</div>
            <div className="ticker-item">CURRENT STAKING APY: 5.2%</div>
            <div className="ticker-item">USER #9910 CONNECTED WALLET</div>
            <div className="ticker-item">WEATHER ALERT: RAIN IN SEATTLE - DRIVE CAREFULLY</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 lg:py-28 bg-landing-bg relative">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="flex flex-col gap-4 mb-16 max-w-[760px]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Wallet-Based Insurance</h2>
            <p className="text-lg text-slate-400">
              Seamless integration with your financial life. Top up, drive, and pay only for what you use. No annual contracts, just pure utility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-landing-surface border border-white/5 hover:border-primary/50 transition-all hover:bg-landing-surface-highlight">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">account_balance_wallet</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connect Wallet</h3>
              <p className="text-slate-400 leading-relaxed">
                Link your crypto wallet (MetaMask, Phantom) or UPI for instant micro-transactions. Your keys, your coverage.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-landing-surface border border-white/5 hover:border-primary/50 transition-all hover:bg-landing-surface-highlight">
              <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">speed</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Telematics</h3>
              <p className="text-slate-400 leading-relaxed">
                Our decentralized sensors track driving habits in real-time. Data is encrypted and stored on-chain for transparency.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-landing-surface border border-white/5 hover:border-primary/50 transition-all hover:bg-landing-surface-highlight">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">payments</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pay-As-You-Drive</h3>
              <p className="text-slate-400 leading-relaxed">
                Premiums adjust dynamically based on your safety score. Stop driving? Your premium stops too.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards / Staking Section */}
      <div className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-landing-surface -z-10 rounded-l-[100px] hidden lg:block border-l border-white/5"></div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">Safe Driving Rewards</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-[500px]">
                Turn good habits into passive income. Stake your unused premium balance and earn yields. Collect NFT badges for milestones to unlock lower rates.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 min-w-6 text-primary">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Yield Farming</h4>
                    <p className="text-slate-500 text-sm">Earn up to 5% APY on your wallet balance for every accident-free month.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 min-w-6 text-primary">
                    <span className="material-symbols-outlined">stars</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">NFT Badges</h4>
                    <p className="text-slate-500 text-sm">Unlock "Smooth Operator" or "Night Rider" badges that trade on our marketplace.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 min-w-6 text-primary">
                    <span className="material-symbols-outlined">token</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Governance Tokens</h4>
                    <p className="text-slate-500 text-sm">Top drivers receive governance tokens to vote on protocol upgrades.</p>
                  </div>
                </div>
              </div>
              <button className="mt-10 text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group">
                Explore Rewards Program
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            {/* Right Visual: Rewards Dashboard */}
            <div className="flex-1 w-full max-w-[500px]">
              <div className="bg-landing-surface-highlight border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Total Earned</div>
                    <div className="text-3xl font-bold text-white">$1,240.50</div>
                  </div>
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                    +12.4% this month
                  </div>
                </div>
                {/* Graph Placeholder */}
                <div className="h-32 w-full mb-8 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
                  <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-white/10"></div>
                  {/* Simple CSS Graph Line */}
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <path d="M0 35 Q 20 30, 40 20 T 100 5" fill="none" stroke="#11d483" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M0 35 Q 20 30, 40 20 T 100 5 V 40 H 0 Z" fill="url(#gradient)" opacity="0.2"></path>
                    <defs>
                      <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#11d483', stopOpacity:1}}></stop>
                        <stop offset="100%" style={{stopColor:'#11d483', stopOpacity:0}}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Badges List */}
                <div className="space-y-3">
                  <h5 className="text-white text-sm font-bold mb-3">Recent Badges</h5>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-landing-bg/50 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-landing-bg shadow-lg">
                      <span className="material-symbols-outlined text-[20px]">military_tech</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-bold">Gold Cruiser</div>
                      <div className="text-slate-500 text-xs">1,000 Safe Miles</div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">#0492</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-landing-bg/50 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-bold">Verified Staker</div>
                      <div className="text-slate-500 text-xs">Staked &gt; $500</div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">#1102</div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 rounded-xl bg-primary text-landing-bg font-bold text-sm hover:bg-primary-dark transition-colors">
                  Claim Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto rounded-3xl bg-gradient-to-r from-landing-surface-highlight to-landing-surface border border-white/10 p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 relative z-10">Ready to drive into the future?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-[600px] mx-auto relative z-10">
            Join 25,000+ drivers saving money with SphereInc. Connect your wallet instantly and get covered in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button 
              onClick={handleLogin}
              className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-landing-bg font-bold text-base transition-all shadow-[0_0_20px_rgba(17,212,131,0.4)]"
            >
              Connect Wallet
            </button>
            <button className="h-12 px-8 rounded-lg bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold text-base transition-all">
              View Demo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-landing-surface border-t border-white/5 pt-16 pb-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center size-6 rounded bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[16px]">shield</span>
                </div>
                <h3 className="text-white font-bold text-lg">SphereInc</h3>
              </div>
              <p className="text-slate-500 text-sm max-w-[280px]">
                The world's first decentralized motor insurance protocol. Powered by Polygon. Secured by Chainlink.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Platform</h4>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Solutions</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Rewards</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Marketplace</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Claims</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Company</h4>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">About Us</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Careers</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Blog</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Legal</h4>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Terms of Service</a>
              <a className="text-slate-500 hover:text-primary text-sm" href="#">Whitepaper</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Social</h4>
              <div className="flex gap-4">
                <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-xs">
              © 2023 SphereInc Technologies. All rights reserved.
            </div>
            <div className="flex gap-6">
              <span className="text-slate-600 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;