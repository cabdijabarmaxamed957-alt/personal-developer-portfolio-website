"use client";

import React, { useState, useEffect } from "react";
import {
  Cpu,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  CheckCircle2,
  Code2,
  Database,
  ArrowRight,
  Layers,
  Settings2,
  Sliders,
  Terminal,
  Copy,
  Check,
  Activity,
  Bot,
} from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  type: "input" | "embedding" | "vector" | "llm" | "output";
  status: "idle" | "running" | "completed" | "error";
  latency?: number;
  tokens?: number;
  outputPreview?: string;
  details: string;
}

const templates = [
  {
    name: "Autonomous Code Refactoring Agent",
    prompt: "Analyze this async TypeScript handler and optimize database connection pool queries to eliminate connection exhaustion under 10k RPS.",
    expectedTokens: 480,
  },
  {
    name: "Enterprise Financial Anomaly Detector",
    prompt: "Evaluate batch transaction vector [0.89, -0.42, 1.25] for cross-border credit card structuring fraud patterns.",
    expectedTokens: 320,
  },
  {
    name: "Multi-Modal Document Extractor",
    prompt: "Parse unstructured PDF invoice text into strict ISO-20022 compliant JSON banking schema.",
    expectedTokens: 610,
  },
];

export default function AethernetApp() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [customPrompt, setCustomPrompt] = useState(templates[0].prompt);
  const [temperature, setTemperature] = useState(0.2);
  const [selectedModel, setSelectedModel] = useState("Claude 3.5 Sonnet");
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  const [streamedText, setStreamedText] = useState("");
  const [pipelineMetrics, setPipelineMetrics] = useState({
    totalLatency: 0,
    totalTokens: 0,
    costUsd: 0.0,
  });

  const nodes: PipelineNode[] = [
    {
      id: "node-1",
      name: "User Intent & Prompt Ingestion",
      type: "input",
      status: activeStep >= 0 ? (activeStep === 0 ? "running" : "completed") : "idle",
      latency: 12,
      tokens: 45,
      details: "Tokenizes input stream and validates UTF-8 payload integrity.",
    },
    {
      id: "node-2",
      name: "Neural Text Embedder (v3-small)",
      type: "embedding",
      status: activeStep >= 1 ? (activeStep === 1 ? "running" : "completed") : "idle",
      latency: 38,
      tokens: 45,
      details: "Projects text tokens into 1,536-dimensional dense latent vector.",
    },
    {
      id: "node-3",
      name: "Pinecone Vector RAG Retrieval",
      type: "vector",
      status: activeStep >= 2 ? (activeStep === 2 ? "running" : "completed") : "idle",
      latency: 74,
      tokens: 420,
      details: "Performs Approximate Nearest Neighbor (ANN) search with cosine similarity > 0.91.",
    },
    {
      id: "node-4",
      name: `Core Reasoning Engine (${selectedModel})`,
      type: "llm",
      status: activeStep >= 3 ? (activeStep === 3 ? "running" : "completed") : "idle",
      latency: 184,
      tokens: templates[selectedTemplate].expectedTokens,
      details: "Generates step-by-step chain-of-thought reasoning with schema adherence.",
    },
    {
      id: "node-5",
      name: "JSON Schema & Tool Dispatch Guard",
      type: "output",
      status: activeStep >= 4 ? (activeStep === 4 ? "running" : "completed") : "idle",
      latency: 16,
      tokens: 120,
      details: "Validates AST structure against Zod schema and dispatches downstream webhooks.",
    },
  ];

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setStreamedText("");
    setPipelineMetrics({ totalLatency: 0, totalTokens: 0, costUsd: 0.0 });

    const stepIntervals = [300, 500, 700, 1100, 400];
    let currentStep = 0;

    const executeNext = () => {
      if (currentStep < 5) {
        setActiveStep(currentStep);
        currentStep++;
        setTimeout(executeNext, stepIntervals[currentStep - 1] || 500);
      } else {
        setIsRunning(false);
        setActiveStep(4);
        setPipelineMetrics({
          totalLatency: 324,
          totalTokens: templates[selectedTemplate].expectedTokens + 510,
          costUsd: 0.0018,
        });
        setStreamedText(
          JSON.stringify(
            {
              status: "SUCCESS_VERIFIED",
              execution_id: "aeth_" + Math.random().toString(36).substring(2, 9),
              model: selectedModel,
              optimizations: [
                "Connection pool idleTimeoutMillis set to 30000ms",
                "Wrapped client checkout in transaction with automatic rollback",
                "Cached prepared query statements in local L1 memory",
              ],
              performance_gain: "+340% throughput under 10,000 concurrent virtual users",
              verified_schema: true,
            },
            null,
            2
          )
        );
      }
    };

    executeNext();
  };

  const handleCopy = () => {
    if (!streamedText) return;
    navigator.clipboard.writeText(streamedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#05070D] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-[#070B14]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-[#0066FF] to-[#00F0FF] p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(0,102,255,0.4)]">
            <div className="w-full h-full bg-[#070B14] rounded-xl flex items-center justify-center text-[#00F0FF]">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">Aethernet AI Canvas</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Neural Graph Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">Visual Node-Based Model Orchestration & RAG Pipeline</p>
          </div>
        </div>

        {/* Global Controls & Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveStep(-1);
              setStreamedText("");
              setPipelineMetrics({ totalLatency: 0, totalTokens: 0, costUsd: 0 });
            }}
            disabled={isRunning}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors disabled:opacity-30"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] via-indigo-600 to-[#00F0FF] text-white text-xs font-bold tracking-wide shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <Play className={`w-4 h-4 fill-white ${isRunning ? "animate-spin" : ""}`} />
            <span>{isRunning ? "EXECUTING PIPELINE..." : "RUN NEURAL PIPELINE"}</span>
          </button>
        </div>
      </header>

      {/* Main Studio Viewport */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Node Flow (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Preset Template Switcher */}
          <div className="p-4 rounded-2xl bg-[#090F1B] border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
              <Bot className="w-3.5 h-3.5 text-[#00F0FF]" /> Preset AI Architectures
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {templates.map((tpl, idx) => (
                <button
                  key={tpl.name}
                  onClick={() => {
                    setSelectedTemplate(idx);
                    setCustomPrompt(tpl.prompt);
                    setActiveStep(-1);
                    setStreamedText("");
                  }}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    selectedTemplate === idx
                      ? "bg-[#0066FF]/15 border-[#0066FF] text-white shadow-md shadow-blue-500/10"
                      : "bg-[#060A13] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  <span className="text-xs font-semibold leading-tight line-clamp-1">{tpl.name}</span>
                  <span className="text-[10px] text-slate-500 font-mono">~{tpl.expectedTokens} tokens</span>
                </button>
              ))}
            </div>
          </div>

          {/* Connected Graph Canvas */}
          <div className="relative p-6 rounded-3xl bg-[#070B14] border border-slate-800/90 shadow-2xl overflow-hidden flex flex-col gap-4">
            {/* Background cyber grid */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #0066FF 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <Layers className="w-4 h-4 text-[#00F0FF]" />
                <span>Asynchronous Computational Graph (DAG)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                State: {isRunning ? "Active Pulse" : activeStep >= 4 ? "Execution Ready" : "Idle"}
              </span>
            </div>

            {/* Linear DAG Node Sequence */}
            <div className="flex flex-col gap-3 relative z-10">
              {nodes.map((node, index) => {
                const isNodeActive = node.status === "running";
                const isNodeDone = node.status === "completed";

                return (
                  <div key={node.id} className="relative flex flex-col">
                    {/* Node Box */}
                    <div
                      className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                        isNodeActive
                          ? "bg-[#0066FF]/20 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)] scale-[1.01]"
                          : isNodeDone
                          ? "bg-[#091122] border-emerald-500/50 shadow-md"
                          : "bg-[#090E1A] border-slate-800/80 opacity-70"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                            isNodeActive
                              ? "bg-[#00F0FF] text-black animate-pulse"
                              : isNodeDone
                              ? "bg-emerald-500 text-black"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{node.name}</span>
                            {isNodeDone && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {isNodeActive && (
                              <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400">{node.details}</span>
                        </div>
                      </div>

                      {/* Performance Metas */}
                      <div className="flex items-center gap-3 font-mono text-xs shrink-0">
                        {isNodeDone && (
                          <>
                            <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                              +{node.latency}ms
                            </span>
                            <span className="text-slate-400">{node.tokens} tok</span>
                          </>
                        )}
                        {isNodeActive && (
                          <span className="text-[#00F0FF] animate-pulse">Computing...</span>
                        )}
                        {!isNodeActive && !isNodeDone && (
                          <span className="text-slate-600">Pending</span>
                        )}
                      </div>
                    </div>

                    {/* Connecting Wire Animation between nodes */}
                    {index < nodes.length - 1 && (
                      <div className="flex justify-center h-4 relative">
                        <div
                          className={`w-0.5 h-full transition-colors duration-300 ${
                            activeStep > index
                              ? "bg-gradient-to-b from-[#00F0FF] to-emerald-400 shadow-[0_0_8px_#00F0FF]"
                              : activeStep === index
                              ? "bg-[#00F0FF] animate-pulse"
                              : "bg-slate-800"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Prompt Configuration & Live Execution Terminal (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Prompt Tuning Parameters */}
          <div className="p-5 rounded-2xl bg-[#090F1B] border border-slate-800 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-[#0066FF]" /> Hyperparameters
              </span>
              <span className="text-[10px] font-mono text-slate-500">FP16 Matrix</span>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-400">Foundation Model</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#0066FF]"
              >
                <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Optimized)</option>
                <option value="GPT-4o Omnimodal">GPT-4o Omnimodal</option>
                <option value="DeepSeek R1 Reasoning">DeepSeek R1 Reasoning</option>
                <option value="Llama 3.3 70B Quantized">Llama 3.3 70B (Edge)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Sampling Temperature</span>
                <span className="font-mono text-[#00F0FF]">{temperature}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-[#0066FF] cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-400">Active Test Prompt</label>
              <textarea
                rows={3}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#0066FF] font-mono resize-none"
              />
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-[#090F1B] border border-slate-800 text-center flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-mono">Latency</span>
              <span className="text-sm font-bold text-white font-mono">{pipelineMetrics.totalLatency}ms</span>
            </div>
            <div className="p-3 rounded-xl bg-[#090F1B] border border-slate-800 text-center flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-mono">Total Tokens</span>
              <span className="text-sm font-bold text-[#00F0FF] font-mono">{pipelineMetrics.totalTokens}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#090F1B] border border-slate-800 text-center flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-mono">Est. Cost</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">${pipelineMetrics.costUsd}</span>
            </div>
          </div>

          {/* JSON Structured Output Terminal */}
          <div className="flex-1 p-5 rounded-2xl bg-[#060910] border border-slate-800 flex flex-col gap-3 min-h-[300px]">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-mono font-semibold text-slate-300">Inference Response</span>
              </div>
              {streamedText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              )}
            </div>

            <div className="flex-1 overflow-auto max-h-[360px]">
              {streamedText ? (
                <pre className="font-mono text-xs text-emerald-300 leading-relaxed whitespace-pre-wrap">
                  {streamedText}
                </pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-600 gap-2">
                  <Activity className="w-8 h-8 opacity-40 animate-pulse" />
                  <span className="text-xs">Click "RUN NEURAL PIPELINE" to stream node outputs and schema validation.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
