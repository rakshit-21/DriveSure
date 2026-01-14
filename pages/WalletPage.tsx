import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  ArrowUpRight,
  Wallet,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Zap,
  Clock,
  Shield,
  Download,
  Plus,
  Lock,
  ArrowRight,
  Eye,
} from "lucide-react";
import { USER_DATA } from "../lib/constants";

const WalletPage: React.FC = () => {
  const [balance, setBalance] = useState(USER_DATA.walletBalance);
  const [activeTab, setActiveTab] = useState("overview");

  const transactions = [
    {
      hash: "0x4a...9f21",
      type: "Safe Driving Reward",
      points: "+50 pts",
      time: "10:05 AM",
      color: "text-green-500",
    },
    {
      hash: "0x8b...3c12",
      type: "Overspeed Penalty (Zone B)",
      points: "-120 pts",
      time: "09:42 AM",
      color: "text-red-500",
    },
    {
      hash: "0x1c...7d99",
      type: "Wallet Recharge (UPI)",
      points: "₹ 500",
      time: "Yesterday",
      color: "text-white",
    },
    {
      hash: "0xe2...4a81",
      type: "Parking Fee Auto-Deduct",
      points: "₹ 45",
      time: "Yesterday",
      color: "text-white",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Wallet & Economics
          </h2>
          <p className="text-gray-400 mt-1">
            Advanced points management and predictive analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#161b16] px-4 py-2.5 text-sm font-semibold text-gray-300 hover:bg-white/5 transition-all">
            <Download className="h-4 w-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#11d483] px-5 py-2.5 text-sm font-bold text-black hover:bg-[#11d483]/90 transition-all shadow-[0_0_15px_rgba(17,212,131,0.3)]">
            <Plus className="h-4 w-4" />
            Add Funds
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="lg:col-span-2 rounded-[24px] bg-[#0c120c] border border-white/5 p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Circular Progress */}
          <div className="relative h-48 w-48 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[{ value: 75 }, { value: 25 }]}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell
                    key="cell-0"
                    fill="#11d483"
                    className="drop-shadow-[0_0_10px_rgba(17,212,131,0.5)]"
                  />
                  <Cell key="cell-1" fill="#1c241c" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                Balance
              </span>
              <span className="text-3xl font-extrabold text-white">
                ₹ {balance.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-[#11d483] mt-1">
                +12% MoM
              </span>
            </div>
          </div>

          {/* Stats List */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between rounded-xl bg-[#161b16] border border-white/5 p-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-[#11d483] shadow-[0_0_8px_#11d483]"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    Projected Depletion
                  </p>
                  <p className="text-lg font-bold text-white">Nov 14th</p>
                  <p className="text-[10px] text-green-500/80">
                    Based on 7-day MA
                  </p>
                </div>
              </div>
              <TrendingDown className="h-5 w-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#161b16] border border-white/5 p-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    Projected Savings
                  </p>
                  <p className="text-lg font-bold text-white">₹ 850.00</p>
                </div>
              </div>
              <Wallet className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Right Column: Staking & Quick Actions */}
        <div className="flex flex-col gap-6">
          {/* Staking Card */}
          <div className="rounded-[24px] bg-gradient-to-br from-[#1c241c] to-[#0c120c] border border-white/5 p-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-[#11d483] text-black text-[10px] font-bold px-2 py-0.5 rounded">
              New
            </div>
            <div className="mb-6">
              <Lock className="h-6 w-6 text-[#11d483] mb-3" />
              <h3 className="text-lg font-bold text-white">
                Staking Mechanism
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Lock points for{" "}
                <span className="text-white font-bold">5% Bonus</span> yield
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-white text-black text-sm font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Lock Points
              </button>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Current APY
                </p>
                <p className="text-xl font-bold text-[#11d483]">5.0%</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#11d483]/5 rounded-full blur-2xl group-hover:bg-[#11d483]/10 transition-all"></div>
          </div>

          {/* Quick Recharge */}
          <div className="rounded-[24px] bg-[#161b16] border border-white/5 p-5 flex items-center justify-between cursor-pointer hover:bg-[#1c241c] transition-colors relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1c241c] border border-white/10 px-3 py-0.5 rounded-full text-[10px] flex items-center gap-1">
              <Zap className="h-3 w-3 text-[#11d483]" />
              <span className="text-gray-400">
                Rec: <span className="text-white">₹850</span> covers next 500km
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#11d483]/10 flex items-center justify-center text-[#11d483]">
                <span className="material-symbols-outlined text-xl">
                  qr_code_scanner
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Quick Recharge</p>
                <p className="text-[10px] text-gray-500">Via UPI / Wallet</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Middle Row: Simulator & Driver Score */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Driver Score */}
        <div className="rounded-[24px] bg-[#0c120c] border border-white/5 p-6 relative">
          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-4">
            Driver Risk Score
          </p>
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="relative h-32 w-full flex items-end justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ value: USER_DATA.drivingScore }, { value: 1000 - USER_DATA.drivingScore }]}
                    cx="50%"
                    cy="85%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={5}
                  >
                    <Cell key="cell-0" fill="#11d483" />
                    <Cell key="cell-1" fill="#1c241c" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 mb-2 flex flex-col items-center pointer-events-none">
                <span className="text-4xl font-extrabold text-white leading-none">
                  {USER_DATA.drivingScore}
                </span>
                <span className="text-sm text-gray-500 font-bold">/1000</span>
              </div>
            </div>
            <div className="mt-2 bg-[#11d483]/10 text-[#11d483] px-3 py-1 rounded text-xs font-bold">
              Excellent Driver
            </div>
          </div>
        </div>

        {/* What-if Simulator */}
        <div className="lg:col-span-2 rounded-[24px] bg-[#0c120c] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#11d483]">
                  tune
                </span>
                <h3 className="text-lg font-bold text-white">
                  What-If Simulator
                </h3>
              </div>
              <p className="text-xs text-gray-400">
                Adjust driving parameters to simulate savings.
              </p>
            </div>
            <div className="bg-[#161b16] px-4 py-2 rounded-xl text-right">
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                Proj. Monthly Savings
              </p>
              <p className="text-xl font-bold text-[#11d483]">₹ 1,250</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Simulator 1 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span className="font-bold text-white">
                    Avoid Night Driving
                  </span>
                </div>
                <span className="bg-[#182830] text-[#4da6ff] text-[10px] px-2 py-0.5 rounded font-bold">
                  100% Avoidance
                </span>
              </div>
              <input
                type="range"
                className="w-full h-1.5 bg-[#1c241c] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
              />
              <p className="text-[10px] text-gray-500">
                Reduces risk multiplier from 2.1x to 1.0x
              </p>
            </div>

            {/* Simulator 2 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#11d483]"></div>
                  <span className="font-bold text-white">
                    Urban Speed Limit
                  </span>
                </div>
                <span className="bg-[#11221a] text-[#11d483] text-[10px] px-2 py-0.5 rounded font-bold">
                  98% Adherence
                </span>
              </div>
              <input
                type="range"
                className="w-full h-1.5 bg-[#1c241c] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#11d483]"
              />
              <p className="text-[10px] text-gray-500">
                Reduces 'Zone B' penalties significantly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Burn Rate Analyzer */}
        <div className="rounded-[24px] bg-[#0c120c] border border-white/5 p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-base font-bold text-white">
                Burn Rate Analyzer
              </h3>
              <p className="text-[10px] text-gray-400">
                Active Multipliers (Last 7d)
              </p>
            </div>
            <span className="material-symbols-outlined text-gray-500">
              bar_chart
            </span>
          </div>

          {/* Item 1 */}
          <div className="rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-transparent p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined text-sm">
                  bedtime
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Night Driving</p>
                <p className="text-[10px] text-gray-500">Frequent 1-4 AM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-red-500">2.1x</p>
              <p className="text-[8px] uppercase font-bold text-gray-500">
                Burn Rate
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                <span className="material-symbols-outlined text-sm">speed</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Urban Speeding</p>
                <p className="text-[10px] text-gray-500">Zone B Overshoot</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-orange-500">1.8x</p>
              <p className="text-[8px] uppercase font-bold text-gray-500">
                Burn Rate
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="rounded-xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Harsh Events</p>
                <p className="text-[10px] text-gray-500">3 Hard Brakes</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-yellow-500">3.0x</p>
              <p className="text-[8px] uppercase font-bold text-gray-500">
                Penalty
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain Ledger */}
        <div className="lg:col-span-2 rounded-[24px] bg-[#0c120c] border border-white/5 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-white">
              Blockchain Ledger
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#11d483] animate-pulse"></div>
              <span className="text-[10px] font-bold text-gray-400">
                Live Sync
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase text-gray-500 border-b border-white/5">
                  <th className="pb-3 pl-2 font-bold">Tx Hash</th>
                  <th className="pb-3 font-bold">Event Type</th>
                  <th className="pb-3 font-bold text-right">Points Delta</th>
                  <th className="pb-3 font-bold text-right">Timestamp</th>
                  <th className="pb-3 font-bold text-right pr-2">Drilldown</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {transactions.map((tx, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  >
                    <td className="py-4 pl-2 font-mono text-gray-500">
                      {tx.hash}
                    </td>
                    <td className="py-4 font-bold text-white">{tx.type}</td>
                    <td className={`py-4 text-right font-bold ${tx.color}`}>
                      {tx.points}
                    </td>
                    <td className="py-4 text-right text-gray-400">{tx.time}</td>
                    <td className="py-4 text-right pr-2">
                      <button className="flex items-center gap-1 ml-auto text-gray-500 hover:text-white transition-colors">
                        <Eye className="h-3 w-3" />
                        <span className="text-[10px]">View Event</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-2 border-t border-white/5 text-center">
            <button className="text-[10px] font-bold text-gray-500 hover:text-[#11d483] flex items-center justify-center gap-1 mx-auto transition-colors">
              View All Transactions
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
