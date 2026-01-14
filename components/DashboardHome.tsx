import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { USER_DATA } from "../lib/constants";

const DashboardHome: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"Weekly" | "Monthly" | "Yearly">(
    "Weekly"
  );
  const [balance, setBalance] = useState(USER_DATA.walletBalance);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isProcessingTopUp, setIsProcessingTopUp] = useState(false);

  const handleTopUp = () => {
    setIsProcessingTopUp(true);
    setTimeout(() => {
      setBalance((prev) => prev + 500);
      setIsProcessingTopUp(false);
    }, 1500);
  };

  const chartDataMap = {
    Weekly: [
      { name: "Mon", value: 40 },
      { name: "Tue", value: 30 },
      { name: "Wed", value: 20 },
      { name: "Thu", value: 27 },
      { name: "Fri", value: 18 },
      { name: "Sat", value: 23 },
      { name: "Sun", value: 34 },
    ],
    Monthly: [
      { name: "Week 1", value: 20 },
      { name: "Week 2", value: 45 },
      { name: "Week 3", value: 30 },
      { name: "Week 4", value: 50 },
    ],
    Yearly: [
      { name: "Jan", value: 65 },
      { name: "Feb", value: 59 },
      { name: "Mar", value: 80 },
      { name: "Apr", value: 81 },
      { name: "May", value: 56 },
      { name: "Jun", value: 55 },
      { name: "Jul", value: 40 },
    ],
  };

  const chartInfo = {
    Weekly: { burnRate: "-12%", savings: "₹1,850" },
    Monthly: { burnRate: "-8%", savings: "₹7,420" },
    Yearly: { burnRate: "-15%", savings: "₹85,300" },
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 animate-fade-in">
      {/* Header */}
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Welcome back, {USER_DATA.shortName}
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
            <div className="h-32 w-32 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { value: USER_DATA.drivingScore},
                      { value: 100 - USER_DATA.drivingScore  },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={36}
                    outerRadius={44}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell key="cell-0" fill="#11d483" />
                    <Cell key="cell-1" fill="#283932" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-white">
                  {Math.round(USER_DATA.drivingScore)}
                </span>
                <span className="text-xs font-medium text-gray-500">/ 100</span>
              </div>
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
              <span className="text-sm font-bold text-primary">
                {USER_DATA.pointsSymbol}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              ≈ {USER_DATA.currency}
              {balance.toLocaleString()}.00 INR
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[70%] bg-primary transition-all duration-500"></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Monthly Goal</span>
              <span>{USER_DATA.monthlyGoal}</span>
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartDataMap[timeRange]}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#11d483" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#11d483" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  opacity={0.2}
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  dy={10}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1c1c1c",
                    borderColor: "#333",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#11d483" }}
                  cursor={{
                    stroke: "#11d483",
                    strokeWidth: 1,
                    strokeDasharray: "4 4",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#11d483"
                  strokeWidth={3}
                  fill="url(#colorValue)"
                  animationDuration={1000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Side Stats for Chart */}
          <div className="flex flex-row md:flex-col gap-4 min-w-[200px]">
            <div className="flex flex-col gap-1 rounded-xl bg-white/5 p-4 flex-1 hover:bg-white/10 transition-colors">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Burn Rate
              </p>
              <p className="text-2xl font-bold text-white transition-all key={chartInfo[timeRange].burnRate}">
                {chartInfo[timeRange].burnRate}
              </p>
              <p className="text-xs font-medium text-primary">
                ↓ Low Consumption
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-white/5 p-4 flex-1 hover:bg-white/10 transition-colors">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Projected Savings
              </p>
              <p className="text-2xl font-bold text-white transition-all key={chartInfo[timeRange].savings}">
                {chartInfo[timeRange].savings}
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

export default DashboardHome;
