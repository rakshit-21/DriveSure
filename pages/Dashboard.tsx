import React, { useState } from "react";
import {
  useNavigate,
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Placeholder Component for new routes
const PlaceholderPage = ({ title, icon }: { title: string; icon: string }) => (
  <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 text-white animate-fade-in">
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
          <span className="material-symbols-outlined text-2xl text-primary">
            {icon}
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-gray-400">
            Manage your {title.toLowerCase()} settings and view details.
          </p>
        </div>
      </div>
    </header>

    <div className="flex-1 flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-dashboard-surface/50 p-12 text-center min-h-[400px]">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
        <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-dashboard-surface border border-white/10">
          <span className="material-symbols-outlined text-4xl text-gray-500">
            construction
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Under Construction</h3>
      <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
        We are currently building the <strong>{title}</strong> module. Check
        back soon for updates on your telematics integration.
      </p>
      <button className="mt-8 px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors border border-white/10">
        Notify Me When Ready
      </button>
    </div>
  </div>
);

// Main Dashboard Home Content
const DashboardHome: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"Weekly" | "Monthly" | "Yearly">(
    "Weekly"
  );
  const [balance, setBalance] = useState(12450);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isProcessingTopUp, setIsProcessingTopUp] = useState(false);

  const handleTopUp = () => {
    setIsProcessingTopUp(true);
    setTimeout(() => {
      setBalance((prev) => prev + 500);
      setIsProcessingTopUp(false);
    }, 1500);
  };

  const chartData = {
    Weekly: {
      path: "M0,120 C50,110 100,130 150,90 C200,50 250,70 300,40 C350,10 400,30 450,20 L500,10",
      burnRate: "-12%",
      savings: "₹1,850",
    },
    Monthly: {
      path: "M0,100 C50,120 100,80 150,100 C200,60 250,90 300,50 C350,30 400,40 450,10 L500,30",
      burnRate: "-8%",
      savings: "₹7,420",
    },
    Yearly: {
      path: "M0,80 C50,60 100,90 150,70 C200,40 250,50 300,20 C350,40 400,10 450,5 L500,60",
      burnRate: "-15%",
      savings: "₹85,300",
    },
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 animate-fade-in">
      {/* Header */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Welcome back, Alex
          </h2>
          <p className="text-base text-gray-400">
            Here is your live driving performance and wallet overview.
          </p>
        </div>
        <div className="flex items-center gap-3 relative">
          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-dashboard-surface px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined text-[20px]">
              cloud_download
            </span>
            Export Report
          </button>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-dashboard-bg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-primary"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-white/10 bg-dashboard-surface p-4 shadow-2xl backdrop-blur-xl">
              <h3 className="mb-3 font-bold text-white">Notifications</h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 rounded-xl bg-white/5 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <span className="material-symbols-outlined text-sm">
                      paid
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Reward Received
                    </p>
                    <p className="text-xs text-gray-400">
                      You earned 500 pts for safe driving.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-white/5 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                    <span className="material-symbols-outlined text-sm">
                      notifications_active
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Trip Analysis
                    </p>
                    <p className="text-xs text-gray-400">
                      Your recent trip to downtown is ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Driver Score Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-dashboard-surface p-6 shadow-sm group hover:border-white/10 transition-all">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-400">
              Driver Score
            </h3>
            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
              verified_user
            </span>
          </div>
          <div className="relative mt-4 flex items-center justify-center py-4">
            {/* SVG Gauge */}
            <svg
              className="h-32 w-32 -rotate-90 transform"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="#283932"
                strokeWidth="8"
              ></circle>
              <circle
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="#11d483"
                strokeDasharray="251.2"
                strokeDashoffset="37.68"
                strokeLinecap="round"
                strokeWidth="8"
                className="transition-all duration-1000 ease-out"
              ></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-bold text-white">85</span>
              <span className="text-xs font-medium text-gray-500">/ 100</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-green-500/10 px-3 py-2">
            <span className="material-symbols-outlined text-sm text-primary">
              trending_up
            </span>
            <span className="text-sm font-medium text-primary">
              Top 15% of drivers
            </span>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-dashboard-surface p-6 shadow-sm hover:border-white/10 transition-all">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-400">
              Wallet Balance
            </h3>
            <button className="text-xs font-medium text-primary hover:text-primary/80">
              View History
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white transition-all duration-300">
                {balance.toLocaleString()}
              </span>
              <span className="text-sm font-bold text-primary">pts</span>
            </div>
            <p className="text-sm text-gray-500">
              ≈ ₹{balance.toLocaleString()}.00 INR
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[70%] bg-primary transition-all duration-500"></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Monthly Goal</span>
              <span>70%</span>
            </div>
            <button
              onClick={handleTopUp}
              disabled={isProcessingTopUp}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-dashboard-bg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessingTopUp ? (
                <span className="material-symbols-outlined animate-spin text-[18px]">
                  progress_activity
                </span>
              ) : (
                <span className="material-symbols-outlined text-[18px]">
                  add_card
                </span>
              )}
              {isProcessingTopUp ? "Processing..." : "Top-up Balance"}
            </button>
          </div>
        </div>

        {/* Parametric Claims Widget */}
        <div className="flex flex-col rounded-2xl border border-white/5 bg-dashboard-surface p-6 shadow-sm hover:border-white/10 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-400">
              Parametric Claims
            </h3>
            <div className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-bold text-yellow-500 animate-pulse">
              Processing
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6 relative">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-white/10"></div>
            {/* Step 1 */}
            <div className="relative flex items-center gap-4">
              <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-dashboard-bg">
                <span className="material-symbols-outlined text-sm font-bold">
                  check
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-white">
                  Accident Detected
                </p>
                <p className="text-xs text-gray-500">
                  Sensors triggered - 10:42 AM
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex items-center gap-4">
              <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-yellow-500 bg-dashboard-surface">
                <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-yellow-500">
                  Verifying Data
                </p>
                <p className="text-xs text-gray-500">
                  Oracle Validation in progress
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex items-center gap-4 opacity-50">
              <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-600 bg-dashboard-surface"></div>
              <div className="flex flex-col">
                <p className="text-sm font-bold text-white">
                  Smart Contract Payout
                </p>
                <p className="text-xs text-gray-500">
                  Instant transfer to wallet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="rounded-2xl border border-white/5 bg-dashboard-surface p-6 shadow-sm hover:border-white/10 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Premium Burn Rate vs. Driving Habits
            </h3>
            <p className="text-sm text-gray-500">
              Analyze how your driving style impacts your point consumption.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 p-1">
            {(["Weekly", "Monthly", "Yearly"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`rounded-md px-3 py-1 text-xs font-bold shadow-sm transition-all ${
                  timeRange === range
                    ? "bg-white/10 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 relative h-64 w-full">
            {/* Custom Chart SVG */}
            <svg
              className="h-full w-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 500 150"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="#11d483"
                    stopOpacity="0.3"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="#11d483"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line
                opacity="0.2"
                stroke="#334155"
                strokeDasharray="4 4"
                strokeWidth="1"
                x1="0"
                x2="500"
                y1="150"
                y2="150"
              ></line>
              <line
                opacity="0.2"
                stroke="#334155"
                strokeDasharray="4 4"
                strokeWidth="1"
                x1="0"
                x2="500"
                y1="100"
                y2="100"
              ></line>
              <line
                opacity="0.2"
                stroke="#334155"
                strokeDasharray="4 4"
                strokeWidth="1"
                x1="0"
                x2="500"
                y1="50"
                y2="50"
              ></line>
              <line
                opacity="0.2"
                stroke="#334155"
                strokeDasharray="4 4"
                strokeWidth="1"
                x1="0"
                x2="500"
                y1="0"
                y2="0"
              ></line>
              {/* Data Path */}
              <path
                className="transition-all duration-500 ease-in-out"
                d={`${chartData[timeRange].path} V150 H0 Z`}
                fill="url(#chartGradient)"
              ></path>
              <path
                className="transition-all duration-500 ease-in-out"
                d={chartData[timeRange].path}
                fill="none"
                stroke="#11d483"
                strokeLinecap="round"
                strokeWidth="3"
              ></path>
            </svg>
            {/* Axis Labels */}
            <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
              {timeRange === "Weekly" && (
                <>
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </>
              )}
              {timeRange === "Monthly" && (
                <>
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Aug</span>
                  <span>Dec</span>
                </>
              )}
              {timeRange === "Yearly" && (
                <>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                  <span>2026</span>
                </>
              )}
            </div>
          </div>
          {/* Side Stats for Chart */}
          <div className="flex flex-row md:flex-col gap-4 min-w-[200px]">
            <div className="flex flex-col gap-1 rounded-xl bg-white/5 p-4 flex-1 hover:bg-white/10 transition-colors">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Burn Rate
              </p>
              <p className="text-2xl font-bold text-white transition-all key={chartData[timeRange].burnRate}">
                {chartData[timeRange].burnRate}
              </p>
              <p className="text-xs font-medium text-primary">
                ↓ Low Consumption
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-white/5 p-4 flex-1 hover:bg-white/10 transition-colors">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Projected Savings
              </p>
              <p className="text-2xl font-bold text-white transition-all key={chartData[timeRange].savings}">
                {chartData[timeRange].savings}
              </p>
              <p className="text-xs font-medium text-primary">
                ↑ Better than average
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Rewards Section */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-white">Active Rewards</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Badge 1 */}
          <div className="group relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-white/5 bg-dashboard-surface p-4 transition-all hover:border-primary/50 hover:bg-white/5">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-primary shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white">
                  eco
                </span>
              </div>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                NFT Badge
              </span>
            </div>
            <div>
              <h4 className="font-bold text-white group-hover:text-primary transition-colors">
                Eco-Warrior
              </h4>
              <p className="text-xs text-gray-500">
                Maintained low emissions for 30 days.
              </p>
            </div>
          </div>
          {/* Badge 2 */}
          <div className="group relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-white/5 bg-dashboard-surface p-4 transition-all hover:border-blue-500/50 hover:bg-white/5">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white">
                  shield
                </span>
              </div>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                NFT Badge
              </span>
            </div>
            <div>
              <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                Safe Streak
              </h4>
              <p className="text-xs text-gray-500">
                100 miles without hard braking.
              </p>
            </div>
          </div>
          {/* Carbon Credits */}
          <div className="col-span-1 sm:col-span-2 relative overflow-hidden rounded-2xl border border-white/5 bg-dashboard-surface-highlight p-4 cursor-pointer hover:border-primary/30 transition-all">
            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  forest
                </span>
                <h4 className="font-bold text-white">Carbon Credits Earned</h4>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">142</span>
                <span className="mb-1 text-sm font-medium text-gray-400">
                  tons offset
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/20">
                <div className="h-full w-[65%] rounded-full bg-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-progress-stripes"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Level 4</span>
                <span>65% to Level 5</span>
              </div>
            </div>
            {/* Decorative background pattern */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[url('https://placeholder.pics/svg/200')] bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Simple check for active path
  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return currentPath === "/dashboard" || currentPath === "/dashboard/";
    }
    return currentPath.startsWith(path);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-dashboard-bg text-white font-display antialiased selection:bg-primary selection:text-dashboard-bg">
      {/* Sidebar - Matching the Design Spec */}
      <div className="hidden lg:flex w-72 flex-col justify-between border-r border-white/5 bg-dashboard-bg p-6">
        <div className="flex flex-col gap-8">
          {/* Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer px-2"
            onClick={() => navigate("/")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none tracking-tight text-white">
                SphereInc
              </h1>
              <p className="text-xs font-medium text-gray-400">User Portal</p>
            </div>
          </div>

          {/* Navigation - Special styling for Dashboard item */}
          <nav className="flex flex-col gap-6">
            {/* Primary Dashboard Link */}
            <Link
              to="/dashboard"
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 ${
                isActive("/dashboard")
                  ? "bg-dashboard-surface shadow-lg shadow-black/20 border border-white/5"
                  : "hover:bg-white/5"
              }`}
            >
              <span
                className={`material-symbols-outlined text-2xl ${
                  isActive("/dashboard")
                    ? "text-primary"
                    : "text-gray-500 group-hover:text-primary transition-colors"
                }`}
              >
                dashboard
              </span>
              <span
                className={`font-bold text-lg ${
                  isActive("/dashboard")
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white transition-colors"
                }`}
              >
                Dashboard
              </span>
            </Link>

            {/* Other Menu Items */}
            <div className="flex flex-col gap-2 px-2">
              <Link
                to="/dashboard/stats"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/stats")
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive("/dashboard/stats")
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-white transition-colors"
                  }`}
                >
                  speed
                </span>
                <span
                  className={`font-medium ${
                    isActive("/dashboard/stats")
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white transition-colors"
                  }`}
                >
                  Drive Stats
                </span>
              </Link>

              <Link
                to="/dashboard/wallet"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/wallet")
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive("/dashboard/wallet")
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-white transition-colors"
                  }`}
                >
                  account_balance_wallet
                </span>
                <span
                  className={`font-medium ${
                    isActive("/dashboard/wallet")
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white transition-colors"
                  }`}
                >
                  Wallet
                </span>
              </Link>

              <Link
                to="/dashboard/marketplace"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/marketplace")
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive("/dashboard/marketplace")
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-white transition-colors"
                  }`}
                >
                  storefront
                </span>
                <span
                  className={`font-medium ${
                    isActive("/dashboard/marketplace")
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white transition-colors"
                  }`}
                >
                  Marketplace
                </span>
              </Link>

              <Link
                to="/dashboard/loans"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/loans")
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive("/dashboard/loans")
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-white transition-colors"
                  }`}
                >
                  credit_score
                </span>
                <span
                  className={`font-medium ${
                    isActive("/dashboard/loans")
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white transition-colors"
                  }`}
                >
                  Loans
                </span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col gap-2">
          <a
            className="group flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">
              settings
            </span>
            <span className="text-sm font-medium">Settings</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
            <div
              className="h-10 w-10 overflow-hidden rounded-full bg-gray-700 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAebQ323QIHos5jHBD-FxlO5y6vUDHPH8QF4MZ5YNbzzWAsOiXxJfjQS_YfqizTAGRo4S-5pYqFIOEBdZ-w-Ww9BBytjui4zbelzyRPgNga0LxLQGbjmdJTl6_5Fmif3uq9TtuQffrZoAIm59JLr6QZgwkvRLeRTSdiHiTU_Wi1lVoz9Hb5gy2yjCCRM4O36wEy8kuooibs91ZEYpqYI2vzQbNH2fVZDZR0cRdjQ8Fpv6QABJ2R2t3bO2cLXpE5PIVa8Atf_m1SIQ')",
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <p className="truncate text-sm font-bold text-white">
                Alex Morgan
              </p>
              <p className="truncate text-xs text-gray-400">Pro Driver</p>
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto text-gray-400 hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-dashboard-bg">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route
            path="/stats"
            element={<PlaceholderPage title="Drive Stats" icon="speed" />}
          />
          <Route
            path="/wallet"
            element={
              <PlaceholderPage title="Wallet" icon="account_balance_wallet" />
            }
          />
          <Route
            path="/marketplace"
            element={<PlaceholderPage title="Marketplace" icon="storefront" />}
          />
          <Route
            path="/loans"
            element={<PlaceholderPage title="Loans" icon="credit_score" />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
