"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Code2,
  CheckCircle2,
  Play,
  Award,
  Clock,
  ChevronRight,
  FileText,
  AlertCircle,
  Sparkles,
  Terminal,
  Check,
  Video,
  Send,
} from "lucide-react";

interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export default function ScholarisApp() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeTab, setActiveTab] = useState<"sandbox" | "lecture" | "quiz">("sandbox");
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(1);

  // Sandbox State
  const [userCode, setUserCode] = useState(
`// CS-401 Challenge: Implement Idempotent Retry with Exponential Backoff
async function executeWithRetry(apiCall, maxRetries = 3) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await apiCall();
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) throw err;
      const delay = Math.pow(2, attempt) * 100;
      await new Promise(r => setTimeout(r, delay));
    }
  }
}`
  );

  const [testResults, setTestResults] = useState<{
    status: "idle" | "running" | "passed" | "failed";
    tests: { name: string; passed: boolean; duration: number }[];
    score?: number;
  }>({
    status: "idle",
    tests: [],
  });

  const courses = [
    {
      code: "CS-401",
      title: "Distributed Cloud Architecture & Consensus",
      instructor: "Prof. Alan Mitchell, PhD",
      progress: 68,
      lessons: [
        { id: "L-1", title: "Introduction to Raft Consensus & Leader Election", duration: "24m", completed: true },
        { id: "L-2", title: "Building Resilient Idempotent Retry Pipelines", duration: "38m", completed: false },
        { id: "L-3", title: "CAP Theorem Tradeoffs in Microservice Topologies", duration: "45m", completed: false },
        { id: "L-4", title: "Zero-Downtime Database Migration Strategies", duration: "32m", completed: false },
      ],
    },
    {
      code: "AI-502",
      title: "Transformer Attention & Fine-Tuning LLMs",
      instructor: "Dr. Elena Rostova",
      progress: 42,
      lessons: [
        { id: "L-1", title: "Scaled Dot-Product Attention Mechanics", duration: "30m", completed: true },
        { id: "L-2", title: "LoRA & QLoRA Quantized Adapter Training", duration: "50m", completed: false },
        { id: "L-3", title: "Direct Preference Optimization (DPO)", duration: "40m", completed: false },
      ],
    },
  ];

  const currentCourse = courses[activeCourse];

  const runCodeTests = () => {
    setTestResults({ status: "running", tests: [] });
    setTimeout(() => {
      setTestResults({
        status: "passed",
        score: 100,
        tests: [
          { name: "Test 1: Recovers from 2 transient 503 network timeouts", passed: true, duration: 18 },
          { name: "Test 2: Verifies exponential delay doubling (100ms -> 200ms -> 400ms)", passed: true, duration: 24 },
          { name: "Test 3: Throws terminal exception upon exceeding maxRetries threshold", passed: true, duration: 12 },
        ],
      });
    }, 700);
  };

  return (
    <div className="w-full min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#0A0E1A]/90 backdrop-blur sticky top-12 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-[#00F0FF] p-[1px] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full bg-[#0A0E1A] rounded-xl flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">Scholaris University LMS</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Fall Semester 2026
              </span>
            </div>
            <p className="text-xs text-slate-400">Academic Portal, Live Coding Sandbox & Automated Grading</p>
          </div>
        </div>

        {/* Student Profile & GPA */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">John Doe (Student #8820)</span>
              <span className="text-[10px] text-emerald-400 font-mono">GPA: 3.94 / 4.00 (Honor Roll)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main LMS Viewport */}
      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Course Navigation & Syllabus (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Active Course Selector */}
          <div className="p-4 rounded-2xl bg-[#0C1222] border border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Enrolled Courses
            </span>
            <div className="flex flex-col gap-2">
              {courses.map((c, idx) => (
                <button
                  key={c.code}
                  onClick={() => {
                    setActiveCourse(idx);
                    setSelectedLessonIndex(0);
                  }}
                  className={`p-3.5 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                    activeCourse === idx
                      ? "bg-emerald-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                      : "bg-[#080C16] border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">{c.code}</span>
                    <span className="text-xs font-mono text-slate-400">{c.progress}% done</span>
                  </div>
                  <h4 className="text-xs font-bold text-white leading-snug">{c.title}</h4>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-[#00F0FF] rounded-full"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Module Syllabus & Lessons */}
          <div className="p-4 rounded-2xl bg-[#0C1222] border border-slate-800 flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" /> Syllabus Modules
              </span>
              <span className="text-[10px] font-mono text-slate-500">{currentCourse.lessons.length} Modules</span>
            </div>

            <div className="flex flex-col gap-2">
              {currentCourse.lessons.map((lesson, idx) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonIndex(idx)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors ${
                    selectedLessonIndex === idx
                      ? "bg-slate-800/80 border-[#00F0FF]/50 text-white"
                      : "bg-[#080C16] border-slate-800/80 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {lesson.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-tight line-clamp-1">
                        {lesson.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{lesson.duration}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Interactive Lesson Viewer & Code Sandbox (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Active Lesson Header & Tab Switcher */}
          <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                {currentCourse.code} • Lesson {selectedLessonIndex + 1}
              </span>
              <h2 className="text-lg font-bold text-white mt-1">
                {currentCourse.lessons[selectedLessonIndex]?.title}
              </h2>
            </div>

            <div className="flex rounded-xl bg-slate-950 border border-slate-800 p-1 text-xs">
              <button
                onClick={() => setActiveTab("sandbox")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === "sandbox" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code Lab</span>
              </button>
              <button
                onClick={() => setActiveTab("lecture")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === "lecture" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Lecture Stream</span>
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  activeTab === "quiz" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Assessment</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Live Interactive Code Sandbox & Automated Grader */}
          {activeTab === "sandbox" && (
            <div className="flex flex-col gap-4">
              {/* Code Editor Frame */}
              <div className="rounded-2xl bg-[#05070E] border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
                <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>challenge_solution.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                </div>

                <div className="p-4">
                  <textarea
                    rows={12}
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full bg-transparent text-emerald-300 font-mono text-xs leading-relaxed focus:outline-none resize-none"
                    spellCheck={false}
                  />
                </div>

                <div className="px-4 py-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Runtime: Node.js v20.x Isolated V8 VM
                  </span>
                  <button
                    onClick={runCodeTests}
                    disabled={testResults.status === "running"}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                  >
                    <Play className={`w-3.5 h-3.5 fill-white ${testResults.status === "running" ? "animate-spin" : ""}`} />
                    <span>{testResults.status === "running" ? "EVALUATING TEST SUITE..." : "RUN TEST CASES"}</span>
                  </button>
                </div>
              </div>

              {/* Automated Grader Feedback */}
              <div className="p-5 rounded-2xl bg-[#0C1222] border border-slate-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" /> Automated Test Results
                  </span>
                  {testResults.score && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      Score: {testResults.score}% (Grade A+)
                    </span>
                  )}
                </div>

                {testResults.status === "idle" && (
                  <p className="text-xs text-slate-500">
                    Click "RUN TEST CASES" above to compile your code against automated unit and boundary tests.
                  </p>
                )}

                {testResults.tests.length > 0 && (
                  <div className="flex flex-col gap-2 mt-1">
                    {testResults.tests.map((t, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-200">{t.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">{t.duration}ms</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Lecture Video View */}
          {activeTab === "lecture" && (
            <div className="rounded-2xl bg-[#05070E] border border-slate-800 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[350px]">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Play className="w-8 h-8 fill-emerald-400 ml-1" />
              </div>
              <h3 className="text-base font-bold text-white">
                Lecture 02: Resilient Idempotent Retry Pipelines
              </h3>
              <p className="text-xs text-slate-400 max-w-md">
                Stream 1080p recorded session by Prof. Alan Mitchell covering jitter distribution, exponential backoff curves, and distributed dead-letter queues.
              </p>
            </div>
          )}

          {/* TAB 3: Quiz Assessment */}
          {activeTab === "quiz" && (
            <div className="rounded-2xl bg-[#0C1222] border border-slate-800 p-6 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white">Module 2 Knowledge Check</h3>
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-300">
                  Q: Why is exponential jitter essential when hundreds of microservices retry requests simultaneously?
                </p>
                {[
                  "To prevent the 'Thundering Herd' problem from overwhelming recovering servers",
                  "To decrease overall database encryption key sizes",
                  "To force synchronous garbage collection in the runtime",
                ].map((opt, i) => (
                  <label
                    key={i}
                    className="p-3 rounded-xl bg-[#080C16] border border-slate-800 hover:border-emerald-500/50 flex items-center gap-3 text-xs text-slate-200 cursor-pointer"
                  >
                    <input type="radio" name="quiz-q1" defaultChecked={i === 0} className="accent-emerald-500" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
