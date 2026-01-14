import React from "react";

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

export default PlaceholderPage;
