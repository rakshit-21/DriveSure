import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";
import {
  Car,
  MapPin,
  Calendar,
  Clock,
  Navigation,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Zap,
} from "lucide-react";

import { USER_DATA } from "../lib/constants";

// Fix Leaflet marker icons
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Mock Data
const JOURNEYS = [
  {
    id: 1,
    title: "Highway Commute",
    date: "Today, 10:30 AM",
    distance: "24km",
    score: 88,
    duration: "45 min",
    incidents: 2,
    start: [19.076, 72.8777],
    end: [19.2183, 72.9781],
    route: [
      [19.076, 72.8777],
      [19.1136, 72.8697],
      [19.1663, 72.8526],
      [19.2183, 72.9781],
    ],
    status: "LIVE VIEW",
    statusColor: "blue",
  },
  {
    id: 2,
    title: "Downtown Route",
    date: "Yesterday, 6:15 PM",
    distance: "12km",
    score: 98,
    duration: "28 min",
    incidents: 0,
    start: [19.076, 72.8777],
    end: [18.922, 72.8347],
    route: [
      [19.076, 72.8777],
      [19.0213, 72.8424],
      [18.922, 72.8347],
    ],
    status: "SAFE",
    statusColor: "green",
  },
  {
    id: 3,
    title: "Weekend Trip",
    date: "Oct 24, 9:00 AM",
    distance: "145km",
    score: 95,
    duration: "3h 10m",
    incidents: 1,
    start: [19.076, 72.8777],
    end: [18.5204, 73.8567],
    route: [
      [19.076, 72.8777],
      [18.9894, 73.1175],
      [18.7492, 73.405],
      [18.5204, 73.8567],
    ],
    status: "COMPLETED",
    statusColor: "gray",
  },
  {
    id: 4,
    title: "Office to Home",
    date: "Oct 23, 5:30 PM",
    distance: "8km",
    score: 100,
    duration: "22 min",
    incidents: 0,
    start: [19.0178, 72.8478],
    end: [19.076, 72.8777],
    route: [
      [19.0178, 72.8478],
      [19.0456, 72.8654],
      [19.076, 72.8777],
    ],
    status: "COMPLETED",
    statusColor: "gray",
  },
];

// Helper to center map
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 12, { duration: 2 });
  }, [center, map]);
  return null;
}

const DrivingStats: React.FC = () => {
  const [selectedJourney, setSelectedJourney] = useState(JOURNEYS[0]);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh)] gap-0 lg:gap-0 bg-[#0c100e] text-white">
      {/* Left Sidebar - Stats */}
      <div className="w-full lg:w-[320px] flex flex-col border-r border-white/5 bg-[#0c120c] z-10 p-6 overflow-y-auto">
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-12 w-12 rounded-full bg-gray-700 bg-cover bg-center border-2 border-primary"
            style={{
              backgroundImage: `url('${USER_DATA.avatar}')`,
            }}
          ></div>
          <div>
            <h3 className="font-bold text-white text-lg leading-tight">
              {USER_DATA.name}
            </h3>
            <p className="text-[10px] uppercase font-bold text-primary tracking-wider">
              {USER_DATA.drivingScoreLabel} Safe Driver
            </p>
          </div>
        </div>

        {/* Circular Score */}
        <div className="relative h-64 w-full flex items-center justify-center mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { value: selectedJourney.score },
                  { value: 100 - selectedJourney.score },
                ]}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
                cornerRadius={10}
              >
                <Cell
                  key="cell-0"
                  fill={
                    selectedJourney.score > 90
                      ? "#11d483"
                      : selectedJourney.score > 70
                      ? "#eab308"
                      : "#ef4444"
                  }
                />
                <Cell key="cell-1" fill="#1c241c" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-5xl font-extrabold text-white">
              {selectedJourney.score}
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">
              Score
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Top 5% of drivers
          </span>
        </div>

        {/* Wallet & Stats */}
        <div className="bg-[#161b16] rounded-xl p-4 border border-white/5 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                Wallet Balance
              </p>
              <h4 className="text-2xl font-bold text-white">
                {USER_DATA.currency}
                {USER_DATA.walletBalance.toLocaleString()}
              </h4>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5">
              <span className="material-symbols-outlined text-gray-400">
                account_balance_wallet
              </span>
            </div>
          </div>
          <button className="w-full py-2 rounded-lg bg-[#283932] text-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#283932]/80 transition-all">
            <span className="material-symbols-outlined text-sm">add</span>
            Saved this month: ₹150
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#161b16] rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
              <MapPin className="h-4 w-4" />
              <p className="text-[10px] font-bold uppercase">Dist.</p>
            </div>
            <p className="text-2xl font-bold text-white">1,240</p>
            <p className="text-[10px] text-gray-500">km total</p>
          </div>
          <div className="bg-[#161b16] rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-orange-400">
              <Clock className="h-4 w-4" />
              <p className="text-[10px] font-bold uppercase">Time</p>
            </div>
            <p className="text-2xl font-bold text-white">42</p>
            <p className="text-[10px] text-gray-500">hrs total</p>
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 relative flex flex-col isolation-auto">
        {/* Map Container */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <MapContainer
            center={selectedJourney.start as [number, number]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", position: "absolute" }}
            className="z-0"
          >
            {/* Using CartoDB Dark Matter tiles for the dark theme look */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            <MapUpdater center={selectedJourney.start as [number, number]} />

            {/* Current Route Polyline */}
            <Polyline
              positions={selectedJourney.route as [number, number][]}
              pathOptions={{
                color: selectedJourney.score > 90 ? "#11d483" : "#eab308",
                weight: 6,
                opacity: 0.8,
              }}
            />

            {/* Start Marker */}
            <Marker position={selectedJourney.start as [number, number]}>
              <Popup>Start Point</Popup>
            </Marker>

            {/* End Marker */}
            <Marker position={selectedJourney.end as [number, number]}>
              <Popup>End Point</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Bottom Overlay - Journeys List */}
        <div className="absolute bottom-6 left-6 right-6 z-[400]">
          <div className="bg-[#0c120c]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">
                history
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Recent Journeys
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2">
              {JOURNEYS.map((journey) => (
                <div
                  key={journey.id}
                  onClick={() => setSelectedJourney(journey)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedJourney.id === journey.id
                      ? "bg-white/10 border-primary shadow-[0_0_15px_rgba(17,212,131,0.2)]"
                      : "bg-[#161b16] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {journey.title}
                      </h4>
                      <p className="text-[10px] text-gray-400">
                        {journey.date}
                      </p>
                    </div>
                    {journey.status === "LIVE VIEW" ? (
                      <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/20">
                        LIVE
                      </span>
                    ) : journey.score > 90 ? (
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold border border-green-500/20">
                        SAFE
                      </span>
                    ) : (
                      <div className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-gray-500" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-gray-500 uppercase font-bold">
                          Dist.
                        </span>
                        <span className="text-sm font-bold text-white">
                          {journey.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500 uppercase font-bold">
                          Score
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            journey.score > 90
                              ? "text-[#11d483]"
                              : "text-yellow-500"
                          }`}
                        >
                          {journey.score}/100
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {/* Incident dots */}
                      {Array.from({ length: journey.incidents }).map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-red-500"
                          title="Hard Event"
                        ></div>
                      ))}
                      {journey.incidents === 0 && (
                        <span className="text-[10px] text-gray-500 italic">
                          No incidents
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingStats;
