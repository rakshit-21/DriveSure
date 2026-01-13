import React, { useState, useRef } from "react";
import {
  Car,
  Upload,
  X,
  CheckCircle,
  Loader2,
  Sparkles,
  AlertCircle,
} from "lucide-react";

const CreateClaim: React.FC = () => {
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
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
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
          Create New Claim
        </h2>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-400">
            Claim ID: <span className="text-white font-mono">#SPH-882910</span>
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
                Connect your dashcam footage or upload a video description. Our
                AI will analyze the incident, estimate damages, and pre-fill the
                claim form for you.
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
                    <span className="text-sm font-medium">Fraud Detection</span>
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
                <label className="text-sm text-gray-400">What happened?</label>
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
            By clicking submit, our AI will instantly verify your claim against
            telematics data. Estimated payout window:{" "}
            <span className="text-primary font-bold">Instant - 4 hours</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateClaim;
