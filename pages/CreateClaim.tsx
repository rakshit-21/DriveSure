import React, { useState, useRef, useEffect } from "react";
import {
  Car,
  Upload,
  X,
  CheckCircle,
  Loader2,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Shield,
  MapPin,
  TrendingDown,
  ChevronRight,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { USER_DATA } from "../lib/constants";

const ProcessingView = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Total 5 seconds simulation
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col lg:flex-row h-[70vh] overflow-hidden rounded-2xl border border-[#283932] bg-[#10221a] animate-fade-in relative shadow-2xl">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(17, 212, 131, 0.05) 50%)",
          backgroundSize: "100% 4px",
        }}
      ></div>

      {/* Sidebar */}
      <aside className="w-full lg:w-[350px] border-r border-[#283932] flex flex-col bg-black/20 z-10">
        <div className="p-6 border-b border-[#283932] bg-[#1a2e25]/30">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <span className="material-symbols-outlined text-primary">
                smart_toy
              </span>
            </div>
            <div>
              <h3 className="font-bold text-white">n8n Orchestrator</h3>
              <p className="text-[11px] text-[#9db9ad] uppercase tracking-tighter">
                Instance: BOM-MUM-772
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-2 overflow-y-auto">
          {/* Timeline Items */}
          {[
            {
              title: "Detecting Impact Event",
              sub: "10:42:01.042 AM - G-Force: 4.2g",
              icon: "sensors",
              active: true,
            },
            {
              title: "Verifying Telemetry",
              sub: "10:42:05.112 AM - GPS-Synced",
              icon: "check_circle",
              active: progress > 20,
            },
            {
              title: "Fraud Check Passed",
              sub: "Risk Score: 0.02",
              icon: "verified_user",
              active: progress > 50,
            },
            {
              title: "Calculating Smart Settlement",
              sub: "INR Repair Logic",
              icon: "payments",
              active: progress > 80,
              pulse: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[32px_1fr] gap-x-3 transition-opacity duration-500"
              style={{ opacity: item.active ? 1 : 0.4 }}
            >
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`material-symbols-outlined text-lg ${
                    item.active ? "text-primary" : "text-gray-600"
                  } ${item.pulse && "animate-pulse"}`}
                >
                  {item.icon}
                </span>
                {i < 3 && (
                  <div
                    className={`w-[1.5px] h-8 ${
                      item.active ? "bg-primary" : "bg-[#283932]"
                    }`}
                  ></div>
                )}
              </div>
              <div className="pb-6">
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-[#9db9ad] text-xs">{item.sub}</p>
                {item.pulse && (
                  <div className="mt-2 p-3 rounded bg-primary/5 border border-primary/20">
                    <div className="w-full bg-[#111815] h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: `${(progress - 80) * 5}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 flex flex-col relative z-10 p-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-1">
              Incident Report
            </p>
            <h2 className="text-white text-3xl font-extrabold leading-tight">
              Claim ID: #PC-IN-88291
            </h2>
          </div>
          <div className="text-right">
            <p className="text-[#9db9ad] text-xs uppercase font-medium">
              Policy Type
            </p>
            <p className="text-white font-bold">{USER_DATA.policyName}</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 lg:col-span-3 rounded-xl overflow-hidden relative group border border-white/5 bg-black/40 h-64 md:h-auto min-h-[300px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn-3Ggn_vFN64y3ruXen17wEvxhRa54cIKVeSIKMFe4CjQfsO9jz0_vVc5xf0UGLLqiEZp4192uX7TLkvxRoi1_ULfQYJXws8-cY-ec5nUQtIR60bH9fTiJMi9DtYAH23xOOQ6nO2zOx9NRPNGoR7SSFRw2uKjt3vL5fczVEToSpxSndzw3eDdZT4jpV_4nrl1HzSWBIpRyD0kE8VGD1t6kH6QrWDkjk0j-zC3rdSt5mT8OfYPYauGcXqwGNW4eb8ni_47WGPYQw"
                alt="Car Wireframe"
                className="w-full h-full object-contain opacity-50 grayscale contrast-125"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 border-primary animate-ping opacity-20 size-32"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 p-2 rounded-lg border border-primary animate-pulse flex items-center justify-center">
                <Car className="text-primary h-8 w-8" />
              </div>
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <div className="px-3 py-1 bg-black/60 rounded border border-white/10 text-[10px] font-bold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>{" "}
                LIDAR: ACTIVE
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex items-center justify-between bg-primary p-6 rounded-xl shadow-[0_10px_40px_rgba(17,212,131,0.2)]">
            <div className="text-[#111815]">
              <h4 className="text-xl font-extrabold">
                Payout Analysis Complete
              </h4>
              <p className="text-sm font-medium opacity-80">
                Finalizing settlement amount based on parametric triggers.
              </p>
            </div>
            <div className="text-[#111815] font-black text-3xl">₹2,04,500</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SettledView = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center animate-fade-in text-center">
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/5">
        <CheckCircle className="text-primary h-10 w-10" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
        Claim Settled in 3 Minutes
      </h1>
      <p className="text-gray-400 mb-10">
        Processed by MotoShield AI in exactly 2m 48s
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-10 text-left">
        {/* Payout Card */}
        <div className="flex flex-col bg-[#1a2e25] rounded-2xl border border-[#283932] overflow-hidden">
          <div className="p-6 bg-primary/5 border-b border-[#283932]">
            <p className="text-[#9db9ad] text-xs font-bold uppercase tracking-wider mb-1">
              Total Payout Credited
            </p>
            <h3 className="text-white text-4xl font-bold">₹1,20,450.00</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9db9ad]">Base Assessment</span>
              <span className="text-white font-semibold">₹1,41,200.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#9db9ad]">Deductible Applied</span>
              <span className="text-white/60">-₹20,750.00</span>
            </div>
            <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-2">
              <span className="text-[#9db9ad] text-xs font-bold uppercase">
                Destination Wallet
              </span>
              <span className="font-mono text-white text-xs bg-black/20 px-2 py-1 rounded">
                0x71C...92b4
              </span>
            </div>
          </div>
        </div>

        {/* Score Card */}
        <div className="flex flex-col bg-[#1a2e25] rounded-2xl border border-[#283932] p-6 justify-between">
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Updated Safety Score
            </h4>
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: 84 }, { value: 16 }]}
                      innerRadius={38}
                      outerRadius={46}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="#11d483" />
                      <Cell fill="#283932" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">84</span>
                  <span className="text-[10px] text-gray-500">/100</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingDown className="text-orange-400 h-4 w-4" />
                  <span className="text-white font-bold">-2 Points</span>
                </div>
                <p className="text-[#9db9ad] text-xs leading-relaxed">
                  Your score adjusted slightly. Maintain safe habits to restore
                  your 5% premium discount.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-primary/10 rounded-lg p-3 border border-primary/20 flex gap-3">
            <Sparkles className="text-primary h-5 w-5 flex-shrink-0" />
            <div>
              <p className="text-white text-[10px] font-bold uppercase mb-0.5">
                AI Insight
              </p>
              <p className="text-primary/90 text-xs">
                Safe driving during rain events can boost your score by 4
                points.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white mb-6 self-start">
        Next Steps & Partner Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10 text-left">
        {[
          {
            name: "Precision Body Works",
            dist: "0.8 km",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdsN_jDKBzQcNfZ-gzVT6SzqZhdkF_jMmJmIe4ZUkYGNIonLnu6vPS6jGyfem_SUTbKVBUrjXEdK0j_tBCGWkl5ymRgu8O9YYjk38fvQCBQ6ykQD0frYcnMPLLkUPd8r105M3sgCbISejuA47b6_XcGKae2smWp4lWDBXAn0uVOKvHMvLTtFHDCOJ7HQR_NmCMpCwNmRM2h63-q9N5EXLsAusbZlTAY5C17l4feIjvg4saApjLagEiW7IT4_NA1etHh9ntjnywHQ",
          },
          {
            name: "Elite Auto Care",
            dist: "2.4 km",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmGLtMB2TAaafeOxymEXurvQrim-GPdWM0_oAIEgb-z3LI3KH2PZs77TiF6lYepRA1_fFQ7awKLgKEIYyqAOAoj9P7sDnaIzrozfRMucLxePMSwCn5KB7OhczRMzE6ZO5YNQH27iL2Nb4mcKTunUSsasX52AgKSDji0Y_DbYIQyIMArI6UB2f5omTyMO79iLGv64tkABUfnVIAdHTY07EpGBymWxYG18V1dwnKFXXJUaWB5qP5hLs7NwztR5KNiIu2sw2kCft_NQ",
          },
        ].map((shop, i) => (
          <div
            key={i}
            className="bg-[#1a2e25] p-3 rounded-xl border border-[#283932] group hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="h-24 bg-gray-800 rounded-lg mb-3 overflow-hidden relative">
              <img
                src={shop.img}
                alt={shop.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-primary bg-[#10221a] p-1.5 rounded-full h-8 w-8 box-content" />
              </div>
            </div>
            <h4 className="text-white font-bold text-sm mb-1">{shop.name}</h4>
            <p className="text-[#9db9ad] text-xs mb-3">
              {shop.dist} away • Partner
            </p>
            <button className="w-full py-2 bg-[#283932] hover:bg-primary hover:text-[#10221a] text-white rounded-lg text-xs font-bold transition-all uppercase tracking-wide">
              Book Repair
            </button>
          </div>
        ))}
        <div className="bg-gradient-to-br from-[#11d483] to-[#0a8a56] p-4 rounded-xl shadow-lg text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-4 -top-4 opacity-20">
            <span className="material-symbols-outlined text-9xl">
              nights_stay
            </span>
          </div>
          <div>
            <div className="bg-white/20 w-max px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-3">
              AI Recommendation
            </div>
            <h4 className="text-lg font-bold leading-tight mb-2">
              15% Off Night-Driving Add-on
            </h4>
            <p className="text-white/80 text-xs mb-4">
              Based on your trip history, this coverage provides extra peace of
              mind.
            </p>
          </div>
          <button className="w-full py-2 bg-white text-[#0a8a56] hover:bg-slate-50 rounded-lg text-xs font-bold transition-all uppercase tracking-wide shadow-sm">
            Claim Discount
          </button>
        </div>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="px-8 py-3 bg-primary text-[#10221a] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(17,212,131,0.4)] transition-all flex items-center gap-2"
      >
        Back to Dashboard
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const CreateClaim: React.FC = () => {
  const [viewState, setViewState] = useState<"form" | "processing" | "settled">(
    "form"
  );
  const [activeTab, setActiveTab] = useState<"manual" | "auto">("manual");
  const [incidentType, setIncidentType] = useState("Accident");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call and transition
    setTimeout(() => {
      setIsSubmitting(false);
      setViewState("processing");
    }, 2000);
  };

  const handleAIAutoFill = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIncidentType("Accident");
      // In a real app, this would fill other fields
    }, 2500);
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 animate-fade-in text-white">
      {viewState === "processing" && (
        <ProcessingView onComplete={() => setViewState("settled")} />
      )}
      {viewState === "settled" && <SettledView />}

      {viewState === "form" && (
        <>
          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
              Create New Claim
            </h2>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400">
                Claim ID:{" "}
                <span className="text-white font-mono">#SPH-882910</span>
              </span>
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-bold text-primary tracking-wider border border-white/5">
                PLATINUM MOTOR ALPHA
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-white/10 pb-1">
            <button
              onClick={() => setActiveTab("manual")}
              className={`relative pb-3 text-sm font-bold transition-colors ${
                activeTab === "manual"
                  ? "text-white after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Manual Entry
            </button>
            <button
              onClick={() => setActiveTab("auto")}
              className={`flex items-center gap-2 pb-3 text-sm font-bold transition-colors ${
                activeTab === "auto"
                  ? "text-white after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-full after:bg-primary"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              AI Auto-Fill
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Form */}
            <div className="lg:col-span-2 flex flex-col gap-6 rounded-2xl border border-white/5 bg-dashboard-surface p-6 md:p-8 relative overflow-hidden">
              {activeTab === "auto" && (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in space-y-6">
                  <div className="relative">
                    <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                      <Sparkles className="h-12 w-12 text-primary" />
                    </div>
                    {isAnalyzing && (
                      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold">AI Claim Assistant</h3>
                  <p className="text-gray-400 max-w-md">
                    Connect your dashcam footage or upload a video description.
                    Our AI will analyze the incident, estimate damages, and
                    pre-fill the claim form for you.
                  </p>

                  <button
                    onClick={handleAIAutoFill}
                    disabled={isAnalyzing}
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-all border border-white/10 disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Analyzing Footage...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">
                          video_camera_front
                        </span>
                        Analyze Dashcam Feed
                      </>
                    )}
                  </button>

                  {!isAnalyzing && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">
                          check_circle
                        </span>
                        <span className="text-sm font-medium">
                          Instant Analysis
                        </span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-blue-500">
                          verified_user
                        </span>
                        <span className="text-sm font-medium">
                          Fraud Detection
                        </span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-purple-500">
                          bolt
                        </span>
                        <span className="text-sm font-medium">Auto-Payout</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "manual" && (
                <>
                  <h3 className="text-xl font-bold">Incident Details</h3>

                  {/* Incident Type Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">
                      What happened?
                    </label>
                    <div className="grid grid-cols-3 gap-0 rounded-lg border border-white/10 bg-black/20 p-1">
                      {["Accident", "Theft", "Weather"].map((type) => (
                        <button
                          key={type}
                          onClick={() => setIncidentType(type)}
                          className={`rounded-md py-2 text-sm font-bold transition-all ${
                            incidentType === type
                              ? "bg-primary text-dashboard-bg shadow-sm"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2024-08-15"
                        className="w-full rounded-xl border border-white/10 bg-dashboard-bg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Time
                      </label>
                      <input
                        type="time"
                        defaultValue="14:30"
                        className="w-full rounded-xl border border-white/10 bg-dashboard-bg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Describe what happened
                    </label>
                    <textarea
                      placeholder="Type incident details here..."
                      className="h-32 w-full resize-none rounded-xl border border-white/10 bg-dashboard-bg px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>

                  {/* Photos */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Damage Photos & Evidence
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 transition-colors hover:border-primary/50 hover:bg-white/10 relative overflow-hidden"
                      >
                        <Upload className="h-5 w-5 text-gray-400" />
                        <span className="text-[10px] text-gray-400">
                          Add Photo/Video
                        </span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          multiple
                          accept="image/*,video/*"
                          onChange={handleFileChange}
                        />
                      </button>

                      {/* Preloaded Examples */}
                      <div className="relative h-24 overflow-hidden rounded-xl border border-white/10 group cursor-pointer">
                        <img
                          src="https://images.unsplash.com/photo-1562920616-0b5c1c4c15d2?auto=format&fit=crop&q=80&w=300&h=300"
                          alt="Car Damage"
                          className="h-full w-full object-cover opacity-80 transition-transform group-hover:scale-110"
                        />
                      </div>

                      {/* Upload Queue */}
                      {files.map((file, idx) => (
                        <div
                          key={idx}
                          className="relative h-24 overflow-hidden rounded-xl border border-white/10 bg-white/5 group"
                        >
                          {file.type.startsWith("image/") ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt="preview"
                              className="h-full w-full object-cover opacity-80"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center flex-col gap-1">
                              <span className="material-symbols-outlined text-2xl text-gray-400">
                                movie
                              </span>
                              <span className="text-[8px] text-gray-500 truncate w-20 text-center">
                                {file.name}
                              </span>
                            </div>
                          )}

                          <button
                            onClick={() => removeFile(idx)}
                            className="absolute top-1 right-1 rounded-full bg-black/50 p-1 text-white hover:bg-red-500 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <X className="h-3 w-3" />
                          </button>
                          <div className="absolute inset-x-0 bottom-0 h-1 bg-primary animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                    {files.length > 0 && (
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {files.length} new file(s) ready for upload
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Telematics Hub */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-dashboard-surface p-6 shadow-lg shadow-black/20">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      sensors
                    </span>
                    <h3 className="font-bold text-white">Telematics Hub</h3>
                  </div>
                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/20 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                    Live Feed
                  </span>
                </div>

                {/* Map Placeholder */}
                <div className="relative mb-6 block w-full overflow-hidden rounded-xl bg-gray-800 h-40 group">
                  <div
                    style={{
                      position: "relative",
                      textAlign: "right",
                      width: "100%",
                      height: "400px",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        background: "none!important",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <iframe
                        style={{ height: "400px!important" }}
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=google banglore&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-md border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Location: Santa Monica Blvd & 4th St
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-3">
                  {/* Stat 1 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                        <Car className="text-white/70" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Impact G-Force
                        </p>
                        <p className="text-lg font-bold text-white">
                          4.2 G{" "}
                          <span className="text-xs font-medium text-gray-500">
                            Rear-Left Impact
                          </span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">
                      VERIFIED
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                        <span className="material-symbols-outlined text-white/70">
                          speed
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Speed at Incident
                        </p>
                        <p className="text-lg font-bold text-white">
                          24 mph{" "}
                          <span className="text-xs font-medium text-gray-500">
                            Deceleration: 0.8s
                          </span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">
                      VERIFIED
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                        <span className="material-symbols-outlined text-white/70">
                          car_crash
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Vehicle Health
                        </p>
                        <p className="text-xs text-gray-300">
                          Airbag Deployed:{" "}
                          <span className="text-red-400 font-bold">NO</span> •
                          Engine Code:{" "}
                          <span className="text-red-400 font-bold">P0300</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-primary">
                      VERIFIED
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400">
                      Parametric Verification Progress
                    </span>
                    <span className="font-bold text-primary">88%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-[88%] rounded-full bg-primary shadow-[0_0_10px_rgba(17,212,131,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || submitStatus === "success"}
                className={`group relative w-full overflow-hidden rounded-2xl py-4 text-center font-bold text-dashboard-bg shadow-lg transition-all active:scale-[0.98] disabled:opacity-80
                    ${
                      submitStatus === "success"
                        ? "bg-green-500 text-white"
                        : "bg-primary shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40"
                    }
                `}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>PROCESSING...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="h-6 w-6" />
                      <span>CLAIM SUBMITTED</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl">
                        bolt
                      </span>
                      <span>SUBMIT TO AI AGENT</span>
                    </>
                  )}
                </div>
                {submitStatus !== "success" && !isSubmitting && (
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 leading-relaxed px-4">
                By clicking submit, our AI will instantly verify your claim
                against telematics data. Estimated payout window:{" "}
                <span className="text-primary font-bold">
                  Instant - 4 hours
                </span>
                .
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateClaim;
