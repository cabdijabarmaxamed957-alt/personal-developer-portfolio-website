"use client";

import React, { useState } from "react";
import {
  Terminal,
  Send,
  Copy,
  Check,
  Zap,
  ShieldCheck,
  Server,
  Layers,
  Database,
  Activity,
  Code2,
  Clock,
  ArrowRight,
} from "lucide-react";

interface Endpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  defaultPayload?: string;
  mockResponse: any;
}

const endpoints: Endpoint[] = [
  {
    method: "POST",
    path: "/api/v1/auth/token",
    description: "Issue cryptographic RS256 signed bearer access & refresh tokens.",
    defaultPayload: JSON.stringify(
      {
        grant_type: "client_credentials",
        client_id: "synthetix_client_0921",
        scope: "read:telemetry write:dispatch",
      },
      null,
      2
    ),
    mockResponse: {
      access_token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeW50aGV0aXgtMDAxIiwiaWF0IjoxNzI3NzgwMDAwLCJleHAiOjE3Mjc3ODM2MDB9...",
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: "rfr_9941a8b27c014e",
      algorithm: "RS256",
      key_id: "prod-key-2026-v2",
    },
  },
  {
    method: "GET",
    path: "/api/v1/cache/keys/cluster-summary",
    description: "Fetch real-time Redis cluster memory usage and Snappy compression ratio.",
    mockResponse: {
      cluster_state: "OK",
      total_keys: 1482094,
      memory_allocated_mb: 2048,
      memory_used_mb: 412.8,
      compression_algorithm: "Snappy",
      compression_ratio: "64.2% reduction",
      hit_ratio_percent: 94.6,
      shards: [
        { shard_id: "shard-01-us-east", role: "master", latency_ms: 0.4 },
        { shard_id: "shard-02-us-west", role: "replica", latency_ms: 1.1 },
      ],
    },
  },
  {
    method: "POST",
    path: "/api/v1/rate-limit/verify",
    description: "Evaluate token bucket balance against client IP address and tier limits.",
    defaultPayload: JSON.stringify(
      {
        client_ip: "192.168.1.100",
        requested_cost: 1,
        tier: "enterprise_platinum",
      },
      null,
      2
    ),
    mockResponse: {
      allowed: true,
      current_tokens_remaining: 994,
      bucket_capacity: 1000,
      refill_rate_per_sec: 100,
      reset_epoch_seconds: 1727780060,
      penalty_state: "NONE",
    },
  },
];

export default function ApiGatewayApp() {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [requestBody, setRequestBody] = useState(endpoints[0].defaultPayload || "");
  const [isExecuting, setIsExecuting] = useState(false);
  const [responseOutput, setResponseOutput] = useState<any>(endpoints[0].mockResponse);
  const [responseStatus, setResponseStatus] = useState<number>(200);
  const [latency, setLatency] = useState<number>(14.2);
  const [copied, setCopied] = useState(false);

  const activeEndpoint = endpoints[selectedEndpointIndex];

  const handleSelectEndpoint = (index: number) => {
    setSelectedEndpointIndex(index);
    setRequestBody(endpoints[index].defaultPayload || "");
    setResponseOutput(null);
  };

  const executeRequest = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setResponseStatus(200);
      setLatency(Math.round((8 + Math.random() * 12) * 10) / 10);
      setResponseOutput(activeEndpoint.mockResponse);
    }, 450);
  };

  const copyToClipboard = () => {
    if (!responseOutput) return;
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#05070D] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#080B14]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-[#00F0FF] p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full bg-[#080B14] rounded-xl flex items-center justify-center text-violet-400">
              <Server className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">Synthetix API Gateway</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                v2.4 High-Throughput Edge
              </span>
            </div>
            <p className="text-xs text-slate-400">Interactive REST Playground, Token Broker & Redis Telemetry</p>
          </div>
        </div>

        {/* Global Cluster Stats */}
        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Edge Latency:</span>
            <span className="text-emerald-400 font-bold">0.8ms</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400">Redis Cache Hit:</span>
            <span className="text-[#00F0FF] font-bold">94.6%</span>
          </div>
        </div>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Endpoints & Request Builder (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Endpoint Picker */}
          <div className="p-4 rounded-2xl bg-[#090D18] border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Available Gateway Endpoints
            </span>
            <div className="flex flex-col gap-2">
              {endpoints.map((ep, idx) => (
                <button
                  key={ep.path}
                  onClick={() => handleSelectEndpoint(idx)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${
                    selectedEndpointIndex === idx
                      ? "bg-violet-600/15 border-violet-500/60 shadow-lg shadow-violet-500/10 text-white"
                      : "bg-[#060912] border-slate-800/80 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        ep.method === "POST"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-xs font-mono font-semibold">{ep.path}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Request Payload Editor */}
          <div className="p-5 rounded-2xl bg-[#090D18] border border-slate-800 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-violet-400" /> Request Payload (JSON)
              </span>
              <span className="text-[10px] font-mono text-slate-500">Content-Type: application/json</span>
            </div>

            {activeEndpoint.defaultPayload ? (
              <textarea
                rows={9}
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#05070E] border border-slate-800 text-xs font-mono text-violet-300 focus:outline-none focus:border-violet-500 resize-none leading-relaxed"
                spellCheck={false}
              />
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 bg-[#05070E] rounded-xl border border-slate-800/60">
                This GET request does not require a request body.
              </div>
            )}

            <button
              onClick={executeRequest}
              disabled={isExecuting}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-[#0066FF] hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-bold shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              <Send className={`w-3.5 h-3.5 ${isExecuting ? "animate-spin" : ""}`} />
              <span>{isExecuting ? "DISPATCHING PACKET..." : `EXECUTE ${activeEndpoint.method} REQUEST`}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Network Inspector & Response Console (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Telemetry Response Box */}
          <div className="p-6 rounded-3xl bg-[#070A14] border border-slate-800 flex flex-col gap-4 flex-1 shadow-2xl">
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="text-slate-400">Response Code:</span>
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  {responseStatus} OK
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Round-Trip:</span>
                <span className="text-[#00F0FF] font-bold">{latency} ms</span>
              </div>

              {responseOutput && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy JSON"}</span>
                </button>
              )}
            </div>

            {/* Response Headers */}
            <div className="p-3.5 rounded-xl bg-[#05070E] border border-slate-800/80 font-mono text-[11px] text-slate-400 grid grid-cols-2 gap-2">
              <div>
                <span className="text-slate-500">x-cache-engine:</span> Redis-Cluster-v7.2
              </div>
              <div>
                <span className="text-slate-500">x-ratelimit-remaining:</span> 994 / 1000
              </div>
              <div>
                <span className="text-slate-500">content-encoding:</span> snappy-stream
              </div>
              <div>
                <span className="text-slate-500">x-synthetix-node:</span> edge-fra-01
              </div>
            </div>

            {/* Response Body Pre-formatted */}
            <div className="flex-1 bg-[#05070E] rounded-2xl border border-slate-800/80 p-4 overflow-auto max-h-[460px]">
              {responseOutput ? (
                <pre className="font-mono text-xs text-emerald-300 leading-relaxed whitespace-pre-wrap">
                  {JSON.stringify(responseOutput, null, 2)}
                </pre>
              ) : (
                <div className="h-full flex items-center justify-center text-xs text-slate-500 font-mono">
                  Executing request through gateway pipeline...
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
