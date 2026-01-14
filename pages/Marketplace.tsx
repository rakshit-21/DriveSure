import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { USER_DATA } from "../lib/constants";

const Marketplace: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All Items");

  const filters = ["All Items", "NFT Badges", "Loans", "Rewards"];

  const stats = [
    {
      label: "Wallet Balance",
      value: `${USER_DATA.currency}${USER_DATA.walletBalance.toLocaleString()}`,
      trend: "+12% vs last month",
      trendUp: true,
      icon: "account_balance_wallet",
      color: "text-primary",
    },
    {
      label: "Available Credit Line",
      value: `${
        USER_DATA.currency
      }${USER_DATA.availableCreditLine.toLocaleString()}`,
      status: "Pre-approved",
      statusIcon: "check_circle",
      icon: "credit_card",
      color: "text-white",
    },
    {
      label: "Driving Score",
      value: USER_DATA.drivingScore.toString(),
      badge: USER_DATA.drivingScoreLabel,
      trend: "+15 pts",
      trendUp: true,
      icon: "speed",
      color: "text-white",
    },
    {
      label: "Total Points Staked",
      value: USER_DATA.totalPointsStaked.toLocaleString(),
      unit: USER_DATA.pointsSymbol.toUpperCase(),
      status: "Locked: 30 Days",
      statusIcon: "lock",
      icon: "savings",
      color: "text-white",
    },
  ];

  const items = [
    {
      id: 1,
      type: "LOAN OFFER",
      title: "Risk-Adjusted Micro-loan",
      description: `Short-term liquidity based on your ${USER_DATA.drivingScoreLabel} driving score.`,
      image:
        "url('https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop')",
      meta: {
        "Interest Rate": "4.5% APR",
        "Score Req": "870 Score",
      },
      action: "Apply",
      actionColor: "bg-white/10 hover:bg-white/20",
      verified: true,
      accent: "text-primary",
    },
    {
      id: 2,
      type: "NFT",
      title: "Gold Safety Shield",
      description: "Awarded for 10,000km without incident.",
      image:
        "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')",
      meta: {
        "Current Value": "₹1,500",
      },
      action: "Buy",
      actionColor: "bg-primary text-black hover:bg-primary/90",
      accent: "text-purple-400",
    },
    {
      id: 3,
      type: "REWARD",
      title: "Fuel Reward Card",
      description: "Get 15% off your next fill-up at participating stations.",
      image:
        "url('https://www.bankrate.com/2019/01/15160142/Your-guide-to-gas-rewards-program.jpg?auto=webp&optimize=high')",
      meta: {
        Cost: "₹400",
      },
      action: "Redeem",
      actionColor: "bg-white/10 hover:bg-white/20",
      accent: "text-blue-400",
    },
    {
      id: 4,
      type: "CARBON CREDIT",
      title: "1 Ton Carbon Offset",
      description:
        "Certified offset project from Amazon rainforest preservation.",
      image:
        "url('https://be-cis.com/wp-content/uploads/2023/12/view-green-forest-trees-with-co2-scaled.webp')",
      meta: {
        Price: "₹1,650.00",
      },
      badge: "2.5 Tons CO2 Saved",
      action: "Purchase",
      actionColor: "bg-white/10 hover:bg-white/20",
      accent: "text-green-400",
    },
    {
      id: 5,
      type: "INSURANCE",
      title: "Pothole Protection",
      description: "Zero-deductible coverage for tire and rim damage.",
      image:
        "url('https://sripath.com/wp-content/uploads/2025/01/iStock-174662203.jpg')",
      icon: "tire_repair",
      meta: {
        Premium: "₹450.00/mo",
      },
      action: "Add",
      actionColor: "bg-white/10 hover:bg-white/20",
      accent: "text-orange-400",
    },
    {
      id: 6,
      type: "NFT",
      title: "Zero-Accident Streak",
      description: "Proof of 365 days of incident-free driving.",
      image:
        "url('https://t4.ftcdn.net/jpg/13/06/42/51/360_F_1306425110_aRcQWfEKLhQMvszjay6Jou8JnCyw1ah1.jpg')",
      badge: "Rare",
      meta: {
        "Current Value": "₹800",
      },
      action: "Buy",
      actionColor: "bg-primary text-black hover:bg-primary/90",
      accent: "text-purple-400",
    },
  ];

  const recentActivity = [
    {
      title: "Loan Repayment",
      subtitle: "Auto-deducted from Wallet",
      amount: "₹4,250",
      type: "negative",
      icon: "arrow_downward",
    },
    {
      title: "Safe Driving Bonus",
      subtitle: "Weekly reward",
      amount: "+₹150",
      type: "positive",
      icon: "arrow_upward",
    },
    {
      title: "Purchased NFT",
      subtitle: "Bronze Bumper",
      amount: "-₹200",
      type: "negative",
      icon: "shopping_bag",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
          Marketplace & Financial Tools
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Trade earned badges, redeem partner rewards, or leverage your driving
          score for micro-loans in ₹ INR. Your safe driving directly impacts
          your financial power.
        </p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-dashboard-surface p-5 shadow-sm hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-400">
                {stat.label}
              </span>
              <span
                className={`material-symbols-outlined ${stat.color} text-xl`}
              >
                {stat.icon}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.unit && (
                  <span className="text-xs font-bold text-gray-500">
                    {stat.unit}
                  </span>
                )}
                {stat.badge && (
                  <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                    {stat.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend && (
                  <span
                    className={stat.trendUp ? "text-primary" : "text-red-400"}
                  >
                    {stat.trend}
                  </span>
                )}
                {stat.status && (
                  <span className="flex items-center gap-1 text-primary">
                    {stat.statusIcon && (
                      <span className="material-symbols-outlined text-[14px]">
                        {stat.statusIcon}
                      </span>
                    )}
                    {stat.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-primary text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Search marketplace..."
            className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-500"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Items */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dashboard-surface transition-all hover:border-primary/50"
            >
              {/* Card Header / Image Area */}
              <div
                className="h-40 w-full bg-cover bg-center relative p-4 flex flex-col justify-between"
                style={{ background: item.image }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/40 ${item.accent}`}
                  >
                    {item.type}
                  </span>
                  {item.verified && (
                    <div className="flex items-center gap-1 rounded bg-black/60 backdrop-blur-md px-2 py-1 text-[10px] font-bold text-white">
                      <span className="material-symbols-outlined text-[10px]">
                        lock
                      </span>
                      Verified
                    </div>
                  )}
                </div>
                {item.icon && (
                  <div className="self-center p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-4xl text-white">
                      {item.icon}
                    </span>
                  </div>
                )}
                {item.title === "Gold Safety Shield" && (
                  <div className="self-center">
                    <span className="material-symbols-outlined text-5xl text-yellow-400 drop-shadow-lg">
                      security
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Meta Data */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  {Object.entries(item.meta).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[10px] uppercase text-gray-500 font-bold">
                        {key}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          key.includes("Rate") ? "text-primary" : "text-white"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badge if exists */}
                {item.badge && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 -mt-2">
                    <span className="material-symbols-outlined text-sm text-primary">
                      eco
                    </span>
                    <span className="text-xs font-bold text-primary">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Push to bottom */}
                <div className="mt-auto pt-2">
                  <button
                    className={`w-full rounded-xl py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 ${item.actionColor}`}
                  >
                    {item.action === "Apply" && (
                      <span className="material-symbols-outlined text-sm">
                        open_in_new
                      </span>
                    )}
                    {item.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Widgets */}
        <div className="flex flex-col gap-6">
          {/* Credit Score Boost Widget */}
          <div className="rounded-2xl border border-white/10 bg-dashboard-surface p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white">
                Credit Score Boost
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Your driving habits directly impact your loan eligibility.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center py-6 border-b border-white/5">
              {/* Gauge */}
              <div className="h-40 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { value: USER_DATA.drivingScore },
                        {
                          value:
                            USER_DATA.maxDrivingScore - USER_DATA.drivingScore,
                        },
                      ]} // total 1000 scale approx
                      cx="50%"
                      cy="70%"
                      innerRadius={60}
                      outerRadius={75}
                      startAngle={180}
                      endAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell key="cell-0" fill="#11d483" />
                      <Cell key="cell-1" fill="#283932" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 top-10 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-extrabold text-white">
                    {USER_DATA.drivingScore}
                  </span>
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    Excellent
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black">
                    <span className="material-symbols-outlined text-sm font-bold">
                      verified
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white">Braking</span>
                </div>
                <span className="text-xs font-bold text-primary">Top 5%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-sm font-bold">
                      speed
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Speed</span>
                    <span className="text-xs text-gray-400">Compliance</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-primary">
                    Top 15%
                  </span>
                  <div className="h-1 w-16 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <div className="h-full w-[85%] bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-white/10 bg-dashboard-surface p-6 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-6">
              Recent Activity
            </h3>
            <div className="flex flex-col gap-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-white/10"></div>

              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 relative z-10"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dashboard-surface border border-white/10">
                    <span
                      className={`material-symbols-outlined text-xs ${
                        activity.type === "positive"
                          ? "text-primary"
                          : "text-blue-400"
                      }`}
                    >
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">
                        {activity.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {activity.subtitle}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        activity.type === "positive"
                          ? "text-primary"
                          : "text-white"
                      }`}
                    >
                      {activity.amount}
                    </span>
                  </div>
                  {idx === 0 && (
                    <span
                      className="material-symbols-outlined text-primary text-xs ml-2"
                      title="Verified"
                    >
                      verified
                    </span>
                  )}
                  {idx > 0 && (
                    <span
                      className="material-symbols-outlined text-green-500 text-xs ml-2"
                      title="Completed"
                    >
                      check_circle
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider transition-colors">
              View All History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
