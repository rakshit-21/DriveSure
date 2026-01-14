import React from "react";
import {
  useNavigate,
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CreateClaim from "./CreateClaim";
import WalletPage from "./WalletPage";
import DrivingStats from "./DrivingStats";
import Marketplace from "./Marketplace";
import DashboardHome from "../components/DashboardHome";
import PlaceholderPage from "../components/PlaceholderPage";
import { USER_DATA } from "../lib/constants";

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
                Drive Sure
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
                to="/dashboard/create-claim"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/create-claim")
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive("/dashboard/claims")
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-white transition-colors"
                  }`}
                >
                  assignment_add
                </span>
                <span
                  className={`font-medium ${
                    isActive("/dashboard/claims")
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white transition-colors"
                  }`}
                >
                  New Claim
                </span>
              </Link>

              <Link
                to="/dashboard/driving-stats"
                className={`group flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive("/dashboard/driving-stats")
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
                  Driving Stats
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
                backgroundImage: `url('${USER_DATA.avatar}')`,
              }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <p className="truncate text-sm font-bold text-white">
                {USER_DATA.name}
              </p>
              <p className="truncate text-xs text-gray-400">{USER_DATA.role}</p>
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
          <Route path="/create-claim" element={<CreateClaim />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/driving-stats" element={<DrivingStats />} />
          <Route path="/marketplace" element={<Marketplace />} />
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
